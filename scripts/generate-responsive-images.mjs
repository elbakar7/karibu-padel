import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(__dirname, '..');

const images = [
  {
    name: 'hero',
    file: 'IMG_3097.JPG',
    widths: [640, 1024, 1440, 1920],
  },
  {
    name: 'courtside',
    file: 'IMG_3051.JPG',
    widths: [560, 896, 1280],
  },
  {
    name: 'lounge',
    file: 'IMG_4458.JPG',
    widths: [560, 896, 1200],
  },
  {
    name: 'walkway',
    file: 'IMG_4462.JPG',
    widths: [640, 1024, 1400],
  },
];

const formatPresets = [
  { ext: 'avif', options: { quality: 60 } },
  { ext: 'webp', options: { quality: 70 } },
];

const jpegQuality = 72;
const placeholderWidth = 24;

const outputDir = path.resolve(projectRoot, 'src/assets/generated');

await fs.mkdir(outputDir, { recursive: true });

const metadataSummary = [];

for (const image of images) {
  const inputPath = path.resolve(projectRoot, image.file);
  const imageSharp = sharp(inputPath);
  const metadata = await imageSharp.metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to read dimensions for ${image.file}`);
  }

  const baseRatio = metadata.height / metadata.width;
  const imageOutputDir = path.join(outputDir, image.name);
  await fs.mkdir(imageOutputDir, { recursive: true });

  for (const width of image.widths) {
    for (const { ext, options } of formatPresets) {
      const outputPath = path.join(imageOutputDir, `${image.name}-${width}.${ext}`);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .toFormat(ext, options)
        .toFile(outputPath);
    }
  }

  const largestWidth = Math.max(...image.widths);
  const fallbackPath = path.join(imageOutputDir, `${image.name}-${largestWidth}.jpg`);
  await sharp(inputPath)
    .resize({ width: largestWidth, withoutEnlargement: true })
    .jpeg({ quality: jpegQuality, progressive: true })
    .toFile(fallbackPath);

  const placeholderBuffer = await sharp(inputPath)
    .resize({ width: placeholderWidth })
    .webp({ quality: 40 })
    .blur(10)
    .toBuffer();

  const placeholderPath = path.join(imageOutputDir, `${image.name}-placeholder.webp`);
  await fs.writeFile(placeholderPath, placeholderBuffer);

  metadataSummary.push({
    name: image.name,
    aspectRatio: Number(baseRatio.toFixed(6)),
    originalWidth: metadata.width,
    originalHeight: metadata.height,
    generatedWidths: image.widths,
    fallback: path.relative(projectRoot, fallbackPath),
    placeholder: path.relative(projectRoot, placeholderPath),
  });
}

const metadataPath = path.join(outputDir, 'metadata.json');
await fs.writeFile(metadataPath, JSON.stringify(metadataSummary, null, 2));

console.log(`Generated responsive assets in ${outputDir}`);
console.log(`Metadata written to ${metadataPath}`);

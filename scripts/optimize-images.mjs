import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/assets";
const outputDir = "public/assets/optimized";

// Create output folder if it doesn’t exist
fs.mkdirSync(outputDir, { recursive: true });

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize({ width: 1600 })
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`✅ Optimized ${path.basename(inputPath)} → ${outputPath}`);
  } catch (error) {
    console.error(`❌ Failed ${inputPath}: ${error.message}`);
  }
};

const walkDir = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const outputPath = path.join(outputDir, path.parse(file).name + ".webp");
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      optimizeImage(fullPath, outputPath);
    }
  });
};

walkDir(inputDir);
console.log("✨ Image optimization complete.");

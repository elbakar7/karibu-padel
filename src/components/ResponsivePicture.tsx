import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { PictureAsset } from '../types/media';
import { cn } from './ui/utils';

type ImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'sizes' | 'alt' | 'loading' | 'className'
>;

interface ResponsivePictureProps extends ImgProps {
  image: PictureAsset;
  alt: string;
  pictureClassName?: string;
  imgClassName?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'sync' | 'async';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ResponsivePicture({
  image,
  alt,
  pictureClassName,
  imgClassName,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  style,
  onLoad,
  ...imgProps
}: ResponsivePictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad: ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <picture
      className={cn('block', pictureClassName)}
      style={
        image.placeholder
          ? {
              backgroundImage: `url(${image.placeholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              ...style,
            }
          : style
      }
    >
      {image.sources.map((source, index) => (
        <source
          key={`${source.type}-${index}`}
          srcSet={source.srcSet}
          type={source.type}
          sizes={sizes}
        />
      ))}
      <img
        src={image.img.src}
        width={image.img.width}
        height={image.img.height}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        className={cn(
          'block w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
        sizes={sizes}
        {...imgProps}
      />
    </picture>
  );
}

import { useEffect, useRef, useState } from 'react';
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
  lazyRootMargin?: string;
  lazyThreshold?: number | number[];
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
  lazyRootMargin = '600px 0px',
  lazyThreshold = 0,
  ...imgProps
}: ResponsivePictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pictureRef = useRef<HTMLPictureElement>(null);
  const [shouldLoad, setShouldLoad] = useState(
    loading === 'eager' || fetchPriority === 'high',
  );

  useEffect(() => {
    if (loading === 'eager' || fetchPriority === 'high') {
      setShouldLoad(true);
    }
  }, [loading, fetchPriority]);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    if (typeof window === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const node = pictureRef.current;

    if (!node) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        rootMargin: lazyRootMargin,
        threshold: lazyThreshold,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad, lazyRootMargin, lazyThreshold]);

  useEffect(() => {
    if (!shouldLoad) {
      setIsLoaded(false);
    }
  }, [shouldLoad]);

  const handleLoad: ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  const resolvedSrc =
    shouldLoad && image.img.src ? image.img.src : image.placeholder ?? image.img.src;

  const resolvedPictureStyle =
    image.placeholder && (!isLoaded || !shouldLoad)
      ? {
          backgroundImage: `url(${image.placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...(image.img.width && image.img.height
            ? { aspectRatio: `${image.img.width} / ${image.img.height}` }
            : {}),
          ...style,
        }
      : {
          ...(image.img.width && image.img.height
            ? { aspectRatio: `${image.img.width} / ${image.img.height}` }
            : {}),
          ...style,
        };

  return (
    <picture
      ref={pictureRef}
      className={cn('block', pictureClassName)}
      style={resolvedPictureStyle}
    >
      {shouldLoad &&
        image.sources.map((source, index) => (
          <source
            key={`${source.type}-${index}`}
            srcSet={source.srcSet}
            type={source.type}
            sizes={sizes}
          />
        ))}
      <img
        src={resolvedSrc}
        width={image.img.width}
        height={image.img.height}
        alt={alt}
        loading={shouldLoad ? loading : 'eager'}
        decoding={shouldLoad ? decoding : 'async'}
        fetchPriority={shouldLoad ? fetchPriority : undefined}
        onLoad={shouldLoad ? handleLoad : undefined}
        className={cn(
          'block w-full h-full object-cover transition-opacity duration-500',
          shouldLoad ? (isLoaded ? 'opacity-100' : 'opacity-0') : 'opacity-100 blur-md scale-105',
          imgClassName,
        )}
        sizes={sizes}
        {...imgProps}
      />
    </picture>
  );
}

import type { PictureAsset } from '../types/media';

import heroPlaceholder from '../assets/generated/hero/hero-placeholder.webp';
import heroAvif640 from '../assets/generated/hero/hero-640.avif';
import heroAvif1024 from '../assets/generated/hero/hero-1024.avif';
import heroAvif1440 from '../assets/generated/hero/hero-1440.avif';
import heroAvif1920 from '../assets/generated/hero/hero-1920.avif';
import heroWebp640 from '../assets/generated/hero/hero-640.webp';
import heroWebp1024 from '../assets/generated/hero/hero-1024.webp';
import heroWebp1440 from '../assets/generated/hero/hero-1440.webp';
import heroWebp1920 from '../assets/generated/hero/hero-1920.webp';
import heroFallback from '../assets/generated/hero/hero-1920.jpg';
import heroImage from '../../IMG_3117.JPG';

import courtsideAvif560 from '../assets/generated/courtside/courtside-560.avif';
import courtsideAvif896 from '../assets/generated/courtside/courtside-896.avif';
import courtsideAvif1280 from '../assets/generated/courtside/courtside-1280.avif';
import courtsideWebp560 from '../assets/generated/courtside/courtside-560.webp';
import courtsideWebp896 from '../assets/generated/courtside/courtside-896.webp';
import courtsideWebp1280 from '../assets/generated/courtside/courtside-1280.webp';
import courtsideFallback from '../assets/generated/courtside/courtside-1280.jpg';
import courtsidePlaceholder from '../assets/generated/courtside/courtside-placeholder.webp';

import loungeAvif560 from '../assets/generated/lounge/lounge-560.avif';
import loungeAvif896 from '../assets/generated/lounge/lounge-896.avif';
import loungeAvif1200 from '../assets/generated/lounge/lounge-1200.avif';
import loungeWebp560 from '../assets/generated/lounge/lounge-560.webp';
import loungeWebp896 from '../assets/generated/lounge/lounge-896.webp';
import loungeWebp1200 from '../assets/generated/lounge/lounge-1200.webp';
import loungeFallback from '../assets/generated/lounge/lounge-1200.jpg';
import loungePlaceholder from '../assets/generated/lounge/lounge-placeholder.webp';

import walkwayAvif640 from '../assets/generated/walkway/walkway-640.avif';
import walkwayAvif1024 from '../assets/generated/walkway/walkway-1024.avif';
import walkwayAvif1400 from '../assets/generated/walkway/walkway-1400.avif';
import walkwayWebp640 from '../assets/generated/walkway/walkway-640.webp';
import walkwayWebp1024 from '../assets/generated/walkway/walkway-1024.webp';
import walkwayWebp1400 from '../assets/generated/walkway/walkway-1400.webp';
import walkwayFallback from '../assets/generated/walkway/walkway-1400.jpg';
import walkwayPlaceholder from '../assets/generated/walkway/walkway-placeholder.webp';

const toSrcSet = (entries: Array<[string, number]>) =>
  entries.map(([path, width]) => `${path} ${width}w`).join(', ');

const roundHeight = (width: number, aspectRatio: number) => Math.round(width * aspectRatio);

const HERO_MAX_WIDTH = 1920;
const HERO_ASPECT_RATIO = 0.666592;

export const heroPicture: PictureAsset = {
  sources: [
    {
      type: 'image/avif',
      srcSet: toSrcSet([
        [heroAvif640, 640],
        [heroAvif1024, 1024],
        [heroAvif1440, 1440],
        [heroAvif1920, 1920],
      ]),
    },
    {
      type: 'image/webp',
      srcSet: toSrcSet([
        [heroWebp640, 640],
        [heroWebp1024, 1024],
        [heroWebp1440, 1440],
        [heroWebp1920, 1920],
      ]),
    },
  ],
  img: {
    src: heroFallback,
    width: HERO_MAX_WIDTH,
    height: roundHeight(HERO_MAX_WIDTH, HERO_ASPECT_RATIO),
  },
  placeholder: heroPlaceholder,
};

export const courtsidePicture: PictureAsset = {
  sources: [
    {
      type: 'image/avif',
      srcSet: toSrcSet([
        [courtsideAvif560, 560],
        [courtsideAvif896, 896],
        [courtsideAvif1280, 1280],
      ]),
    },
    {
      type: 'image/webp',
      srcSet: toSrcSet([
        [courtsideWebp560, 560],
        [courtsideWebp896, 896],
        [courtsideWebp1280, 1280],
      ]),
    },
  ],
  img: {
    src: courtsideFallback,
    width: 1280,
    height: roundHeight(1280, 0.561807),
  },
  placeholder: courtsidePlaceholder,
};

export const loungePicture: PictureAsset = {
  sources: [
    {
      type: 'image/avif',
      srcSet: toSrcSet([
        [loungeAvif560, 560],
        [loungeAvif896, 896],
        [loungeAvif1200, 1200],
      ]),
    },
    {
      type: 'image/webp',
      srcSet: toSrcSet([
        [loungeWebp560, 560],
        [loungeWebp896, 896],
        [loungeWebp1200, 1200],
      ]),
    },
  ],
  img: {
    src: loungeFallback,
    width: 1200,
    height: roundHeight(1200, 0.666667),
  },
  placeholder: loungePlaceholder,
};

export const walkwayPicture: PictureAsset = {
  sources: [
    {
      type: 'image/avif',
      srcSet: toSrcSet([
        [walkwayAvif640, 640],
        [walkwayAvif1024, 1024],
        [walkwayAvif1400, 1400],
      ]),
    },
    {
      type: 'image/webp',
      srcSet: toSrcSet([
        [walkwayWebp640, 640],
        [walkwayWebp1024, 1024],
        [walkwayWebp1400, 1400],
      ]),
    },
  ],
  img: {
    src: walkwayFallback,
    width: 1400,
    height: roundHeight(1400, 0.666667),
  },
  placeholder: walkwayPlaceholder,
};

export const defaultOgImageUrl = heroImage;

export interface PictureSource {
  type: string;
  srcSet: string;
}

export interface PictureAsset {
  sources: PictureSource[];
  img: {
    src: string;
    width: number;
    height: number;
  };
  placeholder: string;
}

import React from "react";
import Image from "next/image";

export interface Thumbnail {
  [key: string]: ThumbnailData;
}

export interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}

export const thumbnails: ThumbnailData[] = [];

const ThumbnailList = () => {
  return (
    <>
      {thumbnails.map((thumbnail) => (
        <Image
          key={''}
          alt=""
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
        />
      ))}
    </>
  );
};

export default ThumbnailList;

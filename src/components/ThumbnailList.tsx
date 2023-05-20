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

const ThumbnailList = ({ thumbnail }: { thumbnail: Thumbnail }) => {
  return (
    <>
      {Object.entries(thumbnail).map(([key, { url, width, height }]) => (
        <Image
          key={key}
          alt={key}
          src={url}
          width={width}
          height={height}
        />
      ))}
    </>
  );
};

export default ThumbnailList;
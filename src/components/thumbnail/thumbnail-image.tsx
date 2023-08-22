import React from "react";
import Image from "next/image";

const ThumbnailImage = ({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) => {
  return (
    <Image
      alt={`picture of video's ${alt} thumbnail`}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default ThumbnailImage;

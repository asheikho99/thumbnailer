import React from "react";
import Image from "next/image";

const Thumbnail = ({
  key,
  alt,
  src,
  width,
  height,
}: {
  key: string;
  alt: string;
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      key={key}
      alt={`picture of video's ${alt} thumbnail`}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Thumbnail;

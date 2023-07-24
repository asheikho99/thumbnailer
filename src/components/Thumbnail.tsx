import React from "react";
import Image from "next/image";

const Thumbnail = ({
  key,
  title,
  alt,
  src,
  width,
  height,
}: {
  key: string;
  title: string;
  alt: string;
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      key={title}
        alt={`picture of video's ${alt} thumbnail`}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Thumbnail;

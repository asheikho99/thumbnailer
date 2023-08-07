import React from "react";
import ThumbnailImage from "./thumbnail-image";
import Title from "./title";

const Thumbnail = ({ title, data }: { title: string; data: Thumbnail }) => {
  return (
    <div className="flex flex-col space-y-2">
      <ThumbnailImage
        src={data.url}
        width={data.width}
        height={data.height}
        alt={title}
      />
      <Title title={title} width={data.width} height={data.height} />
    </div>
  );
};

export default Thumbnail;

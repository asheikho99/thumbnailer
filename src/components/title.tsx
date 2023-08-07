import React from "react";

const Title = ({
  title,
  width,
  height,
}: {
  title: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="flex flex-row space-x-2 font-semibold">
      <p>{title.toUpperCase()}</p>
      <span>{`(${width} x ${height})`}</span>
    </div>
  );
};

export default Title;

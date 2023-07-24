"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SearchBar = () => {
  const router = useRouter();

  return (
    <form action="">
      <Input
        type="text"
        name="videoId"
        placeholder="Enter video ID"
        onChange={(e) => {
          router.push(`/?search=${e.target.value}`);
        }}
        className="border p-2"
      />
    </form>
  );
};

export default SearchBar;

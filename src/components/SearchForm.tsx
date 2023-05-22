import React from "react";

import { fetchVideoData } from "@/actions/fetchVideoData";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <form
      className="flex flex-row"
      action={fetchVideoData}
    >
      <Input
        type="text"
        name="videoId"
        placeholder="Enter video ID"
        className="border p-2"
      />
      <Button
        type="submit"
        className="ml-2 p-2"
      >
        <Search />
      </Button>
    </form>
  );
};

export default SearchForm;

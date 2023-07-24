import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 mt-auto">
      <div className="container flex flex-row items-center justify-start">
        <Link
          href={"https://github.com/asheikho99/thumbnailer"}
          target="_blank"
          className="text-sm leading-loose text-muted-foreground"
        >
          View source code on GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

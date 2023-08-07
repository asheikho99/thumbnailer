import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-secondary py-6">
      <div className="container mx-auto flex max-w-5xl flex-row items-center justify-start">
        <Link
          href={"https://github.com/asheikho99/thumbnailer"}
          target="_blank"
          className="text-sm leading-loose text-muted-foreground hover:underline"
        >
          View source code on GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

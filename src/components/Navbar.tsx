import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-6 border-b border-secondary">
      <div className="container mx-auto flex max-w-5xl flex-row items-center justify-start">
        <Link href={"/"} className="text-2xl font-black">
          THUMBNAILER
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

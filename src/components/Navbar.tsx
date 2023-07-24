import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="container flex flex-row items-center justify-start">
        <Link href={"/"} className="text-2xl font-black">
          THUMBNAILER
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

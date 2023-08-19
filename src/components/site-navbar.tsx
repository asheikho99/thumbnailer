import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./theme-switcher-button";

const Navbar = () => {
  return (
    <nav className="py-6 border-b border-secondary">
      <div className="container mx-auto flex max-w-5xl flex-row items-center justify-between">
        <Link href={"/"} className="text-2xl font-black select-none">
          THUMBNAILER
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;

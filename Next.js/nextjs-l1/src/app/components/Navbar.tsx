import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="font-bold">Navbar</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  ); 
};

export default Navbar;

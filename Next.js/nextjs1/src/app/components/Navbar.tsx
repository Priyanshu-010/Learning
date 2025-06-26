import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly">
      <div>
        <Link href="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="flex justify-around">
        <Link href="/performance">perfromancePage</Link>
        <Link href="/reliability">reliabilityPage</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Sphere</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-lg font-medium hover:text-blue-500">
            Home
          </Link>
          <Link href="/dashboard" className="text-lg font-medium hover:text-blue-500">
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button>Sign up</Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
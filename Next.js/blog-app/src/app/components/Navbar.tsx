import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
          <Link
            href="/dashboard"
            className="text-lg font-medium hover:text-blue-500"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
          <LoginLink className={buttonVariants()}>Login</LoginLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

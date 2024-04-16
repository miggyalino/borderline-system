import { NAVBAR_LINKS } from "@/constants";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  auth,
  currentUser,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Sidebar from "./Sidebar";

const Navbar = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <nav className="bg-gray-100">
      <div className="max-container padding-container py-2 flex flexBetween">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/BorderlineLogo.png"
              alt="Borderline Travel and Tours"
              width={120}
              height={150}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sidebar />
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-10">
            {NAVBAR_LINKS.map((link) => (
              <Link key={link.title} href={link.link}>
                <p className="text-md text-gray-500 hover:text-black">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 flexCenter">
            <Button variant="destructive">Book Now</Button>
            {userId || user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flexCenter gap-3">
                <Button className="btn-secondary" variant="destructive">
                  <SignInButton />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

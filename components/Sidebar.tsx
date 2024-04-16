import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVBAR_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex flexCenter">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image
                src="/BorderlineLogo.png"
                alt="Borderline Travel and Tours"
                width={150}
                height={150}
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="py-6">
            <div className="flex flex-col items-start gap-4">
              {NAVBAR_LINKS.map((link) => (
                <Link key={link.title} href={link.link}>
                  <p className="text-gray-500 hover:text-red-500 text-lg">
                    {link.title}
                  </p>
                </Link>
              ))}
              <Link href="/book">
                <p className="text-gray-500 hover:text-red-500 text-lg">
                  Book Now
                </p>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

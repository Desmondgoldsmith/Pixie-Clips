import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex-shrink-0">
              <Image
                src="/images/pixie-clips.png"
                alt="pixie clips"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-secondary-light text-primary-dark">
              Dashboard
            </Button>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

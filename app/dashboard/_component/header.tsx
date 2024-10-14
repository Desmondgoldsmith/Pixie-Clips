import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <header className="bg-primary-dark text-white shadow-md">
      <div className="container mx-auto px-4">
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
          <div className="flex items-center">
            {/* <span className="mr-4 text-sm font-medium">John Doe</span>
            <Image
              src="/path-to-user-image.jpg"
              alt="User"
              width={32}
              height={32}
              className="rounded-full border-2 border-secondary"
            /> */}
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

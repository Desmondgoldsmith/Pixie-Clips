import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="public/images/pixie-clips-login.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="z-10 bg-white p-8 rounded-lg shadow-xl">
        <SignIn />
      </div>
    </div>
  );
}

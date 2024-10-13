import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/pixie-clips-login.png"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="absolute" />
      <SignIn />
    </div>
  );
}

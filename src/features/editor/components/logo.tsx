import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-15  relative shrink-0">
        <Image
          src="/icon.svg"
          alt="Logo"
          fill
          className="shrink-0 hover:opacity-75 hover:scale-125 transition"
        />
      </div>
    </Link>
  );
};

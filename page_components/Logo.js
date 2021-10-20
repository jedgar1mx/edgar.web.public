import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/Logo.png" alt="Edgar Web" width="64" height="64" />
      </a>
    </Link>
  );
}

export default Logo;

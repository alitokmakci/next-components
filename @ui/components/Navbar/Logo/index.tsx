import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { NavbarLogoProps } from "@ui/components/Navbar/Logo/type";

export default function NavbarLogo({
  href,
  hasImage,
  children,
  ...imageProps
}: NavbarLogoProps) {
  if (href) {
    return (
      <Link
        className="flex items-center justify-center font-medium text-xl text-text"
        href={href}
      >
        {hasImage && <Image className="mr-2" {...(imageProps as ImageProps)} />}
        {children}
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-center font-medium text-xl text-text">
      {hasImage && <Image className="mr-2" {...(imageProps as ImageProps)} />}
      {children}
    </div>
  );
}

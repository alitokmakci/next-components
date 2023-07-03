import React from "react";
import { ImageProps } from "next/image";

export interface NavbarLogoPropsWithImage extends ImageProps {
  hasImage: true;
  href?: string;
  children?: React.ReactNode;
}

interface NavbarLogoPropsWithoutImage {
  hasImage?: false;
  href?: string;
  children?: React.ReactNode;
}

export type NavbarLogoProps =
  | NavbarLogoPropsWithImage
  | NavbarLogoPropsWithoutImage;

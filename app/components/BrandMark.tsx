"use client";

import Image from "next/image";
import logoSrc from "../images/firefly-logo-cropped.png";

type BrandMarkProps = {
  height?: number;
};

export default function BrandMark({ height = 40 }: BrandMarkProps) {
  const width = Math.round(height * (872 / 280));
  return (
    <Image
      src={logoSrc}
      alt="Firefly"
      height={height}
      width={width}
      priority
    />
  );
}

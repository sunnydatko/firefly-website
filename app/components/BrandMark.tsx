"use client";

import Image from "next/image";

type BrandMarkProps = {
  height?: number;
};

export default function BrandMark({ height = 40 }: BrandMarkProps) {
  const width = Math.round(height * (872 / 280));
  return (
    <Image
      src="/firefly-logo-cropped.png"
      alt="Firefly"
      height={height}
      width={width}
      priority
    />
  );
}

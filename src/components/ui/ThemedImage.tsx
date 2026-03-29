"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemedImageProps {
  /** Base image path, e.g. "/screenshots/resumatch-ai.png" */
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}

/**
 * Resolves a base screenshot path to its themed variant.
 * Base:  /screenshots/resumatch-ai.png
 * Dark:  /screenshots/Dark Mode/resumatch-ai-dark.png
 * Light: /screenshots/Light Mode/resumatch-ai-light.png
 */
function getThemedPath(basePath: string, theme: string): string {
  const match = basePath.match(/^\/screenshots\/(.+)\.(\w+)$/);
  if (!match) return basePath;

  const [, name, ext] = match;

  if (theme === "light") {
    return `/screenshots/Light Mode/${name}-light.${ext}`;
  }
  return `/screenshots/Dark Mode/${name}-dark.${ext}`;
}

export function ThemedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
}: ThemedImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, use the base path (dark is default theme)
  const imageSrc = mounted
    ? getThemedPath(src, resolvedTheme ?? "dark")
    : getThemedPath(src, "dark");

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
    />
  );
}

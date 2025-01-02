"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageComponent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ImgSrc =
    theme && theme === "light"
      ? "/static/images/profile/profile-dark.png"
      : "/static/images/profile/profile-light.png";

  return (
    <Image
      className="rounded-circle mt-12 md:mt-20"
      src={ImgSrc}
      alt="Profile Photo"
      width={200}
      height={200}
      priority={true}
    />
  );
};

export default ImageComponent;

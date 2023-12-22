'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ImageComponent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ImgSrc =
    theme === "dark"
      ? "/static/images/profile/profiledark.webp"
      : "/static/images/profile/profilelight.webp";

  return (
    <Image
      className="rounded-circle xl:mt-20 lg:mt-20 md:mt-20 mt-10"
      src={ImgSrc}
      alt="Profile Photo"
      width={200}
      height={200}
      priority={true}
    />
  );
};

export default ImageComponent;
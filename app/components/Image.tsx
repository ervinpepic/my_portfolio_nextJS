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
    theme && theme === "light"
      ? "/static/images/profile/profiledark.png"
      : "/static/images/profile/profilelight.png";

  return (
    <div className="flex flex-col items-center">
    <Image
      className="rounded-circle mt-12 md:mt-20"
      src={ImgSrc}
      alt="Profile Photo"
      width={200}
      height={200}
      priority={true}
    />
    </div>
  );
};

export default ImageComponent;
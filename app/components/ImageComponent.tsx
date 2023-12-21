'use client';
import Image from "next/image";
import { useTheme } from "next-themes";


const ImageComponent = () => {
    const { theme } = useTheme();
    let imageSrc = ''
    if (theme === 'dark')
      imageSrc = '/media/images/profile/profilelight.webp';
    imageSrc = '/media/images/profile/profiledark.webp'
    
  return (
    <Image
    className="rounded-circle xl:mt-20 lg:mt-20 md:mt-20 mt-10"
    src={imageSrc}
    alt="Profile Photo"
    width={200}
    height={200}
  ></Image>
  )
}

export default ImageComponent
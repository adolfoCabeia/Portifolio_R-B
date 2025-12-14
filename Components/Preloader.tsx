"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type PType = {
  logo: string | StaticImageData;
};

const Preloader = ({ logo }: PType) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fadeOut" : ""}`}>
      <Image src={logo} alt="Logo" className="logo-loader" />
    </div>
  );
};

export default Preloader;

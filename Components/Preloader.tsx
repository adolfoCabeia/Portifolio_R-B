import Image from "next/image";
import { useEffect, useState } from "react";


const Preloader = ({ logo }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000); // tempo do preloader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preloader ${fadeOut ? 'fadeOut' : ""}`}
    >
      <Image src={logo} alt="Logo" className="logo-loader" />
    </div>
  );
};

export default Preloader;

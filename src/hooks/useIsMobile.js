import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return isMobile;
}

export default useIsMobile;

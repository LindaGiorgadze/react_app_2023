import { useDebugValue, useEffect, useState } from "react";

const useResolution = () => {
  const [resolution, setResolution] = useState();
  useDebugValue(resolution);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResolution(e.target.innerWidth);
    });
  }, []);
  return resolution;
};

export default useResolution;

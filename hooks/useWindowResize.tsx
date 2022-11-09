import React from "react";

type windowSize = {
  width?: number;
  height?: number;
};

function useWindowResize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = React.useState<windowSize>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize(getSize());
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowResize;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useEffect, useRef, useState } from "react";
import Scroll from "locomotive-scroll";

type UseLocomotiveScrollHook = [Scroll | null];

const useLocomotiveScroll = ({
  ref,
  smooth,
  ...options
}: any): UseLocomotiveScrollHook => {
  const [locomotiveScrollRef, setRef] = useState<Scroll | null>(null);

  useEffect(() => {
    if (ref?.current) {
      import("locomotive-scroll").then((locomotiveModule) => {
        const scroll = new locomotiveModule.default({
          el: ref.current,
          smooth,
          lerp: 0.07,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
          },
        });
        setRef(scroll);
      });
    }
    return () => {
      locomotiveScrollRef?.destroy();
    };
  }, [ref]);
  
  return [locomotiveScrollRef];
};
export default useLocomotiveScroll;

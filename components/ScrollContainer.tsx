import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
  children: React.ReactNode;
};

const ScrollContainer = ({ children }: Props) => {
  const size = useWindowSize();
  const router = useRouter();

  // Ref for parent div and scrolling div
  const scrollContainer: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null)!;

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    if (scrollContainer.current) {
      console.log("set new height");
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
      console.log(scrollContainer.current.getBoundingClientRect().height);
    }
  };

  const [state, setState] = useState({
    scroll: 0,
    skew: 0,
  });

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / (size.width! > 1200 ? 450 : size.width! );
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    setState({ scroll: data.rounded, skew: skew });
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size, router.route]);

  return (
    <div className="scroll-container">
      <div
        ref={scrollContainer}
        style={{
          transform: `translate3d(0, -${state.scroll}px, 0) skewY(${state.skew}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;

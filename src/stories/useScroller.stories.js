import React from "react";
import { useScroller } from "../index";

export default {
  title: "useScroller",
};

export const UseScrollerExample = () => {
  const scroller = useScroller({ y: 250, isSmooth: true });

  return (
    <div style={{ height: 2500 }}>
      <button onClick={scroller}>Scroll to 250px</button>
    </div>
  );
};

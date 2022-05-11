interface Options {
  x?: number;
  y?: number;
  isSmooth?: boolean;
}

export default function useScroller({
  x = 0,
  y = 0,
  isSmooth = false,
}: Options): (() => void) | undefined {
  if (!window) {
    return;
  }

  return function scroller() {
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? "smooth" : "auto",
    });
  };
}

import useScroller from "./useScroller";

let scrollToSpy = jest.spyOn(window, "scrollTo");
scrollToSpy.mockImplementation();

describe("test useScroller", () => {
  afterEach(() => {
    scrollToSpy.mockReset();
  });

  it('should scroll to a position with "auto" behavior', () => {
    const scroller = useScroller({ y: 100 });
    if (!scroller) {
      throw "invalid Window object";
    }
    scroller();

    expect(scrollToSpy).toHaveBeenCalledWith({
      left: 0,
      top: 100,
      behavior: "auto",
    });
  });

  it('should scroll to a position with "smooth" behavior', () => {
    const scroller = useScroller({ y: 100, isSmooth: true });
    if (!scroller) {
      throw "invalid Window object";
    }
    scroller();

    expect(scrollToSpy).toHaveBeenCalledWith({
      left: 0,
      top: 100,
      behavior: "smooth",
    });
  });
});

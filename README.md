# Scroller

An easy to use scrolling library for react.

### Install

```js
$ npm install simple-react-scroller
```

## Quick Start

```jsx harmony
import { useScroller } from "simple-react-scroller";

const scrollTo = useScroller({y: 250, isSmooth: true});
scrollTo();
```

## API

| Argument | Type                                                                                     | Required? | Description                                                                                                                                                                                     |
| -------- | ---------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| y   | number | No       | is the pixel along the vertical axis of the document                                                                                                                             |
| x     | number                                                                         | No       | is the pixel along the vertical axis of the document for                                                                                                                                                                 |
| isSmooth | boolean                                                      | No       | Specifies whether the scrolling should animate smoothly or instant 
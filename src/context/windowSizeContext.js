import { useState, createContext, useEffect } from "react";

export const WindowSizeContext = createContext({
  windowSize: {},
});

export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // this is a listener
    const log = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    // we attach this listener
    window.addEventListener("resize", log);

    // return a fn from useEffect for clean-up
    return () => window.removeEventListener("resize", log);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ windowSize }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

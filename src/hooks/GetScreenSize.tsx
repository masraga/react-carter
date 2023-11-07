import React from 'react';

const GetScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    if (typeof window.innerWidth != 'undefined') {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return screenSize;
};

export default GetScreenSize;

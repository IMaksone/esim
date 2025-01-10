import { useState, useEffect } from "react";

export const useScreenWidthGreaterThan = (width: number) => {
  const [greater, setGreater] = useState(false);

  useEffect(() => {
    const screenResolutionAction = () => {
      if (document.body.clientWidth > width) {
        setGreater(true);
      } else setGreater(false);
    };

    window.addEventListener("resize", () => {
      screenResolutionAction();
    });

    screenResolutionAction();

    return () => removeEventListener("resize", screenResolutionAction);
  }, [greater, width, setGreater]);

  return greater;
};

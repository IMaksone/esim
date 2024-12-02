import localFont from "next/font/local";

export const fontInter = localFont({
  src: [
    {
      path: "../../public/fonts/InterVariable.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterVariable-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

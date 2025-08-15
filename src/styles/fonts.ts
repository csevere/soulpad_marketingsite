import { CSSProperties } from "react";

const mobileHeadline1Font: CSSProperties = {
  fontSize: "1.3125rem", // 21px
};

const mobileHeadline2Font: CSSProperties = {
  fontSize: "1.125rem", // 18px
};

//official title font
const headline1Font: CSSProperties = {
  fontFamily: "Fredoka, sans-serif",
  fontWeight: "600",
  textAlign: "center",
  fontSize: "3rem", // 40px
  fontStyle: "normal",
  fontOpticalSizing: "auto",
};
const headline2Font: CSSProperties = {
  margin: "auto",
  fontSize: "1.5rem", // 24px
  fontWeight: "500",
  textAlign: "center",
  width: "100%",
};

const body1Styles: CSSProperties = {
  fontWeight: "500",
  fontSize: "1rem", // 16px
};

const funFont1: CSSProperties = {
  fontFamily: "Galindo, sans-serif",
  fontSize: "1.5rem", // 24px
  lineHeight: "1.5",
  display: "inline",
  fontWeight: "800",
  margin: "0",
};

export {
  headline1Font,
  headline2Font,
  body1Styles,
  funFont1,
  mobileHeadline1Font,
  mobileHeadline2Font,
};

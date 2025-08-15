import { CSSProperties } from "react";
import { spacing, aboutColors } from "../styles";

const aboutPaperStyles: CSSProperties = {
  backgroundColor: aboutColors.paper,
  border: "6px solid black",
  // boxShadow: "9px 9px 0px 0px black",
  borderRadius: "20px",
  marginBottom: `${spacing.md}px`,
};

const aboutMenuStyles: CSSProperties = {
  backgroundColor: aboutColors.menu,
  borderBottom: "3px solid black",
  borderRadius: "14px 14px 0 0",
  display: "flex",
  padding: `${spacing.sm}px`,
  alignContent: "center",
};

const aboutContentStyles: CSSProperties = {
  marginTop: spacing.lg,
  padding: ` 0 ${spacing.xl}px ${spacing.xl}px ${spacing.xl}px`,
};

const bodyTextStyles: CSSProperties = {
  textAlign: "left",
  paddingLeft: spacing.sm,
};

const blockquoteStyles: CSSProperties = {
  fontFamily: "Galindo, sans-serif",
  fontWeight: "500",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: spacing.sm,
  width: "50%",
  margin: "auto",
};

export {
  aboutPaperStyles,
  aboutMenuStyles,
  aboutContentStyles,
  bodyTextStyles,
  blockquoteStyles,
};

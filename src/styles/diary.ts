import { CSSProperties } from "react";
import { spacing } from "./spacing";

const diaryColors = {
  mainBg: "#bbbcee", // light blue
  cardBg: "#eeb9b3", // light pink
  headerBg: "#f9ecdc", // light pink
  contentBg: "#fdfaf5", // light yellow
  iconColor: "#f9ecdc", // light pink
  buttonTextColor: "#e8beae", // light pink
  hoverColor: "#f9ecdc", // light pink
};

const diaryMenuStyles: CSSProperties = {
  backgroundColor: diaryColors.headerBg,
  margin: `auto`,
  color: `#ffffff`,
  borderTop: `2px solid ${diaryColors.iconColor}`,
  borderLeft: `2px solid ${diaryColors.iconColor}`,
  borderBottom: `2px inset ${diaryColors.iconColor}`,
  borderRight: `2px inset ${diaryColors.iconColor}`,
  textAlign: `left`,
  fontFamily: "Gaegu, sans-serif",
  fontWeight: 400,
  borderRadius: "6px",
};

const diaryHeader: CSSProperties = {
  backgroundColor: diaryColors.headerBg,
  padding: `${spacing.xs}px ${spacing.sm}px`,
  fontSize: "14px",
  border: `2px solid ${diaryColors.iconColor}`,
  borderRadius: "4px",
};

const diaryPostHeader: CSSProperties = {
  display: "flex",
  backgroundColor: diaryColors.headerBg,
  padding: `${spacing.xs}px`,
  fontSize: "14px",
  borderTop: `2px solid ${diaryColors.iconColor}`,
  borderLeft: `2px solid ${diaryColors.iconColor}`,
  borderBottom: `2px inset ${diaryColors.iconColor}`,
  borderRight: `2px inset ${diaryColors.iconColor}`,
  borderRadius: "6px",
  color: "#ffffff",
  fontFamily: "Gaegu, sans-serif",
  fontWeight: 400,
};

const diaryContentStyles: CSSProperties = {
  backgroundColor: diaryColors.contentBg,
  padding: `${spacing.xs}px`,
  fontSize: "14px",
  borderTop: `2px solid ${diaryColors.iconColor}`,
  borderLeft: `2px solid ${diaryColors.iconColor}`,
  borderBottom: `2px inset ${diaryColors.iconColor}`,
  borderRight: `2px inset ${diaryColors.iconColor}`,
  borderRadius: "6px",
  color: "#000000",
  fontFamily: "Gaegu, sans-serif",
  fontWeight: 400,
};

const diaryCardStyles: CSSProperties = {
  borderTop: `2px solid ${diaryColors.iconColor}`,
  borderLeft: `2px solid ${diaryColors.iconColor}`,
  borderRight: `2px inset ${diaryColors.iconColor}`,
  borderBottom: `2px inset ${diaryColors.iconColor}`,
  borderRadius: "6px",
};

const diaryButtonStyles: CSSProperties = {
  backgroundColor: diaryColors.buttonTextColor,
  color: diaryColors.iconColor,
  padding: `${spacing.xs}px`,
  margin: `${spacing.xs}px`,
  border: `2px solid ${diaryColors.iconColor}`,
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: "Gaegu, sans-serif",
  fontWeight: 400,
};

const diaryIconStyles: CSSProperties = {
  color: diaryColors.iconColor,
  backgroundColor: diaryColors.iconColor,
};

export {
  diaryColors,
  diaryHeader,
  diaryMenuStyles,
  diaryPostHeader,
  diaryContentStyles,
  diaryCardStyles,
  diaryButtonStyles,
  diaryIconStyles,
};

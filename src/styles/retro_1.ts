import { CSSProperties } from "react";
import { spacing, galleryColors } from "../styles";
import styled from "styled-components";

const retroColors = {
  mainBg: "#92bdbc", //light olive green
  shine: "#f0f0f0", //light grey
  headerBorderColor: "#3db5d9", //light blue
  headerBorder: "2px solid #3db5d9",
  headerBg: "#781acd", //purple
  contentBorderColor: "#137574", //dark green
  contentBorder: "2px inset #137574",
  contentBgColor: "#bfebec", //light blue
  cardBg: "#00d5d5", //light greenish-blue
  mainBG2: "#00d5d5", //light greenish-blue
  buttonColor: "#bee9e9", //pale white blue
  buttonTextColor: "#781acd", //purple
  hoverColor: "#781acd", //purple
  iconColor: "#beecea", //lightest blue
};

const RetroHeader = styled.div`
  background-color: ${retroColors.headerBg};
  padding: ${spacing.xs}px ${spacing.sm}px;
  font-size: 14px;
  border: ${retroColors.headerBorder};
  border-radius: 1px;
`;

const retroPostHeader: CSSProperties = {
  display: "flex",
  backgroundColor: retroColors.headerBg,
  padding: `${spacing.xs / 2}px`,
  fontSize: "14px",
  borderTop: `2px solid ${retroColors.headerBorderColor}`,
  borderLeft: `2px solid ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.headerBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  borderRadius: "0px",
  color: "#ffffff",
  fontFamily: `Quantico, sans-serif`,
  fontWeight: 400,
};

const retroMenuStyles: CSSProperties = {
  backgroundColor: galleryColors.menu,
  margin: `auto`,
  color: `#ffffff`,
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px solid ${retroColors.shine}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  textAlign: `left`,
  fontFamily: `Quantico, sans-serif`,
  fontWeight: 400,
  borderRadius: "0px",
};

const retroMenuHeader: CSSProperties = {
  backgroundColor: galleryColors.headerBG,
  padding: `${spacing.xs}px ${spacing.sm}px`,
  fontSize: "14px",
  border: galleryColors.headerBorder,
  borderRadius: "0px",
  color: "#ffffff",
};

const retroPaperStyles: CSSProperties = {
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px solid ${retroColors.shine}`,
  borderRight: `2px inset ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.headerBorderColor}`,
  borderRadius: "0px",
};

const retroContentStyles: CSSProperties = {
  backgroundColor: retroColors.contentBgColor,
  borderTop: `2px solid ${retroColors.contentBorderColor}`,
  borderLeft: `2px solid ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRadius: "0px",
  padding: `${spacing.md}px`,
};

const retroCardStyles: CSSProperties = {
  backgroundColor: retroColors.cardBg,
  borderTop: `2px solid ${retroColors.contentBorderColor}`,
  borderLeft: `2px solid ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.headerBorderColor}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRadius: "0px",
};

const retroButtonStyles: CSSProperties = {
  backgroundColor: retroColors.buttonColor,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderLeft: `2px inset ${retroColors.shine}`,
  borderRadius: "0px",
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
  borderTop: `2px solid ${retroColors.shine}`,
  color: retroColors.buttonTextColor,
  cursor: "pointer",
  fontWeight: "bold",
  margin: "5px",
  padding: "5px",
};

const retroMenuIcons = {
  color: "#000000",
  backgroundColor: retroColors.iconColor,
  borderTop: `2px solid ${retroColors.shine}`,
  borderLeft: `2px inset ${retroColors.shine}`,
  borderBottom: `2px inset ${retroColors.contentBorderColor}`,
  borderRight: `2px inset ${retroColors.contentBorderColor}`,
};

export {
  retroMenuStyles,
  retroMenuHeader,
  retroPaperStyles,
  RetroHeader,
  retroColors,
  retroCardStyles,
  retroButtonStyles,
  retroPostHeader,
  retroContentStyles,
  retroMenuIcons,
};

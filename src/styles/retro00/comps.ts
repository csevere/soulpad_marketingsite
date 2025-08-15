import { colors as c } from "./colors";
import { headerText as h } from "./fonts";
import { bodyText as b } from "./fonts";
import { spacing } from "../spacing";
import {
  PaperType,
  CardType,
  MenuType,
  RichTextType,
  ButtonType,
} from "../../Components/types";
import { purple } from "@mui/material/colors";
import { text } from "stream/consumers";

const getBorder = (
  color: string,
  color2: string,
  color3: string,
  color4: string,
  opt: string,
  opt2: string,
  opt3: string,
  opt4: string
) => {
  const borderStyles = {
    borderTop: `2px ${opt} ${color}`,
    borderLeft: `2px ${opt2} ${color2}`,
    borderRight: `2px ${opt3} ${color3}`,
    borderBottom: `2px ${opt4} ${color4}`,
    borderRadius: "0px",
  };
  return borderStyles;
};

const buttonBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.navyBlue, //right
  c.navyBlue, //bottom
  "solid", //top
  "solid", //left
  "inset", //right
  "inset" //bottom
);

const allButtons = {
  ...b,
  ...buttonBorder,
  cursor: "pointer",
  padding: `${spacing.xs * 0.5}rem`,
  textAlign: "center",
  width: "100%",
  justifyContent: "center",
  margin: 0,
};

const primaryButton = {
  ...allButtons,
  backgroundColor: c.button,
  textShadow: `0px 0px 1px ${c.text01}`,
  color: c.buttonText,
};
const secondaryButton = {
  ...allButtons,
  backgroundColor: c.mainBg02,
  textShadow: `0px 0px 1px ${c.text02}`,
  color: c.text02,
};

const cardBorder = getBorder(
  c.contentBorder, //top
  c.headerBorder, //left
  c.headerBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const headerIconBorder = getBorder(
  c.shine,
  c.shine,
  c.contentBorder,
  c.contentBorder,
  "solid", //top
  "inset", //left
  "inset", //right
  "inset" //bottom
);

const paperBorder = getBorder(
  c.shine, //top
  c.shine, //left
  c.contentBorder, //right
  c.contentBorder, //bottom
  "solid",
  "solid",
  "inset",
  "inset"
);

const richTextContentBorder = getBorder(
  c.contentBorder,
  c.contentBorder,
  c.headerBorder,
  c.contentBorder,
  "solid",
  "solid",
  "inset",
  "inset"
);

const purpleHeader = {
  ...h,
  backgroundColor: c.mainBg02,
  color: c.text02,
  display: "flex",
  fontSize: "14px",
  margin: 0,
  textAlign: "left",
  width: "100%",
};

const icons = {
  ...headerIconBorder,
  backgroundColor: c.icon,
  color: "#000000",
};

const contentText = {
  ...b,
  padding: `${spacing.xs}em`,
};

const defaultContent = {
  ...cardBorder,
  ...contentText,
  backgroundColor: c.mainBg00,
  padding: `0 ${spacing.xs}rem 0 0`,
};

const card: CardType = {
  ...cardBorder,
  ...contentText,
  display: "block",
  backgroundColor: c.mainBg00,
  padding: "0",
};

const paper: PaperType = {
  ...paperBorder,
  backgroundColor: c.mainBg01,
};

const customCard: RichTextType = {
  content: {
    ...defaultContent,
  },
  header: {
    styles: {
      ...purpleHeader,
      display: "block",
      textAlign: "center",
      padding: "0.5rem",
      fontSize: "1.5rem",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    border: `2px dashed ${c.buttonHover}`,
    color: c.text01,
    textShadow: `0px 0px 1px ${c.text01}`,
  },
  content: {
    ...contentText,
    backgroundColor: c.mainBg00,
    borderRadius: "0px",
    fontWeight: "400",
    padding: `${spacing.xs}rem 0 ${spacing.xs}rem 0`,
  },
  header: {
    styles: purpleHeader,
    text: { ...h, padding: `${spacing.xs}` },
  },
  text: {
    active: {
      ...primaryButton,
      fontSize: "1.5rem",
      border: `2px dashed ${c.buttonHover}`,
    },
    list: {
      ...primaryButton,
      backgroundColor: "transparent",
      border: "none",
      fontSize: "1.5rem",
      "&:hover": {
        backgroundColor: c.button,
        border: `2px dashed ${c.buttonHover}`,
        textShadow: `0px 0px 1px ${c.text01}`,
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...contentText,
    backgroundColor: c.contentBg,
    padding: `${spacing.md}rem ${spacing.md}rem`,
  },
  header: {
    styles: purpleHeader,
    text: h,
  },
};

const buttons: ButtonType = {
  primary: {
    ...primaryButton,
    "&:hover": {
      border: `2px dashed ${c.buttonHover}`,
    },
  },
  secondary: {
    ...secondaryButton,
    "&:hover": {
      border: `2px dashed ${c.text03}`,
    },
  },
  custom: allButtons,
};

export const retro = {
  ID: 2,
  themeID: "RETRO",
  buttons,
  card,
  customCard,
  content: defaultContent,
  hover: c.mainBg02,
  icons: {
    iconClose: icons,
    primary: icons,
    secondary: icons,
  },
  listBox: {
    header: purpleHeader,
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.icon,
    },
  },
  menuSelection,
  paper,
  poll: {
    ...h,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
  progressBar: {
    header: {
      ...purpleHeader,
    },
    content: {
      ...contentText,
      ...richTextContentBorder,
      backgroundColor: c.mainBg01,
      fontSize: "14px",
      padding: `${spacing.xs}em`,
    },
  },
  richTextPost,
  text: {
    ...b,
    color: c.text01,
  },
  wordSticker: {
    ...b,
    ...cardBorder,
    backgroundColor: c.mainBg00,
  },
};

//About Theme

import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { titleText as f } from "./fonts";
import { bodyText as f2 } from "./fonts";
import {
  PaperType,
  CardType,
  MenuType,
  RichTextType,
  ButtonType,
} from "../../Components/types";
import { red } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";
import { text } from "stream/consumers";

//TO DO
//fix the header styles; see souldpad theme in obsidian

const borderRadiusSm = `${s.sm}rem`;
const redOrangeShadow = `7px 6px 1px ${c.redOrange}`;
const darkBrownShadow = `7px 6px 0px 0px ${c.darkBrown}`;
const yellowShadow = `7px 6px 0px 0px ${c.yellow}`;
const allButtons = {
  ...f,
  boxShadow: darkBrownShadow,
  borderRadius: borderRadiusSm,
  fontSize: "1.25rem",
  padding: `${s.xs * 0.5}rem`,
  textAlign: "center",
  width: "100%",
};
const primaryButton = {
  ...allButtons,
  backgroundColor: c.buttonPrimary,
  color: c.text00,
};

const secondaryButton = {
  ...allButtons,
  backgroundColor: c.buttonSecondary,
  color: c.text00,
};

const content = {
  borderBottomLeftRadius: borderRadiusSm,
  borderBottomRightRadius: borderRadiusSm,
  border: "none",
  padding: `${s.sm}rem`,
  backgroundColor: c.mainBg00,
};

const iconsClass = {
  color: c.text00,
  fontSize: "1.25rem", // 20px
  borderRadius: borderRadiusSm,
};

const header = {
  backgroundColor: c.headerBg,
  borderTopLeftRadius: borderRadiusSm,
  borderTopRightRadius: borderRadiusSm,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
  border: "none",
};

//for sx MUI Typography componet
//has to be seperate from main header styles
const headerText = {
  ...f,
  margin: "0",
  color: c.text01,
};

const card: CardType = {
  ...f2,
  borderRadius: borderRadiusSm,
  display: "block",
  backgroundColor: c.headerBg,
};

const paper: PaperType = {
  borderRadius: borderRadiusSm,
  display: "block",
  padding: "unset",
  boxShadow: `10px 10px 0px 0px ${c.paperShadow}`,
  backgroundColor: c.mainBg00,
};

const customCard: RichTextType = {
  content: {
    ...content,
    fontWeight: "400",
    color: c.text00,
  },
  header: {
    styles: {
      ...header,
      ...f,
      textShadow: darkBrownShadow,
      padding: `${s.xs}rem`,
      color: c.text01,
      textAlign: "center",
      display: "block",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    border: "none",
    color: c.text01,
  },
  content: {
    ...content,
    border: "unset",
    fontWeight: "400",
  },
  header: {
    styles: header,
    text: headerText,
  },
  text: {
    active: primaryButton,
    list: {
      ...f,
      backgroundColor: "transparent",
      borderRadius: borderRadiusSm,
      color: c.text00,
      fontSize: "1.25rem", // 20px
      padding: `${s.xs * 0.5}rem`,
      textAlign: "center",
      width: "100%",
      "&:hover": {
        backgroundColor: c.buttonPrimary,
        boxShadow: darkBrownShadow,
        color: `${c.text00}`,
      },
    },
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    ...f2,
    fontSize: "1.25rem", // 20px
    fontWeight: "400",
    textShadow: "none",
    margin: "unset",
  },
  header: {
    styles: header,
    text: headerText,
  },
};

const buttons: ButtonType = {
  primary: {
    ...primaryButton,
    "&:hover": {
      backgroundColor: c.buttonPrimaryHover,
      boxShadow: redOrangeShadow,
      color: c.redOrange,
    },
  },
  secondary: {
    ...secondaryButton,
    "&:hover": {
      backgroundColor: c.buttonSecondaryHover,
      boxShadow: yellowShadow,
      color: c.yellow,
    },
  },
  custom: allButtons,
};

export const about = {
  ID: 0,
  buttons,
  card,
  customCard,
  content: {
    ...content,
    ...f2,
    fontSize: "1rem", // 16px
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
  },
  icons: {
    primary: {
      ...iconsClass,
      backgroundColor: c.iconPrimary,
    },
    secondary: {
      ...iconsClass,
      backgroundColor: c.iconSecondary,
    },
    iconClose: {
      ...iconsClass,
      backgroundColor: c.iconClose,
    },
  },
  listBox: {},
  menuSelection,
  paper,
  poll: {},
  progressBar: {},
  richTextPost,
  themeID: "SOULPAD",
  wordSticker: {},
};

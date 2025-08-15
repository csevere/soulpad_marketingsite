import { colors as c } from "./colors";
import { spacing as s } from "../spacing";
import { headerText as h } from "./fonts";
import { bodyText as b } from "./fonts";
import {
  PaperType,
  CardType,
  MenuType,
  RichTextType,
  ButtonType,
} from "../../Components/types";

const purpleShadow = `1px 1px 1px ${c.text02}`;
const pinkShadow = `1px 1px 1px ${c.text03}`;
const whiteShadow = `1px 1px 1px ${c.text01}`;
const borderRadius = `${s.xs * 0.5}rem`;
const allButtons = {
  ...h,
  borderRadius,
  width: "100%",
  textAlign: "center",
  color: `${c.text01}`,
};

const primaryButton = {
  ...allButtons,
  backgroundColor: c.button,
  textShadow: purpleShadow,
};

const secondaryButton = {
  ...allButtons,
  backgroundColor: c.buttonSecondary,
  textShadow: pinkShadow,
};

const content = {
  ...b,
  backgroundColor: c.mainBg00,
  border: `1px solid ${c.contentBorder}`,
  borderRadius,
  padding: `${s.xs}rem`,
  textShadow: whiteShadow,
};

const header = {
  ...h,
  borderRadius,
  display: "flex",
  justifyContent: "space-between",
  padding: `${s.xs}rem`,
  textAlign: "left",
};

const icons = {
  backgroundColor: c.mainBg01,
  color: c.icon,
  borderRadius: `${s.xs * 0.5}rem`,
};

const purpleHeader = {
  ...header,
  backgroundColor: c.headerBg02,
};

const pinkHeader = {
  ...header,
  backgroundColor: c.headerBg00,
};

const card: CardType = {
  ...content,
  display: "block",
  backgroundColor: c.mainBg02,
};

const paper: PaperType = {
  ...h,
  borderRadius,
  boxShadow: "",
  backgroundColor: "",
  border: `1px solid ${c.contentBorder}`,
  display: "block",
  padding: "unset",
};

const customCard: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: {
      ...purpleHeader,
      ...h,
      textShadow: purpleShadow,
      padding: `${s.xs}rem`,
      color: c.text01,
      textAlign: "center",
      display: "block",
    },
  },
};

const menuSelection: MenuType = {
  activeStyles: {
    color: c.text01,
  },
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    padding: `${s.xs}rem`,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: {
      ...purpleHeader,
      backgroundColor: "transparent",
      padding: 0,
    },

    text: {
      ...h,
      textShadow: purpleShadow,
      margin: 0,
    },
  },

  text: {
    list: {
      ...h,
      textAlign: "center",
      color: c.text02,
      textShadow: whiteShadow,
      backgroundColor: "transparent",
      borderRadius,
      width: "100%",
      padding: `0 ${s.xs}rem 0 0`,
      "&:hover": {
        backgroundColor: c.button,
        color: `${c.text01}`,
        textShadow: purpleShadow,
      },
    },
    active: primaryButton,
  },
};

const richTextPost: RichTextType = {
  content: {
    ...content,
    backgroundColor: c.mainBg00,
    border: `1px solid ${c.contentBorder}`,
    fontWeight: "400",
  },
  header: {
    styles: purpleHeader,
    text: {
      ...h,
      textShadow: purpleShadow,
    },
  },
};

const buttons: ButtonType = {
  primary: {
    ...primaryButton,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: `${c.text02}`,
    },
  },
  secondary: {
    ...secondaryButton,
    "&:hover": {
      backgroundColor: c.buttonHover,
      color: `${c.text02}`,
    },
  },
  custom: allButtons,
};

export const diary = {
  ID: 1,
  themeID: "DIARY",
  buttons,
  card,
  customCard,
  content,
  hover: c.mainBg03,
  icons: {
    iconClose: icons,
    primary: icons,
    secondary: icons,
  },
  listBox: {
    ...content,
    ...h,
    display: "block",
    border: "unset",
    backgroundColor: c.mainBg03,
    textShadow: purpleShadow,
  },
  menuSelection,
  paper,
  poll: {},
  progressBar: {},
  richTextPost,
  wordSticker: {},
};

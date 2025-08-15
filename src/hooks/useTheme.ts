import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";
import { videoGame } from "../styles/videogame/comps";
import {
  CardType,
  MenuType,
  PaperType,
  RichTextType,
  IconsType,
  ButtonType,
} from "../Components/types";

interface ThemeInfoType {
  card: CardType;
  customCard?: RichTextType;
  menu: MenuType;
  richText: RichTextType;
  paper: PaperType;
  buttons: ButtonType;
  icons: IconsType;
  themeID: string;
}

export const useTheme = (themeType: string) => {
  /**
   1.) set the default theme first (about).
   2.) Change the theme based on the themeType passed in.
   3.) Return the updated theme styles
   ***/

  let themeInfoStyles: ThemeInfoType = {
    card: about.card,
    menu: about.menuSelection,
    richText: about.richTextPost,
    paper: about.paper,
    themeID: about.themeID,
    icons: about.icons,
    buttons: about.buttons,
  };

  switch (themeType) {
    case "DIARY":
      themeInfoStyles = {
        card: diary.card,
        customCard: diary.customCard,
        menu: diary.menuSelection,
        richText: diary.richTextPost,
        paper: diary.paper,
        themeID: diary.themeID,
        icons: diary.icons,
        buttons: diary.buttons,
      };
      return themeInfoStyles;
    case "SOULPAD":
      const aboutInfoStyles = {
        card: about.card,
        customCard: about.customCard,
        paper: about.paper,
        menu: about.menuSelection,
        richText: about.richTextPost,
        themeID: about.themeID,
        icons: about.icons,
        buttons: about.buttons,
      };
      return aboutInfoStyles;

    case "RETRO":
      const retroInfoStyles = {
        card: retro.card,
        customCard: retro.customCard,
        paper: retro.paper,
        menu: retro.menuSelection,
        richText: retro.richTextPost,
        themeID: retro.themeID,
        icons: retro.icons,
        buttons: retro.buttons,
      };
      return retroInfoStyles;
    case "VIDEOGAME":
      const vgInfoStyles = {
        card: videoGame.card,
        customCard: videoGame.customCard,
        paper: videoGame.paper,
        menu: videoGame.menuSelection,
        richText: videoGame.richTextPost,
        themeID: videoGame.themeID,
        icons: videoGame.icons,
        buttons: videoGame.buttons,
      };
      return vgInfoStyles;
    default:
      return themeInfoStyles;
  }
};

export default useTheme;

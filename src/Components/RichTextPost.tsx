import React, { useEffect, useState } from "react";
import { Box, Paper, SxProps, Theme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { about } from "../styles/about/comps";
import { useTheme } from "../hooks/useTheme";
import {
  RichTextType,
  PaperType,
  MenuType,
  IconsType,
  CardType,
} from "./types";
import { get } from "http";

// in the future
// addDate?: boolean;
// addWeather?: boolean;

interface RichTextPostProps {
  children: React.ReactNode;
  size: "small" | "large";
  title: string;
  themeType: string;
}

const ActionMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
`;

const RichTextPost: React.FC<RichTextPostProps> = ({
  themeType,
  title,
  children,
  size,
}) => {
  const [compTheme, setCompTheme] = useState<RichTextType | MenuType>(
    about.richTextPost
  );
  const [card, setCardTheme] = useState<CardType>(about.card);
  const [paper, setPaperTheme] = useState<PaperType>(about.paper);
  const [icons, setIconsTheme] = useState<IconsType>(about.icons);

  const setDefault = () => {
    setCompTheme(about.richTextPost);
    setCardTheme(about.card);
    setPaperTheme(about.paper);
    setIconsTheme(about.icons);
  };

  const getAndSetComp = () => {
    const themeInfoStyles = useTheme(themeType);

    if (themeInfoStyles) {
      const paperStyles = themeInfoStyles.paper;
      const cardStyles = themeInfoStyles.card;
      const compStyles = themeInfoStyles.richText;
      const iconsStyles = themeInfoStyles.icons;

      setCardTheme(cardStyles);
      setCompTheme(compStyles);
      setPaperTheme(paperStyles);
      setIconsTheme(iconsStyles);
      return;
    }
    setDefault();
  };

  useEffect(() => {
    getAndSetComp();
  }, [themeType]);

  const { content, header } = compTheme;

  const isMobile = useMediaQuery("(max-width:600px)");
  const postSize = size === "small" ? "600px" : "900px";
  const mobileSpacing = spacing.xs * 0.5;
  const mobilePadding = ` 0 ${mobileSpacing}em ${spacing.lg}em`;
  const desktopPadding = ` ${spacing.sm}em ${spacing.xs}em`;

  const allPaperStyles = {
    ...paper,
    maxWidth: postSize,
  };

  const HeaderStyles = {
    ...header.styles,
    display: "flex",
    alignItems: "space-between",
  };

  const contentStylesResponsive = {
    ...content,
    padding: isMobile ? mobilePadding : desktopPadding,
  };

  return (
    <Paper className="rich-text-post-paper" elevation={2} sx={allPaperStyles}>
      <Box className="rich-text-post-card" sx={card as SxProps<Theme>}>
        <Box className="rich-text-post-header" sx={HeaderStyles}>
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
          <ActionMenuWrapper>
            <MinimizeIcon sx={{ ...icons.primary, marginRight: 0.5 }} />
            <CropSquareIcon sx={{ ...icons.secondary, marginRight: 0.5 }} />
            <CloseIcon sx={icons.iconClose} />
          </ActionMenuWrapper>
        </Box>
        <Box
          className="rich-text-post-content"
          display="flex"
          flexDirection="column"
          sx={contentStylesResponsive}
        >
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

export default RichTextPost;

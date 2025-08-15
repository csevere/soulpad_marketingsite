import React from "react";
import { Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { spacing } from "../styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import {
  HeaderStyle,
  CardStyle,
  PaperStyle,
  ContentStyle,
  Icons,
  Simple,
  SimpleContent,
  SimplePaper,
} from "../styles/types";

interface RichTextPostProps {
  children: React.ReactNode;
  header: HeaderStyle | Simple;
  card: CardStyle | Simple;
  paper: PaperStyle | SimplePaper;
  content: ContentStyle | SimpleContent;
  title: string;
  icons: Icons;
  addDate?: boolean;
  addWeather?: boolean;
  size?: "small" | "large";
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
  card,
  paper,
  title,
  children,
  header,
  content,
  icons,
  size,
}) => {
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
    ...header,
    display: "flex",
    alignItems: "space-between",
  };

  const contentStylesResponsive = {
    ...content,
    padding: isMobile ? mobilePadding : desktopPadding,
  };

  return (
    <Paper className="rich-text-post-paper" elevation={2} sx={allPaperStyles}>
      <Box className="rich-text-post-card" sx={card}>
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
          className="box-content"
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

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "../hooks/useTheme";
import {
  RichTextType,
  PaperType,
  MenuType,
  IconsType,
  CardType,
} from "./types";
import { about } from "../styles/about/comps";

//hardcode thes styles for now
interface CardProps {
  children?: React.ReactNode;
  imageUrl?: string;
  size: "small" | "large";
  text?: string;
  title: string;
  themeType: string;
  renderItem?: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  text,
  imageUrl,
  size,
  themeType,
  renderItem,
  children,
}) => {
  //change this to  customCard and update in useTheme
  const [card, setCardTheme] = useState<CardType>(about.card);
  const [customCard, setCustomCardTheme] = useState<RichTextType>(
    about.customCard
  );
  const [paper, setPaperTheme] = useState<PaperType>(about.paper);

  const setDefault = () => {
    setCardTheme(about.card);
    setCustomCardTheme(about.customCard);
    setPaperTheme(about.paper);
  };

  const getAndSetComp = () => {
    const themeInfoStyles = useTheme(themeType);

    if (themeInfoStyles) {
      const customCardStyles = themeInfoStyles.customCard || about.customCard;
      const paperStyles = themeInfoStyles.paper;
      const cardStyles = themeInfoStyles.card;

      setCardTheme(cardStyles);
      setCustomCardTheme(customCardStyles as RichTextType);
      setPaperTheme(paperStyles);
      return;
    }
    setDefault();
  };

  useEffect(() => {
    getAndSetComp();
  }, [themeType]);

  const smallSize = {
    minWidth: "150px",
    minHeight: "150px",
  };

  const largeSize = {
    minWidth: "300px",
    minHeight: "200px",
  };

  const cardSize = size === "small" ? smallSize : largeSize;

  const titleStyles = {
    ...customCard.header.text,
    ...customCard.header.styles,
   

  };

  const paperStyles = {
    ...paper,
    ...cardSize,
    overflow: "auto",
  };

  const cardStyles = {
    ...card,
    ...cardSize,
  };

  const contentStyles = {
    ...customCard.content,
    alignItems: "center",
    padding: "1rem",
  };

  return (
    <Paper className="custom-paper-card" sx={paperStyles}>
      <Card className="custom-card-body" sx={cardStyles}>
        <Typography variant="body1" className="card-title" sx={titleStyles}>
          {title}
        </Typography>

        {/* fixed styles for now */}
        <Box
          className="custom-card-content"
          display="flex"
          flexDirection="column"
          rowGap={1}
          sx={contentStyles}
        >
          {renderItem || children}
        </Box>

        {/*
        {imageUrl && (
          <Box className="card-image">
            <img src={imageUrl} alt={title} className="card-image" />
          </Box>
        )}

        {text && (
          <Typography variant="h4" className="card-text">
            {text}
          </Typography>
        )} */}
      </Card>
    </Paper>
  );
};

export default CustomCard;

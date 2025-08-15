import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { about } from "../styles/about/comps";
import { SxProps, Theme } from "@mui/system";
import { useTheme } from "../hooks/useTheme";
import { MenuType, CardType, PaperType } from "./types";

//this a temporary interface
interface MenuItem {
  galleryName: string;
  themeType: string;
}

interface MenuSelectionProps {
  themeType: string;
  items: MenuItem[];
  title: string;
  horizontal?: boolean;
  onThemeChange: (themeType: string) => void;
}

const MenuSelection: React.FC<MenuSelectionProps> = ({
  items,
  horizontal,
  themeType,
  title,
  onThemeChange,
}) => {
  const [compTheme, setCompTheme] = useState<MenuType>(about.menuSelection);
  const [card, setCardTheme] = useState<CardType>(about.card);
  const [paper, setPaperTheme] = useState<PaperType>(about.paper);

  const setDefault = () => {
    setCompTheme(about.menuSelection);
    setCardTheme(about.card);
    setPaperTheme(about.paper);
  };

  const getAndSetComp = () => {
    const themeInfoStyles = useTheme(themeType);

    if (themeInfoStyles) {
      const paperStyles = themeInfoStyles.paper;
      const cardStyles = themeInfoStyles.card;
      const compStyles = themeInfoStyles.menu;

      setCompTheme(compStyles);
      setCardTheme(cardStyles);
      setPaperTheme(paperStyles);
    } else {
      setDefault();
    }
  };

  useEffect(() => {
    getAndSetComp();
  }, [themeType]);

  const { header, text, content } = compTheme;
  //fix how you tag the active state styles
  //make the list styles describe only the DEFAULT list styles
  const listStyles = {
    display: `${horizontal ? "flex" : "block"}`,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: "0px",
  };

  const activeFont = {
    ...text?.active,
    cursor: "pointer",
  };

  const containerStyles = {
    ...paper,
    maxWidth: "800px",
    width: "100%",
  };

  return (
    <Paper
      elevation={1}
      className={`menu-selection-paper menu-selection-container ${themeType}`}
      sx={containerStyles}
    >
      <Box
        className={`menu-selection-card ${themeType}`}
        sx={card as SxProps<Theme>}
      >
        <Box
          className={`menu-selection-card-header ${themeType}`}
          sx={header.styles}
        >
          <Typography variant="h2" sx={header.text}>
            {title}
          </Typography>
        </Box>
        <Box
          className={`menu-selection-content ${themeType}`}
          sx={{ ...content }}
        >
          <List
            disablePadding={horizontal ? true : false}
            dense={true}
            sx={listStyles}
            className={`menu-selection-list ${themeType}`}
          >
            {items.map((item) => (
              <ListItem
                className={`menu-selection-list-item ${themeType}`}
                key={item.themeType}
                sx={{ paddingLeft: 0 }}
                onClick={() => {
                  onThemeChange(item.themeType);
                }}
              >
                <Typography
                  variant="body1"
                  sx={themeType === item.themeType ? activeFont : text?.list}
                >
                  {item.galleryName}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default MenuSelection;

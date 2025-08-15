import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  PaperStyle,
  CardStyle,
  TitleFont,
  Simple,
  SimplePaper,
} from "../styles/types";

//hardcode thes styles for now
interface PollProps {
  children?: React.ReactNode;
  title: string;
  text?: string;
  card: CardStyle | Simple;
  paper: PaperStyle | SimplePaper;
  imageUrl?: string;
  size: "small" | "large";
  titleFont: TitleFont;
  themeType?: string;
}

//need one button - show results
// need progress bar
// radio buttons and select
// two view - select option and show results

const CustomPoll: React.FC<PollProps> = ({
  title,
  text,
  paper,
  card,
  imageUrl,
  size,
  titleFont,
  children,
}) => {
  const smallSize = {
    minWidth: "150px",
    minHeight: "150px",
  };

  const largeSize = {
    minWidth: "300px",
    minHeight: "200px",
  };

  const titleStyles = {
    ...titleFont,
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  const cardSize = size === "small" ? smallSize : largeSize;
  return (
    <Paper className="custom-paper-card" sx={{ ...paper, ...cardSize }}>
      <Card
        className="custom-card-body"
        sx={{ ...card, minHeight: cardSize.minHeight }}
      >
        <Typography variant="body1" className="card-title" sx={titleStyles}>
          {title}
        </Typography>

        {imageUrl && (
          <Box className="card-image">
            <img src={imageUrl} alt={title} className="card-image" />
          </Box>
        )}

        {text && (
          <Typography variant="h4" className="card-text">
            {text}
          </Typography>
        )}

        <Box display="flex" flexDirection="column" sx={{ textAlign: "center" }}>
          {children}
        </Box>
      </Card>
    </Paper>
  );
};

export default CustomPoll;

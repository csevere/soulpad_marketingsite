import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { colors } from "../styles";

import { homePageLinks } from "../const";

//fix header in gallery page

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        margin: "0 auto",
        backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
        color: "white",
        textAlign: "left",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        width: "auto",
        height: "100%",
      }}
    >
      {Object.entries(homePageLinks).map(([key, link]) => (
        <Typography key={key} variant="body2">
          <Link href={link.url} color="inherit" underline="none">
            {link.label}
          </Link>
        </Typography>
      ))}
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} SoulPad. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

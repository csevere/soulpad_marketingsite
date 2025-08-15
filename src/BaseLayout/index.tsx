import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import { spacing, colors } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Link } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  isHomePage?: boolean;
}

const BaseLayout: React.FC<LayoutProps> = ({ children, title, isHomePage }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { officialBackgroundColor } = colors;
  const mobileHeight = "185px";
  const widthLogo = "475px";
  const notHomeWidthLogo = isMobile ? widthLogo : "150px";
  const heightLogo = isMobile ? mobileHeight : "250px";
  const notHomeHeightLogo = isMobile ? mobileHeight : "110px";

  const baseLayoutStyles: CSSProperties = {
    backgroundColor: officialBackgroundColor,
  };

  const headerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    flexWrap: "wrap",
    maxWidth: isMobile ? "100%" : widthLogo,
    height: heightLogo,
    position: "relative",
    margin: "1rem auto",
    width: isMobile ? "75%" : "100%",
  };

  const notHomeHeaderStyles: CSSProperties = {
    ...headerStyles,
    justifyContent: isMobile ? "center" : "start",
    alignItems: "center",
    maxWidth: notHomeWidthLogo,
    height: notHomeHeightLogo,
    margin: isMobile ? "auto" : "0",
    width: isMobile ? "75%" : "100%",
  };

  const boxStylesToCenter = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/images/SoulPad.svg)`,
    backgroundSize: "cover",
    color: "transparent",
  };

  const setHeaderStyles = isHomePage ? headerStyles : notHomeHeaderStyles;
  const setGridStyles = isHomePage ? "100%" : "14%";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid
        className={isHomePage ? `base-layout--home` : "base-layout--not-home"}
        container
        flexDirection="column"
        style={baseLayoutStyles}
      >
        <Grid className="base-layout--header">
          <Link to="/">
            <Box sx={setHeaderStyles} className="header--wrapper">
              {/* need to create a unique logo*/}
              <Box sx={boxStylesToCenter} />
            </Box>
          </Link>
        </Grid>

        {children}

        <Grid className="base-layout--footer-wrapper">
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BaseLayout;

import * as React from "react";
import type { HeadFC } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing, aboutColors } from "../styles";

import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import RichTextPost from "../Components/RichTextPost";
import useMediaQuery from "@mui/material/useMediaQuery";
import AboutPageContent from "../Components/AboutPageContent";
import Box from "@mui/material/Box";
import Window from "../Components/Window";
import Typography from "@mui/material/Typography";

const strings = Strings.about;
const headStrings = Strings.metaData.about;
const content = Strings.about.content;

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const containerStyles = {
    color: "#232129",
    padding: `${isMobile ? spacing.sm : 0}em`,
    width: "100%",
  };

  return (
    <BaseLayout title={strings.header} isHomePage={false}>
      {/* Post ONE */}
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className="about-container"
        style={containerStyles}
      >
        <Typography variant="h1">{strings.header}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          className="content-windows"
          alignItems="center"
          p={3}
          sx={{
            maxWidth: "900px",
            width: "100%",
            margin: "auto",
          }}
        >
          <AboutPageContent point={content.point1} />
          <AboutPageContent point={content.point2} />
          <AboutPageContent point={content.point3} />
          <AboutPageContent point={content.point4} />
        </Box>
      </Grid>

      {/********************* Post TWO *********** */}
    </BaseLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;

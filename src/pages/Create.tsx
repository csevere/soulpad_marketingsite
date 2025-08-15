import React, { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing, colors } from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";

const strings = Strings.createPage;
const headStrings = Strings.metaData.create;

const Create: React.FC = () => {
  const subTitle: CSSProperties = {
    backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
    borderRadius: "5px",
    padding: spacing.xs,
    margin: "auto",
  };

  const contentStyles: CSSProperties = {
    padding: spacing.lg,
    textAlign: "center",
    color: "#ffffff",
  };

  const createStyles = {
    backgroundImage: "url('/images/home-bg.jpg')",
    backgroundSize: "cover",
    color: "#ffffff",
  };

  return (
    <BaseLayout title={strings.header} pageStyles={createStyles}>
      <Grid container style={contentStyles}>
        <Typography variant="h2" style={subTitle}>
          {strings.subHeader}
        </Typography>
      </Grid>
      {/* Add your content here */}
    </BaseLayout>
  );
};

export default Create;

export const Head: HeadFC = () => <title>{headStrings}</title>;

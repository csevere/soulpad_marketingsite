import React, { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing, colors } from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";

const strings = Strings.loginPage;
const headStrings = Strings.metaData.login;

const Login: React.FC = () => {
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

  const loginStyles = {
    backgroundImage: "url('/images/home-bg.jpg')",
    backgroundSize: "cover",
    color: "#ffffff",
  };

  return (
    <BaseLayout title={strings.header} pageStyles={loginStyles}>
      <Grid container style={contentStyles}>
        <Typography variant="h2" style={subTitle}>
          {strings.subHeader}
        </Typography>
      </Grid>
      {/* Add your content here */}
    </BaseLayout>
  );
};

export default Login;
export const Head: HeadFC = () => <title>{headStrings}</title>;

import { body1Styles, funFont1, headline1Font, headline2Font } from "../styles";

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}


const components = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 700,
      laptop: 1024,
      desktop: 1280,
    },
  },
  MuiButton: {
    defaultProps: {
      // The props to change the default for.
    },
  },
  MuiTypography: {
    defaultProps: {
      // The props to change the default for.
      variantMapping: {
        body1: "p",
        h1: "h1",
        h2: "h2",
        subtitle1: "subtitle1",
      },
    },
    styleOverrides: {
      // The style overrides for the component.

      body1: {
        ...body1Styles,
      },
      h1: {
        ...headline1Font,
      },
      h2: {
        ...headline2Font,
      },
      subtitle1: {
        ...funFont1,
      },
    },
  },
};

export default components;

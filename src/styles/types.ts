export interface TextStyle {
  fontFamily: string;
  textShadow: string;
  color: string;
  textAlign: string;
  fontSize: string;
  "&:hover": {
    backgroundColor?: string;
    color: string;
  };
  sx: {
    color: string;
    textAlign: string;
    fontFamily: string;
  };
}

export interface CardStyle {
  borderTop: string;
  borderLeft: string;
  borderRight: string;
  borderBottom: string;
  borderRadius: string;
  fontSize: string;
  padding: string;
  fontFamily: string;
  textShadow: string;
  color: string;
  backgroundColor?: string;
}

export interface HeaderStyle {
  borderTop: string;
  borderLeft: string;
  borderRight: string;
  borderBottom: string;
  borderRadius: string;
  padding: string;
  fontSize: string;
  backgroundColor: string;
  display: string;
  text: {
    fontFamily: string;
    textShadow: string;
    color: string;
    textAlign: string;
  };
}

export interface Simple {
  border: string;
  backgroundColor: string;
  borderRadius: string;
  display: string;
  padding: string;
  text: {
    fontFamily: string;
    textShadow: string;
    color: string;
    textAlign: string;
  };
}

export interface PaperStyle {
  borderTop: string;
  borderLeft: string;
  borderRight: string;
  borderBottom: string;
  borderRadius: string;
  text: {
    fontFamily: string;
    textShadow: string;
  };
}

export interface SimplePaper {
  border: string;
  borderRadius: string;
  text: {
    fontFamily: string;
    textShadow: string;
  };
}

export interface ContentStyle {
  padding: string;
  borderRadius: string;
  color: string;
  backgroundColor: string;
  borderTop: string;
  borderLeft: string;
  borderRight: string;
  borderBottom: string;
}

export interface SimpleContent {
  backgroundColor: string;
  border: string;
  borderRadius: string;
  padding: string;
}

export interface IconStyle {
  backgroundColor: string;
  color: string;
  borderRadius: string;
}

export interface Icons {
  primary: IconStyle;
  secondary: IconStyle;
  iconClose: IconStyle;
}

export interface TitleFont {
  color: string;
  fontFamily: string;
  textShadow: string;
}

export interface ListStyle {
  backgroundColor: string;
  border: string;
  padding: string;
}

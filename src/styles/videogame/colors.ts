const keyColors = {
  darkGray: "#51577b", //background
  //background border
  lightGray: "#6b71a3",
  //button gradient go lightGreen to green
  lightGreen: "#55f26f",
  green: "#263c2d",
  //button gradient back lightPurple to purple
  lightPurple: "#af43ee",
  purple: "#602fa3",
  //header gradient from skyblue to lightBlue
  skyBlue: "#d9f7fc",
  lightBlue: "#b3e5f2",
  //icon background gradient from blue to dark blue
  blue: "#3b9be6",
  darkBlue: "#2e65cc",
  //background gradient from light orange to orange
  lightOrange: "#f99d47",
  orange: "#ec6737",
  black: "#000000",
  white: "#ffffff",
};

// linear-gradient(#55f26f, #263c2d)

const {
  darkGray,
  lightGray,
  lightGreen,
  green,
  lightPurple,
  purple,
  skyBlue,
  lightBlue,
  blue,
  darkBlue,
  lightOrange,
  orange,
  black,
  white,
} = keyColors;

//use light opacity for the comp borders
export const colors = {
  black,
  white,
  buttonPrimary: `linear-gradient(to bottom, ${lightGreen}, ${green})`,
  buttonSecondary: purple,
  buttonPrimaryBorder: lightGreen,
  buttonSecondaryBorder: lightPurple,
  buttonHover: white,
  contentBorder: lightGray,
  headerBg: `linear-gradient(to bottom, ${skyBlue} 60%, ${blue})`,
  icon: black,
  iconBg: `linear-gradient(to bottom, ${blue}, ${darkBlue})`,
  mainBg00: darkGray,
  mainBg01: lightGray,
  mainBg02: `linear-gradient(to bottom, ${lightOrange}, ${orange})`,
  text00: black,
  text01: white,
  text02: lightGray,
  green,
  purple,
  skyBlue,
  lightGreen,
};

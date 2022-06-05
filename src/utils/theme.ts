import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#171A20CC", 
    secondary: "#FFFFFFA6",

    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#5C5E62",

    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    title: 40,
    subTitle: 16,
    button: 12,

    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    title: { fontFamily: "Roboto_700Bold", fontSize: SIZES.title, lineHeight: 55 },
    subTitle: { fontFamily: "Roboto_400Regular", fontSize: SIZES.subTitle, lineHeight: 22 },
    button: { fontFamily: "Roboto_700Bold", fontSize: SIZES.button, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
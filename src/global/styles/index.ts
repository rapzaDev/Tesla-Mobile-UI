import { COLORS, SIZES, FONTS } from '../../utils/theme';

const {
    primary, 
    secondary,
    green,
    lightGreen, 
    lime,
    emerald,
    red, 
    lightRed,
    purple,
    lightpurple,
    yellow,
    lightyellow,
    black,
    white,
    gray,
    lightGray,
    transparent
} = COLORS;

const {
    base,
    font,
    radius,
    padding,
    padding2,

    // font sizes
    title,
    subTitle,
    
    h1,
    h2,
    h3,
    h4,
    body1,
    body2,
    body3,
    body4,
    body5,

    // app dimensions
    width,
    height
} = SIZES;

export default {
    colors: {
        primary,
        secondary,

        green,
        lightGreen,

        lime,
        emerald,

        red,
        lightRed,

        purple,
        lightpurple,

        yellow,
        lightyellow,

        black,
        white,

        lightGray,
        gray,

        transparent,
    },
    
    sizes: {
        // global sizes
        base,
        font,
        radius,
        padding,
        padding2,

        // font sizes
        title,
        subTitle,

        h1,
        h2,
        h3,
        h4,
        body1,
        body2,
        body3,
        body4,
        body5,

        // app dimensions
        width,
        height
    },

    fonts: {
        regular: 'Roboto_400Regular',
        bold: 'Roboto_700Bold',
        black: 'Roboto_900Black',

        title: FONTS.title,
        subTitle: FONTS.subTitle,
        button: FONTS.button,
    },

    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowCapacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
};


  
  
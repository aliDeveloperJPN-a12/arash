import { createTheme } from '@mui/material/styles';
import { Localization } from '@mui/material/locale';
import { faIR } from '@mui/material/locale';

declare module '@mui/material/styles' {
    interface ThemeOptions {
        faIR?: Localization;
        direction?: string;
    }
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
    interface Palette {
        // primary colors
        primaryLight1: Palette['primary'];
        primaryLight2: Palette['primary'];
        primaryLight3: Palette['primary'];
        primaryLight4: Palette['primary'];
        primaryLight5: Palette['primary'];
        primaryDark1: Palette['primary'];
        primaryDark2: Palette['primary'];
        primaryDark3: Palette['primary'];
        primaryDark4: Palette['primary'];
        // secondary colors
        secondaryLight1: Palette['primary'];
        secondaryLight2: Palette['primary'];
        secondaryLight3: Palette['primary'];
        secondaryLight4: Palette['primary'];
        secondaryLight5: Palette['primary'];
        secondaryDark1: Palette['primary'];
        secondaryDark2: Palette['primary'];
        secondaryDark3: Palette['primary'];
        secondaryDark4: Palette['primary'];
        // wireframe colors
        wireframeBlack: Palette['primary'];
        wireframeDarkGray: Palette['primary'];
        wireframeMidGray: Palette['primary'];
        wireframeLightGray: Palette['primary'];
        wireframeVeryLightGray: Palette['primary'];
        wireframeWhite: Palette['primary'];
        // success colors
        success: Palette['primary'];
        successLight1: Palette['primary'];
        successLight2: Palette['primary'];
        successLight3: Palette['primary'];
        // warning colors
        warning: Palette['primary'];
        warningLight1: Palette['primary'];
        warningLight2: Palette['primary'];
        warningLight3: Palette['primary'];
        // error color
        error: Palette['primary'];
    }
    interface PaletteOptions {
        // primary colors
        primaryLight1: PaletteOptions['primary'];
        primaryLight2: PaletteOptions['primary'];
        primaryLight3: PaletteOptions['primary'];
        primaryLight4: PaletteOptions['primary'];
        primaryLight5: PaletteOptions['primary'];
        primaryDark1: PaletteOptions['primary'];
        primaryDark2: PaletteOptions['primary'];
        primaryDark3: PaletteOptions['primary'];
        primaryDark4: PaletteOptions['primary'];
        // secondary colors
        secondaryLight1: PaletteOptions['primary'];
        secondaryLight2: PaletteOptions['primary'];
        secondaryLight3: PaletteOptions['primary'];
        secondaryLight4: PaletteOptions['primary'];
        secondaryLight5: PaletteOptions['primary'];
        secondaryDark1: PaletteOptions['primary'];
        secondaryDark2: PaletteOptions['primary'];
        secondaryDark3: PaletteOptions['primary'];
        secondaryDark4: PaletteOptions['primary'];
        // wireframe colors
        wireframeBlack: PaletteOptions['primary'];
        wireframeDarkGray: PaletteOptions['primary'];
        wireframeMidGray: PaletteOptions['primary'];
        wireframeLightGray: PaletteOptions['primary'];
        wireframeVeryLightGray: PaletteOptions['primary'];
        wireframeWhite: PaletteOptions['primary'];
    }
}

const breakpointSizes = {
    xs: 0,
    sm: 800,
    md: 1024,
    lg: 1260,
    xl: 1600,
};

const paletteColors = {
    // primary colors
    primary: {
        main: '#ee1d25',
    },
    primaryLight1: {
        main: '#FDE8E9',
    },
    primaryLight2: {
        main: '#FAB9BB',
    },
    primaryLight3: {
        main: '#F7979B',
    },
    primaryLight4: {
        main: '#F4686D',
    },
    primaryLight5: {
        main: '#F14A51',
    },
    primaryDark1: {
        main: '#D91A22',
    },
    primaryDark2: {
        main: '#A9151A',
    },
    primaryDark3: {
        main: '#831014',
    },
    primaryDark4: {
        main: '#640C10',
    },

    // secondary colors
    secondary: {
        main: '#1158A7',
    },
    secondaryLight1: {
        main: '#E7EEF6',
    },
    secondaryLight2: {
        main: '#B5CBE4',
    },
    secondaryLight3: {
        main: '#92B2D7',
    },
    secondaryLight4: {
        main: '#608FC4',
    },
    secondaryLight5: {
        main: '#4179B9',
    },
    secondaryDark1: {
        main: '#072546',
    },
    secondaryDark2: {
        main: '#09305C',
    },
    secondaryDark3: {
        main: '#0C3E77',
    },
    secondaryDark4: {
        main: '#0F5098',
    },

    // wireframe colors
    wireframeBlack: {
        main: '#121212',
    },
    wireframeDarkGray: {
        main: '#3A3A3A',
    },
    wireframeMidGray: {
        main: '#767676',
    },
    wireframeLightGray: {
        main: '#9E9E9E',
    },
    wireframeVeryLightGray: {
        main: '#E7E7E7',
    },
    wireframeWhite: {
        main: '#FFFFFF',
    },

    // success colors
    success: {
        main: '#019833',
    },
    successLight1: {
        main: '#E6F5EB',
    },
    successLight2: {
        main: '#B3E0C2',
    },
    successLight3: {
        main: '#67C185',
    },

    // warning colors
    warning: {
        main: '#F9F871',
    },
    warningLight1: {
        main: '#FEFEF1',
    },
    warningLight2: {
        main: '#FDFDD4',
    },
    warningLight3: {
        main: '#FBFBAA',
    },

    // error color
    error: {
        main: '#D30008',
    },
};

const boxShadows = {
    one: '0 2px 4px rgba(18, 18, 18, 0.2)',
    two: '0 5px 6px rgba(18, 18, 18, 0.2)',
    three: '0 8px 8px rgba(18, 18, 18, 0.2)',
};

const baseTheme = createTheme({
    faIR,
    direction: 'rtl',
    typography: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    breakpoints: {
        values: {
            xs: breakpointSizes.xs,
            sm: breakpointSizes.sm,
            md: breakpointSizes.md,
            lg: breakpointSizes.lg,
            xl: breakpointSizes.xl,
        },
    },
    palette: paletteColors,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'button, a': {
                    transition: 'none !important',
                },
                a: {
                    color: `${paletteColors.secondary.main}`,
                    '&:hover': {
                        color: `${paletteColors.secondaryDark4.main}`,
                    },
                    '&:active': {
                        color: `${paletteColors.secondaryDark2.main}`,
                    },
                    '&:disabled': {
                        color: `${paletteColors.wireframeLightGray.main}`,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    // mobile
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    // tablet
                    [`@media (min-width:${breakpointSizes.sm}px)`]: {
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    },
                    // md desktop
                    [`@media (min-width:${breakpointSizes.md}px)`]: {
                        paddingLeft: '32px',
                        paddingRight: '32px',
                    },
                    // lg desktop
                    [`@media (min-width:${breakpointSizes.lg}px)`]: {
                        paddingLeft: '80px',
                        paddingRight: '80px',
                    },
                    // xl desktop
                    [`@media (min-width:${breakpointSizes.xl}px)`]: {
                        paddingLeft: '80px',
                        paddingRight: '80px',
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '24px',
                },
            },
        },
    },
});

export default baseTheme;

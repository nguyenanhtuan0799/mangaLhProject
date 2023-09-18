import React from 'react';
import {
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
  ThemeProvider as ReThemeProvider,
} from '@shopify/restyle';

import {ReactNode} from 'react';
import {Dimensions} from 'react-native';

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;

const palette = {
  red: '#FF0000',
  redGray: '#F29388',

  white: '#ffffff',
  whiteDark: '#f5f5f5',

  black: '#0B0B0B',
  blackLight: '#111111',
  blackGrey: '#5e5d5d',

  grayDark1: '#cccccc',
  grayDark: '#f5f5f5',

  yellowGrey: '#FFDE59',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardBackground: palette.whiteDark,
    cardRed: palette.red,

    text: palette.blackLight,
    textDisable: palette.blackGrey,
    textActive: palette.red,
    textWhite: palette.white,

    border: palette.grayDark1,
    borderGray: palette.grayDark,

    mainButton: palette.redGray,

    primaryColor: palette.yellowGrey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 6,
    m: 12,
    l: 24,
    xl: 48,
    xxl: 60,
  },
  textVariants: {
    text: {
      color: 'text',
      fontSize: 12,
      fontFamily: 'OpenSans-SemiBold',
    },
    textBold: {
      color: 'text',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'OpenSans-SemiBold',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  return <ReThemeProvider {...{theme}}>{children}</ReThemeProvider>;
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

export default theme;

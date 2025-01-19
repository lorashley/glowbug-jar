import { baseColors } from './colors'
import '@fontsource/balsamiq-sans/400.css'

export const theme = {
  colors: {
    background: baseColors.offWhite,
    lightText: baseColors.white,
    darkText: baseColors.buttonBrown,
    primary: baseColors.orange,
    secondary: baseColors.appTeal,
    tertiary: baseColors.warmPink,
    danger: baseColors.red,
    warning: baseColors.warmYellow,
    success: baseColors.appGreen,
    info: baseColors.appBlue,
    tan: baseColors.tan,
    eggshell: baseColors.eggshell,
    warmYellow: baseColors.warmYellow,
    warmPink: baseColors.warmPink,
    orange: baseColors.orange,
    navy: baseColors.navy,
    deepBlue: baseColors.deepBlue,
    lightYellow: baseColors.lightYellow,
    lightOffWhite: baseColors.lightOffWhite,
    appBlue: baseColors.appBlue,
    appYellow: baseColors.appYellow,
    appOrange: baseColors.appOrange,
    appPink: baseColors.appPink,
    appTeal: baseColors.appTeal,
    brown: baseColors.brown,
    buttonBrown: baseColors.buttonBrown,
  },
  buttons: {
    primary: {
      backgroundColor: baseColors.eggshell,
      color: baseColors.buttonBrown,
      fontWeight: 'bold',
    },
    secondary: {
      backgroundColor: baseColors.appTeal,
      color: baseColors.offWhite,
      fontWeight: 'bold',
    },
    warning: {
      backgroundColor: baseColors.red,
      color: baseColors.white,
      fontWeight: 'bold',
    },
  },
  fonts: {
    heading: 'Balsamiq Sans, Roboto, sans-serif',
  },
}

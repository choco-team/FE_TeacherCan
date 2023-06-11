import theme from './theme';

const darkTheme = {
  ...theme,
  text: theme.color.neutral[100],
  buttonText: theme.color.neutral[800],
  subText: theme.color.neutral[400],
  accentText: theme.color.primary[500],
  pageBackground: theme.color.gray[100],
  background: {
    basic: theme.color.black,
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[500],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    white: theme.color.black,
  },
  border: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[600],
    success: theme.color.success[900],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
    white: theme.color.black,
  },
  hoverBackground: {
    primary: theme.color.primary[300],
    secondary: theme.color.secondary[300],
    success: theme.color.success[400],
    warning: theme.color.warning[300],
    error: theme.color.error[300],
    white: theme.color.black,
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[800],
    success: theme.color.success[900],
    warning: theme.color.warning[800],
    error: theme.color.error[800],
    white: theme.color.black,
  },
};

export default darkTheme;

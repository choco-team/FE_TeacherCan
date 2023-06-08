import theme from './theme';

const lightTheme = {
  ...theme,
  text: theme.color.neutral[100],
  subText: theme.color.neutral[400],
  background: {
    basic: theme.color.white,
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[100],
    success: theme.color.success[100],
    warning: theme.color.warning[100],
    error: theme.color.error[100],
    white: theme.color.white,
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[600],
    success: theme.color.success[600],
    warning: theme.color.warning[600],
    error: theme.color.error[400],
    white: theme.color.white,
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[300],
    success: theme.color.success[300],
    warning: theme.color.warning[300],
    error: theme.color.error[300],
    white: theme.color.white,
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[400],
    success: theme.color.success[400],
    warning: theme.color.warning[400],
    error: theme.color.error[400],
    white: theme.color.white,
  },
};

export default lightTheme;

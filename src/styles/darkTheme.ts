import theme from './theme';

const darkTheme = {
  ...theme,
  text: theme.color.neutral[100],
  primaryText: theme.color.neutral[800],
  subText: theme.color.neutral[400],
  accentText: theme.color.primary[500],
  shadow: `0rem 0.2rem 1.5rem ${theme.color.gray[950]}`,
  pageBackground: theme.color.gray[900],
  background: {
    basic: theme.color.black,
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[500],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    orange: theme.color.orange[400],
  },
  border: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[600],
    success: theme.color.success[900],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
    orange: theme.color.orange[600],
  },
  hoverBackground: {
    primary: theme.color.primary[300],
    secondary: theme.color.secondary[300],
    success: theme.color.success[400],
    warning: theme.color.warning[300],
    error: theme.color.error[300],
    orange: theme.color.orange[500],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[800],
    success: theme.color.success[900],
    warning: theme.color.warning[800],
    error: theme.color.error[800],
    orange: theme.color.orange[700],
  },
};

export default darkTheme;

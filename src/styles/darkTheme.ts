import theme from './theme';

const darkTheme = {
  ...theme,
  text: theme.color.gray[100],
  primaryText: theme.color.gray[800],
  subText: theme.color.gray[400],
  accentText: theme.color.primary[500],
  shadow: `0rem 0.2rem 1.5rem ${theme.color.gray[950]}`,
  pageBackground: theme.color.gray[800],
  background: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[500],
    gray: theme.color.gray[950],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    disabled: theme.color.gray[600],
    orange: theme.color.orange[400],
  },
  border: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[600],
    gray: theme.color.gray[400],
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
  hoverBorder: {
    gray: theme.color.gray[300],
  },
};

export default darkTheme;

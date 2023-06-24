import theme from './theme';

const lightTheme = {
  ...theme,
  text: theme.color.neutral[800],
  primaryText: theme.color.neutral[100],
  subText: theme.color.neutral[400],
  accentText: theme.color.primary[500],
  shadow: `0rem 0.2rem 1.5rem ${'rgba(198, 198, 198, 0.25)'}`,
  pageBackground: theme.color.gray[100],
  background: {
    basic: theme.color.white,
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[100],
    success: theme.color.success[100],
    warning: theme.color.warning[100],
    error: theme.color.error[100],
    orange: theme.color.orange[600],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[600],
    success: theme.color.success[600],
    warning: theme.color.warning[600],
    error: theme.color.error[400],
    orange: theme.color.orange[800],
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[300],
    success: theme.color.success[300],
    warning: theme.color.warning[300],
    error: theme.color.error[300],
    orange: theme.color.orange[900],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[400],
    success: theme.color.success[400],
    warning: theme.color.warning[400],
    error: theme.color.error[400],
    orange: theme.color.orange[800],
  },
};

export default lightTheme;

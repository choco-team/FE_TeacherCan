import theme from './theme';

const lightTheme = {
  text: theme.color.neutral[800],
  subText: theme.color.neutral[400],
  background: {
    basic: theme.color.white,
    primary: theme.color.primary[100],
    secondary: theme.color.secondary[100],
    success: theme.color.success[100],
    warning: theme.color.warning[100],
    error: theme.color.error[100],
    white: theme.color.white,
  },
  border: {
    primary: theme.color.primary[600],
    secondary: theme.color.secondary[600],
    success: theme.color.success[600],
    warning: theme.color.warning[600],
    error: theme.color.error[400],
    white: theme.color.white,
  },
};

export default lightTheme;

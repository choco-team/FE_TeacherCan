import theme from './theme';

const lightTheme = Object.assign(theme, {
  text: theme.color.neutral[800],
  background: {
    primary: theme.color.primary[100],
    secondary: theme.color.secondary[100],
    success: theme.color.success[100],
    warning: theme.color.warning[100],
    error: theme.color.error[100],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[600],
    success: theme.color.success[600],
    warning: theme.color.warning[600],
    error: theme.color.error[400],
  },
});

export default lightTheme;

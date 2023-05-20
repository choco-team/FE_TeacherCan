import theme from './theme';

const darkTheme = Object.assign(theme, {
  text: theme.color.neutral[100],
  background: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[500],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
  },
  border: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[600],
    success: theme.color.success[900],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
  },
});

export default darkTheme;

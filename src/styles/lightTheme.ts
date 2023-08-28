import theme from './theme';

const lightTheme = {
  ...theme,
  text: theme.color.gray[800],
  primaryText: theme.color.gray[100],
  subText: theme.color.gray[400],
  grayText: theme.color.gray[500],
  accentText: theme.color.primary[500],
  pageBackground: theme.color.gray[100],
  sectionBackground: theme.color.gray[200],
  modalBackground: 'rgba(0, 0, 0, 0.65)',
  shadow: {
    100: 'rgba(198, 198, 198, 0.25) 0rem 0.2rem 1.5rem',
    200: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  background: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[100],
    gray: theme.color.gray[50],
    success: theme.color.success[700],
    warning: theme.color.warning[100],
    error: theme.color.error[700],
    disabled: theme.color.gray[200],
    orange: theme.color.orange[600],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[600],
    gray: theme.color.gray[300],
    success: theme.color.success[600],
    warning: theme.color.warning[600],
    error: theme.color.error[400],
    orange: theme.color.orange[800],
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[300],
    gray: theme.color.gray[200],
    success: theme.color.success[300],
    warning: theme.color.warning[300],
    error: theme.color.error[300],
    orange: theme.color.orange[900],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[200],
    success: theme.color.success[400],
    warning: theme.color.warning[400],
    error: theme.color.error[400],
    orange: theme.color.orange[800],
  },
  selectionBackground: {
    primary: theme.color.primary[100],
  },
  hoverBorder: {
    gray: theme.color.gray[400],
  },
};

export default lightTheme;

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
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    disabled: theme.color.gray[200],
    orange: theme.color.orange[600],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    orange: theme.color.orange[800],
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[500],
    gray: theme.color.gray[500],
    success: theme.color.success[700],
    warning: theme.color.warning[600],
    error: theme.color.error[600],
    orange: theme.color.orange[900],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[600],
    gray: theme.color.gray[600],
    success: theme.color.success[800],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
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

import theme from './theme';

const darkTheme = {
  ...theme,
  text: theme.color.gray[100],
  primaryText: theme.color.gray[800],
  subText: theme.color.gray[400],
  grayText: theme.color.gray[500],
  accentText: theme.color.primary[500],
  shadow: {
    100: 'rgba(198, 198, 198, 0.25) 0rem 2px 1.5px',
    200: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  pageBackground: theme.color.gray[800],
  mainBackground: theme.color.gray[900],
  sectionBackground: theme.color.gray[800],
  modalBackground: 'rgba(255, 255, 255, 0.3)',
  background: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    disabled: theme.color.gray[600],
    orange: theme.color.orange[400],
  },
  border: {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    gray: theme.color.gray[400],
    success: theme.color.success[600],
    warning: theme.color.warning[500],
    error: theme.color.error[500],
    orange: theme.color.orange[600],
  },
  hoverBackground: {
    primary: theme.color.primary[700],
    secondary: theme.color.secondary[500],
    gray: theme.color.gray[500],
    success: theme.color.success[700],
    warning: theme.color.warning[600],
    error: theme.color.error[600],
    orange: theme.color.orange[500],
  },
  activeBackground: {
    primary: theme.color.primary[800],
    secondary: theme.color.secondary[600],
    gray: theme.color.gray[600],
    success: theme.color.success[800],
    warning: theme.color.warning[700],
    error: theme.color.error[700],
    orange: theme.color.orange[700],
  },
  selectionBackground: {
    primary: theme.color.primary[800],
  },
  hoverBorder: {
    gray: theme.color.gray[300],
  },
};

export default darkTheme;

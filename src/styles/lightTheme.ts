import theme from './theme';

const lightTheme = {
  ...theme,
  name: 'light',
  text: theme.color.gray[800],
  primaryText: theme.color.gray[100],
  subText: theme.color.gray[400],
  grayText: theme.color.gray[500],
  accentText: theme.color.primary[500],
  shadow: {
    100: 'rgba(198, 198, 198, 0.25) 0rem 0.2px 1.5px',
    200: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  pageBackground: theme.color.gray[100],
  mainBackground: theme.color.gray[50],
  sectionBackground: theme.color.gray[200],
  modalBackground: 'rgba(0, 0, 0, 0.65)',
  selectionBackground: {
    primary: theme.color.primary[100],
  },
  hoverBorder: {
    gray: theme.color.gray[300],
  },
} as const;

export default lightTheme;

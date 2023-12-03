import theme from './theme';

const darkTheme = {
  ...theme,
  name: 'dark',
  text: theme.color.gray[200],
  primaryText: theme.color.gray[800],
  subText: theme.color.gray[400],
  grayText: theme.color.gray[400],
  accentText: theme.color.primary[500],
  shadow: {
    100: 'rgba(240, 240, 240, 0.05) 0rem 2px 1.5px',
    200: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  pageBackground: theme.color.gray[800],
  mainBackground: theme.color.gray[900],
  sectionBackground: theme.color.gray[900],
  selectionBackground: {
    primary: theme.color.primary[800],
  },
  hoverBorder: {
    gray: theme.color.gray[700],
  },
} as const;

export default darkTheme;

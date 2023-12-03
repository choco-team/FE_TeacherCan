import theme from './theme';

const darkTheme = {
  ...theme,
  name: 'dark',
  text: theme.color.gray[200],
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
  selectionBackground: {
    primary: theme.color.primary[800],
  },
  hoverBorder: {
    gray: theme.color.gray[700],
  },
} as const;

export default darkTheme;

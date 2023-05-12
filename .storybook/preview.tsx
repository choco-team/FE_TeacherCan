import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/styles/GlobalStyle';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import lightTheme from '../src/styles/lightTheme';
import darkTheme from '../src/styles/darkTheme';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;

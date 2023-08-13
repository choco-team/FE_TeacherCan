import type { Meta, StoryObj } from '@storybook/react';

import Menu from '.';

type Story = StoryObj<typeof Menu>;

/**
 * Menu
 */
const meta: Meta<typeof Menu> = {
  title: 'NAVIGATION/Menu',
  component: Menu,
};

export default meta;

export const DefaultMenu: Story = {
  args: {},
};

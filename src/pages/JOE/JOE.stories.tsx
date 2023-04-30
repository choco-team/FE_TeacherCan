import type { Meta, StoryObj } from '@storybook/react';
import Joe from '.';

/**
 * BtnJoe
 */

const meta = {
  title: 'BtnJoe',
  component: Joe,
} satisfies Meta<typeof Joe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'NEW',
  },
};

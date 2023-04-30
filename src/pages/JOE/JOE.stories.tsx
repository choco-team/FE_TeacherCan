import { Button } from './style';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * BtnJoe
 */

const meta = {
  title: 'BtnJoe',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
};

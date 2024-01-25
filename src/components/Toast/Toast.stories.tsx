import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import Toast from '.';

type Story = StoryObj<typeof Toast>;

const meta: Meta<typeof Toast> = {
  title: 'Toast/Toast',
  component: Toast,
  argTypes: {
    variant: {
      options: VARIANT,
    },
  },
};

export default meta;

export const DefaultToast: Story = {
  args: {
    children: '버튼',
  },
};

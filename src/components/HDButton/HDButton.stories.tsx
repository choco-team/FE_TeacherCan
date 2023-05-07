import type { Meta, StoryObj } from '@storybook/react';

import HDButton from '.';

type Story = StoryObj<typeof HDButton>;

/**
 * `HDButton` 컴포넌트는 연습 버튼 컴포넌트입니다.
 */
const meta: Meta<typeof HDButton> = {
  title: 'HDButton',
  component: HDButton,
};

export default meta;

export const HDButtonDefault: Story = {
  args: {
    text: '기본값',
    backgroundColor: 'red',
  },
};

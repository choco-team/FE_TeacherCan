import type { Meta, StoryObj } from '@storybook/react';

import JYButton from '.';

type Story = StoryObj<typeof JYButton>;

// 'JYButton 컴포넌트는 JY 연습 버튼 컴포넌트입니다.
const meta: Meta<typeof JYButton> = {
  title: 'JYButton',
  component: JYButton,
};

export default meta;

export const JYButtonDefault: Story = {
  args: {
    text: 'button',
    backgroundColor: 'orange',
    activeColor: 'green',
  },
};

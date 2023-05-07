import type { Meta, StoryObj } from '@storybook/react';

// 'JYButton 컴포넌트는 JY 연습 버튼 컴포넌트입니다.
const meta: Meta<typeof JYButton> = {
  title: 'JYButton',
  component: JYButton,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const JYButtonDefault: Story = {};

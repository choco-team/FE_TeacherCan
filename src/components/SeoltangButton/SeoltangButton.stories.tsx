import type { Meta, StoryObj } from '@storybook/react';

import SeoltangButton from '.';

type Story = StoryObj<typeof SeoltangButton>;

/**
 * 버튼 컴포넌트입니다.
 */
const meta: Meta<typeof SeoltangButton> = {
  title: 'SeoltangButton',
  component: SeoltangButton,
};

export default meta;

export const SeoltangButtonDefault: Story = {
  args: {
    text: '버튼',
    handleClick: () => alert('clicked!'),
    backgroundColor: 'lavender',
  },
};

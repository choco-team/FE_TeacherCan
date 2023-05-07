import type { Meta, StoryObj } from '@storybook/react';

import JoeunBtn from '.';

const meta: Meta<typeof JoeunBtn> = {
  title: 'JoeunBtn',
  component: JoeunBtn,
};

export default meta;

type Story = StoryObj<typeof JoeunBtn>;

export const JoeunBtnDefault: Story = {
  args: {
    text: '확인',
    backgroundColor: '#f2a48e',
  },
};

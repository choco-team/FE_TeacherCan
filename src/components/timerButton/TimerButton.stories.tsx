import type { Meta, StoryObj } from '@storybook/react';

import TimerBtn from '.';

const meta: Meta<typeof TimerBtn> = {
  title: 'TimerBtn',
  component: TimerBtn,
};

export default meta;

type Story = StoryObj<typeof TimerBtn>;

export const TimerBtnDefault: Story = {
  args: {
    type: 'default',
    text: 'COUNTUP',
    isSelect: false,
    backgroundColor: '#9b9191',
  },
};

export const TimerBtnSelected: Story = {
  args: {
    type: 'selected',
    text: 'COUNTUP',
    isSelect: false,
    backgroundColor: '#FA8D8D',
  },
};

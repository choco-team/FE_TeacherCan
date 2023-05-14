import type { Meta, StoryObj } from '@storybook/react';

import JYMemo from '.';

type Story = StoryObj<typeof JYMemo>;

const meta: Meta<typeof JYMemo> = {
  title: 'JYMemo',
  component: JYMemo,
};

export default meta;

export const MemoDefault: Story = {
  args: {
    text1: '메모',
  },
};

export const Lunch: Story = {
  args: {
    text1: '오늘의 급식 메뉴',
    text2: '옥수수밥 미역국 돈까스 김치 오렌지쥬스',
    text3: '알러지학생: 홍길동',
  },
};

export const Attend: Story = {
  args: {
    date: '4/23',
    text1: '출결',
  },
};

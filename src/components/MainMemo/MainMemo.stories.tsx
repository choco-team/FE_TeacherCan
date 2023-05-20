import type { Meta, StoryObj } from '@storybook/react';

import { flexCustom } from '@Styles/common';

import MemoDiv from '.';

type Story = StoryObj<typeof MemoDiv>;

/**
 * `MemoDiv` 컴포넌트는 메인 화면의 메모 컴포넌트입니다.
 */
const meta: Meta<typeof MemoDiv> = {
  title: 'MemoDiv',
  component: MemoDiv,
};

export default meta;

export const MainMemo: Story = {
  args: {
    text: '메모',
    css: flexCustom(),
  },
};

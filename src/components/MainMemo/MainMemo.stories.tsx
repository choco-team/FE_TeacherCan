import type { Meta, StoryObj } from '@storybook/react';

import MemoTitle from '.';

type Story = StoryObj<typeof MemoTitle>;

/**
 * `MemoDiv` 컴포넌트는 메인 화면의 메모 컴포넌트입니다.
 */
const meta: Meta<typeof MemoTitle> = {
  title: 'MemoDiv',
  component: MemoTitle,
};

export default meta;

export const MainMemo: Story = {
  args: {
    text: '메모',
  },
};

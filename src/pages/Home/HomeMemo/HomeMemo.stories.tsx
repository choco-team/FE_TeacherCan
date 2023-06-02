import type { Meta, StoryObj } from '@storybook/react';

import HomeMemo from '.';

type Story = StoryObj<typeof HomeMemo>;

/**
 * `MemoDiv` 컴포넌트는 메인 화면의 메모 컴포넌트입니다.
 */
const meta: Meta<typeof HomeMemo> = {
  title: 'HomeMemo',
  component: HomeMemo,
};

export default meta;

export const MainMemo: Story = {
  args: {
    text: '메모',
    width: '280px',
    height: '280px',
  },
};

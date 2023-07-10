import type { Meta, StoryObj } from '@storybook/react';

import Result from '.';

type Story = StoryObj<typeof Result>;

/**
 * `Result` 컴포넌트는 랜덤 뽑기의 결과를 보여주는 컴포넌트입니다.
 */
const meta: Meta<typeof Result> = {
  title: 'RandomPick/Result',
  component: Result,
  argTypes: {},
};

export default meta;

export const ResultBox: Story = {
  args: {
    children: ['김나비', '박호빵'],
  },
};

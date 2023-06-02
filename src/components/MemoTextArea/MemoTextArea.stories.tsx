import type { Meta, StoryObj } from '@storybook/react';

import MemoTextArea from './index';

type Story = StoryObj<typeof MemoTextArea>;

/**
 * `MemoTextAreaDefault` 컴포넌트는 메인 화면의 메모 추가 컴포넌트입니다.
 */
const Border = '2px dashed #D1D5DB';

const meta: Meta<typeof MemoTextArea> = {
  title: 'MemoTextArea',
  component: MemoTextArea,
};

export default meta;

export const MemoTextAreaDefault: Story = {
  args: {
    text: '메모를 남겨주세요.',
    border: Border,
    width: '260px',
    height: '130px',
    color: '#71717a',
  },
};

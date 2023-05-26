import type { Meta, StoryObj } from '@storybook/react';

import AddTextArea from '.';

type Story = StoryObj<typeof AddTextArea>;

/**
 * `MemoInput` 컴포넌트는 메인 화면의 메모 추가 컴포넌트입니다.
 */
const Border = '2px dashed #D1D5DB';

const meta: Meta<typeof AddTextArea> = {
  title: 'AddTextArea',
  component: AddTextArea,
};

export default meta;

export const AddTextAreaDefault: Story = {
  args: {
    text: '메모를 남겨주세요.',
    border: Border,
    width: '250px',
    height: '130px',
    color: '#71717a',
  },
};

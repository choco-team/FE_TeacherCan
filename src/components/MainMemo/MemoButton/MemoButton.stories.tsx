import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import MemoButton from '.';

type Story = StoryObj<typeof MemoButton>;

/**
 * `MemoButton` 컴포넌트는 메인 화면의 메모버튼 컴포넌트입니다.
 */
const meta: Meta<typeof MemoButton> = {
  title: 'MemoButton',
  component: MemoButton,
  argTypes: {
    variant: {
      options: VARIANT,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const SaveListButton: Story = {
  args: {
    text: '+',
    variant: 'white',
    activeColor: '#FCA5A5',
    activeText: 'white',
    width: '30px',
    height: '30px',
  },
};

export const SaveButton: Story = {
  args: {
    text: '저장',
    variant: 'white',
    activeColor: '#FCA5A5',
    activeText: 'white',
    width: '90px',
    height: '30px',
  },
};

export const DeleteButton: Story = {
  args: {
    text: '취소',
    variant: 'white',
    activeColor: '#FCA5A5',
    activeText: 'white',
    width: '90px',
    height: '30px',
  },
};

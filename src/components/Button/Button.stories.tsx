import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import Button from '.';

type Story = StoryObj<typeof Button>;

/**
 * `MemoButton` 컴포넌트는 메인 화면의 메모버튼 컴포넌트입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
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
    type: 'button',
    text: '저장목록',
    variant: 'primary',
    minWidth: '80px',
    boxSizing: 'border-box',
    activeColor: 'white',
    borderRadius: '5px',
    border: '1px solid #fca5a5',
    padding: '6px',
    activeBorder: '1px solid #d4d4d8',
    activeText: 'black',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export const SaveButton: Story = {
  args: {
    text: '저장',
    variant: 'primary',
    minWidth: '80px',
    boxSizing: 'border-box',
    marginLeft: '4px',
    activeColor: 'white',
    borderRadius: '5px',
    border: '1px solid #fca5a5',
    padding: '6px',
    activeBorder: '1px solid #d4d4d8',
    activeText: 'black',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export const DeleteButton: Story = {
  args: {
    text: '취소',
    variant: 'primary',
    minWidth: '80px',
    boxSizing: 'border-box',
    margin: '5px',
    activeColor: 'white',
    borderRadius: '5px',
    border: '1px solid #fca5a5',
    padding: '6px',
    activeBorder: '1px solid #d4d4d8',
    activeText: 'black',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

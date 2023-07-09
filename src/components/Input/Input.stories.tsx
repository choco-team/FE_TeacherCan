import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

type Story = StoryObj<typeof Input>;

/**
 * Input
 */
const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    dense: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;

/**
 * (Default)
 */
export const InputText: Story = {
  args: {
    placeholder: '내용을 입력하세요...',
  },
};

export const InputReadOnly: Story = {
  args: {
    value: '읽을 수만 있을걸!',
    readOnly: true,
  },
};

export const InputDisabled: Story = {
  args: {
    value: '완전 막혀있지롱!',
    disabled: true,
  },
};

/**
 * 여백 좁게 하는 속성 dense (default: `false`)
 */
export const InputDense: Story = {
  args: {
    defaultValue: '공간이 부족하다면 dense를 추가해서 여백을 줄여보세요.',
    dense: true,
  },
};

/**
 * 크기 조절하는 속성 size (default: `'md'`)
 *
 * > `size='sm'`일 때 `dense`는 기본값이 `true`
 */
export const InputSmall: Story = {
  args: {
    defaultValue: '작고 귀여운 Input ღ •͈ᴗ•͈ ღ',
    size: 'sm',
  },
};

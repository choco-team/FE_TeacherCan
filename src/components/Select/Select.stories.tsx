import type { Meta, StoryObj } from '@storybook/react';

import Select from '.';

type Story = StoryObj<typeof Select>;

/**
 * `Select` 컴포넌트는 사용자가 텍스트를 입력하고 편집할 수 있는 컴포넌트입니다.
 */
const meta: Meta<typeof Select> = {
  title: 'INPUTS/Select',
  component: Select,
};

export default meta;

/**
 * `DefaultSelect`는 가징 기본적인 `Select` 스토리입니다.
 */
export const DefaultSelect: Story = {
  args: {
    label: 'DEFAULT',
    options: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
    onChangeOption: (selected) => {
      console.log(selected);
    },
  },
};

/**
 * `HasDefaultOptionSelect`는 defaultOption이 존재하는 `Select` 스토리입니다.
 */
export const HasDefaultOptionSelect: Story = {
  args: {
    label: 'Has Default Option',
    options: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
    defaultOption: 'Option1',
    onChangeOption: (selected) => {
      console.log(selected);
    },
  },
};

/**
 * `HasPlaceholderSelect`는 placeholder이 존재하는 `Select` 스토리입니다.
 */
export const HasPlaceholderSelect: Story = {
  args: {
    label: 'Has Placeholder',
    options: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
    placeholder: '커스튬 가능한 문구입니다.',
    onChangeOption: (selected) => {
      console.log(selected);
    },
  },
};

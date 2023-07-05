import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from '.';
type Story = StoryObj<typeof CheckBox>;

/**
 * `CheckBox` 컴포넌트는 랜덤 뽑기 화면에서 클릭할 수 있는 체크박스입니다.
 */
const meta: Meta<typeof CheckBox> = {
  title: 'RandomPick/CheckBox',
  component: CheckBox,
  argTypes: {},
};

export default meta;

export const ListCheckBox: Story = {
  args: {
    children: '기존 명단',
  },
};

export const MethodCheckBox: Story = {
  args: {
    children: '한 명 뽑기',
  },
};

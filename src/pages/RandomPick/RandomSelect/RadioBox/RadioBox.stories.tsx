import type { Meta, StoryObj } from '@storybook/react';

import RadioBox from '.';
type Story = StoryObj<typeof RadioBox>;

/**
 * `RadioBox` 컴포넌트는 랜덤 뽑기 화면에서 클릭할 수 있는 라디오박스입니다.
 */
const meta: Meta<typeof RadioBox> = {
  title: 'RandomPick/RadioBox',
  component: RadioBox,
  argTypes: {},
};

export default meta;

export const ListRadioBox: Story = {
  args: {
    name: '기존 명단',
  },
};

export const MethodRadioBox: Story = {
  args: {
    name: '한 명 뽑기',
  },
};

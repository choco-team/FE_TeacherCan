import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import ConditionBox from '.';

type Story = StoryObj<typeof ConditionBox>;

const meta: Meta<typeof ConditionBox> = {
  title: 'RandomPick/ConditionBox',
  component: ConditionBox,
  argTypes: {
    variant: {
      options: VARIANT,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const DefaultConditionBox: Story = {
  args: {},
};

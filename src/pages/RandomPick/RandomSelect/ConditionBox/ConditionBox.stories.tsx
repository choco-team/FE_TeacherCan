import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';

import ConditionBox from '.';

type Story = StoryObj<typeof ConditionBox>;

const meta: Meta<typeof ConditionBox> = {
  title: 'RandomPick/ConditionBox',
  component: ConditionBox,
};

export default meta;

export const DefaultConditionBox: Story = {
  args: {
    Icon: LuLogOut,
    String: '조건설정',
  },
};

export const TargetConditionBox: Story = {
  args: {
    Icon: AiOutlineUserAdd,
    String: '대상',
  },
};

export const UsersConditionBox: Story = {
  args: {
    Icon: HiUserGroup,
    String: '방식',
  },
};

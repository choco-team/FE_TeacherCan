import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { LuLogOut } from 'react-icons/lu';

import CBox from '.';

type Story = StoryObj<typeof CBox>;

const meta: Meta<typeof CBox> = {
  title: 'RandomPick/ConditionBox',
  component: CBox,
};

export default meta;

export const DefaultConditionBox: Story = {
  args: {
    Icon: LuLogOut,
  },
};

export const TargetConditionBox: Story = {
  args: {
    Icon: AiOutlineUserAdd,
  },
};

export const UsersConditionBox: Story = {
  args: {
    Icon: HiUserGroup,
  },
};

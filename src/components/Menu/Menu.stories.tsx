import type { Meta, StoryObj } from '@storybook/react';

import Menu from '.';

type Story = StoryObj<typeof Menu>;

/**
 * Menu
 */
const meta: Meta<typeof Menu> = {
  title: 'NAVIGATION/Menu',
  component: Menu,
};

export default meta;

export const DefaultMenu: Story = {
  args: {
    trigger: 'open menu',
    children: (
      <>
        <Menu.Item onClickMenu={() => alert('아이템1')}>아이템1</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템2')}>아이템2</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템3')}>아이템3</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템4')}>아이템4</Menu.Item>
      </>
    ),
  },
};

export const RightMenu: Story = {
  args: {
    trigger: 'open menu',
    position: 'right',
    children: (
      <>
        <Menu.Item onClickMenu={() => alert('아이템1')}>Long 아이템1</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템2')}>아이템2</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템3')}>아이템3</Menu.Item>
        <Menu.Item onClickMenu={() => alert('아이템4')}>아이템4</Menu.Item>
      </>
    ),
  },
};

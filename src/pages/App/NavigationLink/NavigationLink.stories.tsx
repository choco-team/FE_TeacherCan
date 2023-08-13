import type { Meta, StoryObj } from '@storybook/react';
import { BiTimer } from 'react-icons/bi';

import NavigationLink from '.';

type Story = StoryObj<typeof NavigationLink>;

/**
 * `MemoNavigationLink` 컴포넌트는 다른 페이지로 이동할 때 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof NavigationLink> = {
  title: 'NAVIGATION/NavigationLink',
  component: NavigationLink,
};

export default meta;

/**
 * `NavigationLink`의 기본 스토리입니다.
 */
export const DefaultNavigationLink: Story = {
  args: {
    category: 'main',
    isSelected: false,
    name: '교육과정',
    path: '',
  },
};

/**
 * 선택된 Header의 `NavigationLink` 스토리입니다.
 */
export const SelectedHeaderNavigationLink: Story = {
  args: {
    category: 'main',
    isSelected: true,
    name: '교육과정',
    path: '',
  },
};

/**
 * Side 메뉴의 `NavigationLink` 스토리입니다.
 */
export const SideNavigationLink: Story = {
  args: {
    category: 'middle',
    isSelected: false,
    name: '타이머',
    path: '',
    Icon: BiTimer,
  },
};

/**
 * 선택된 Side 메뉴의 `NavigationLink` 스토리입니다.
 */
export const SideSelectedNavigationLink: Story = {
  args: {
    category: 'middle',
    isSelected: true,
    name: '타이머',
    path: '',
    Icon: BiTimer,
  },
};

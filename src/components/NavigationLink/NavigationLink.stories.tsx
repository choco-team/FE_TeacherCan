import type { Meta, StoryObj } from '@storybook/react';

import { CATEGORIES } from '@Constant/routePath';

import NavigationLink from '.';

type Story = StoryObj<typeof NavigationLink>;

/**
 * `MemoNavigationLink` 컴포넌트는 다른 페이지로 이동할 때 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof NavigationLink> = {
  title: 'Link/NavigationLink',
  component: NavigationLink,
};

export default meta;

export const DefaultNavigationLink: Story = {
  args: {
    category: 'main',
    isSelected: false,
    name: CATEGORIES.curriculum.name,
    path: CATEGORIES.curriculum.path,
  },
};

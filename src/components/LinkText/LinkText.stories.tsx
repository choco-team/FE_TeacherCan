import type { Meta, StoryObj } from '@storybook/react';

import LinkText from '.';

type Story = StoryObj<typeof LinkText>;

/**
 * 링크 텍스트
 */
const meta: Meta<typeof LinkText> = {
  title: 'LinkText',
  component: LinkText,
};

export default meta;

export const LinkTextDefault: Story = {
  args: {
    text: '티처캔 바로가기',
    linkTo: 'https://www.teachercan.com',
  },
};

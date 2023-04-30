import { H1 } from '@Styles/common';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * `Button`은 어느 페이지에서든 사용하는 컴포넌트입니다.
 */
const meta = {
  title: 'H1',
  component: H1,
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'H1',
  },
};

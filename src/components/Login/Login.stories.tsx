import type { Meta, StoryObj } from '@storybook/react';

import Login from '.';

type Story = StoryObj<typeof Login>;

/**
 * 로그인 컴포넌트
 */
const meta: Meta<typeof Login> = {
  title: 'Login',
  component: Login,
};

export default meta;

export const LoginDefault: Story = {};

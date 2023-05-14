import type { Meta, StoryObj } from '@storybook/react';

import Alert from '.';

type Story = StoryObj<typeof Alert>;

/**
 * 알림 스낵바입니다.
 */
const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
};

export default meta;

export const AlertSuccess: Story = {
  args: {
    type: 'success',
    text: '저장되었습니다.',
  },
};

export const AlertError: Story = {
  args: {
    type: 'error',
    text: '저장에 실패했습니다. 다시 시도해주세요.',
  },
};

export const AlertReverse: Story = {
  args: {
    text: '저장되었습니다.',
    isReverse: true,
  },
};

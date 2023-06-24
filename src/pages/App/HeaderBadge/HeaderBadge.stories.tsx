import type { Meta, StoryObj } from '@storybook/react';

import HeaderBadge from '.';

type Story = StoryObj<typeof HeaderBadge>;

/**
 * `HeaderBadge`은 헤더의 베지로 알람과 사용자 정보를 나타냅니다.
 */
const meta: Meta<typeof HeaderBadge> = {
  title: 'Badge/HeaderBadge',
  component: HeaderBadge,
};

export default meta;

/**
 * `WeatherBadge`의 기본 스토입니다.
 */
export const DefaultHeaderBadge: Story = {
  args: {
    username: '김선생',
  },
};

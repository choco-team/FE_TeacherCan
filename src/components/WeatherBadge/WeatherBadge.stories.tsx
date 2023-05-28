import type { Meta, StoryObj } from '@storybook/react';

import Cloud from '@Assets/image/Cloud.png';

import WeatherBadge from '.';

type Story = StoryObj<typeof WeatherBadge>;

/**
 * `WeatherBadge`은 현재 날씨, 미세먼지를 간략하게 나타내는 컴포넌트입니다.
 */
const meta: Meta<typeof WeatherBadge> = {
  title: 'Badge/WeatherBadge',
  component: WeatherBadge,
};

export default meta;

/**
 * `WeatherBadge`의 기본 스토입니다.
 */
export const DefaultWeatherBadge: Story = {
  args: {
    weather: {
      sky: Cloud,
      temperature: '21℃',
      dust: '매우나쁨',
    },
  },
};

/**
 * 날씨 권환을 거부하였을 때의 `WeatherBadge`의 스토리입니다.
 */
export const RejectWeatherBadge: Story = {
  args: {
    isRejected: true,
  },
};

/**
 * 날씨 정보가 없을 때의 `WeatherBadge`의 스토리입니다.
 */
export const NoneWeatherBadge: Story = {
  args: {},
};

/**
 * 날씨 정보가 불러오는 동안 보여지는 `WeatherBadge`의 스토리입니다.
 */
export const SkeletonWeatherBadge: Story = {
  args: { isLoading: true },
};

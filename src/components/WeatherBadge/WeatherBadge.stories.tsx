import type { Meta, StoryObj } from '@storybook/react';

import WeatherBadge from '.';

type Story = StoryObj<typeof WeatherBadge>;

/**
 * `WeatherBadge`은 현재 날씨, 미세먼지를 간략하게 나타내는 컴포넌트입니다.
 */
const meta: Meta<typeof WeatherBadge> = {
  title: 'WeatherBadge',
  component: WeatherBadge,
};

export default meta;

export const DefaultWeatherBadge: Story = {
  args: {},
};

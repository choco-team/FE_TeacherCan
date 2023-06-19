import type { Meta, StoryObj } from '@storybook/react';

import VacationDate from '.';

type Story = StoryObj<typeof VacationDate>;

/**
 * `VacationDateItem` 컴포넌트는 방학까지 남은 날짜를 나타내는 컴포넌트입니다.
 */
const meta: Meta<typeof VacationDate> = {
  title: 'Page/Home/VacationDate',
  component: VacationDate,
  argTypes: {},
};

export default meta;

export const SummerVacationDate: Story = {
  args: { season: '여름', date: 100 },
};

export const WinterVacationDate: Story = {
  args: { season: '겨울', date: 74 },
};

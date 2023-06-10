import type { Meta, StoryObj } from '@storybook/react';

import VacationDateItem from '.';

type Story = StoryObj<typeof VacationDateItem>;

/**
 * `VacationDateItem` 컴포넌트는 방학까지 남은 날짜를 나타내는 컴포넌트입니다.
 */
const meta: Meta<typeof VacationDateItem> = {
  title: 'Page/Home/VacationDateItem',
  component: VacationDateItem,
  argTypes: {},
};

export default meta;

export const SummerVacationDateItem: Story = {
  args: {
    isSummer: true,
  },
};

export const WinterVacationDateItem: Story = {
  args: {
    isSummer: false,
  },
};

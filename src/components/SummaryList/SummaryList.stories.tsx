import type { Meta, StoryObj } from '@storybook/react';

import SummaryList from '.';

type Story = StoryObj<typeof SummaryList>;

/**
 * `SummaryList`은 어떤 주제에 대한 정보를 간단히 나타내고 싶을 때 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof SummaryList> = {
  title: 'SummaryList',
  component: SummaryList,
};

export default meta;

export const DefaultSummaryList: Story = {};

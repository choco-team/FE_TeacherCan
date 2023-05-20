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

export const DefaultSummaryList: Story = {
  args: {
    title: '요약 정보의 타이틀',
    list: ['정보1', '정보2', '정보3', '정보4'],
    width: '320px',
  },
};

export const LongSummaryList: Story = {
  args: {
    title: '매우 긴 요약 정보의 타이틀 매우 긴 요약 정보의 타이틀',
    list: [
      '매우 긴 요약을 가진 정보1 매우 긴 요약을 가진 정보1 매우 긴 요약을 가진 정보1',
      '매우 긴 요약을 가진 정보2 매우 긴 요약을 가진 정보2 매우 긴 요약을 가진 정보2',
      '매우 긴 요약을 가진 정보3 매우 긴 요약을 가진 정보3 매우 긴 요약을 가진 정보3',
      '매우 긴 요약을 가진 정보4 매우 긴 요약을 가진 정보4 매우 긴 요약을 가진 정보4',
    ],
    width: '320px',
  },
};

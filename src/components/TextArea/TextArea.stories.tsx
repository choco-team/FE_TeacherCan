import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './index';

type Story = StoryObj<typeof TextArea>;

/**
 * `TextAreaDefault` 컴포넌트는 메인 화면의 메모 추가 컴포넌트입니다.
 */

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
};

export default meta;

export const TextAreaDefault: Story = {
  args: {
    placeholder: '메모를 남겨주세요.',
  },
};

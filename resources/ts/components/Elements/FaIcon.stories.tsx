import type { Meta, StoryObj } from '@storybook/react';
import { FaIcon } from '@/components/Elements/FaIcon';

const meta: Meta<typeof FaIcon> = {
  component: FaIcon,
  argTypes: {
    stack: {
      control: 'array',
    },
  },
  args: {
    stack: ['', ''],
  },
} satisfies Meta<typeof FaIcon>;
export default meta;
type Story = StoryObj<typeof FaIcon>;

export const Single: Story = {
  args: {
    icon: 'google',
  },
};

export const Stacked: Story = {
  args: {
    stack: ['circle', 'google'],
  },
};

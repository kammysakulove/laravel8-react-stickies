import type { Meta, StoryObj } from '@storybook/react';
import { OKAlertDialog } from '@/components/Elements/OKAlertDialog';
import { Button, useDisclosure } from '@chakra-ui/react';

const meta: Meta<typeof OKAlertDialog> = {
  component: OKAlertDialog,
};
export default meta;
type Story = StoryObj<typeof OKAlertDialog>;

export const Primary: Story = {
  args: {
    title: 'title',
    body: 'alert body',
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Open Alert</Button>
        <OKAlertDialog isOpen={isOpen} onClose={onClose} title={args.title} body={args.body} />
      </>
    );
  },
};

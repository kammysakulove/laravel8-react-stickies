import { render, screen, waitFor } from '@/test/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { OKAlertDialog } from '../OKAlertDialog';
import { Button, useDisclosure } from '@chakra-ui/react';

const dialogBody = 'Dialog Body';
const TestDialog = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <Button onClick={disclosure.onOpen}>Open</Button>
      <OKAlertDialog disclosure={disclosure} onCloseAdditional={disclosure.onClose} title="" body={dialogBody} />
    </>
  );
};

describe('OKAlertDialog', () => {
  beforeEach(() => {
    render(<TestDialog />);
  });

  test('オープン', async () => {
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));

    await waitFor(() => expect(screen.getByText(dialogBody)).toBeVisible());
  });

  test('クローズ', async () => {
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.click(screen.getByRole('button', { name: 'OK' }));

    await waitFor(() => expect(screen.getByText(dialogBody)).not.toBeVisible());
  });
});

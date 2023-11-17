import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, useDisclosure } from '@chakra-ui/react';
import { ReactNode, useRef } from 'react';

type OKAlertDialogProps = {
  title: ReactNode;
  body: ReactNode;
  disclosure: ReturnType<typeof useDisclosure>;
  onCloseAdditional?: () => void;
};

export const OKAlertDialog = ({ title, body, disclosure, onCloseAdditional }: OKAlertDialogProps) => {
  const cancelRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onCloseAdditional?.();
    disclosure.onClose();
  };

  return (
    <AlertDialog isOpen={disclosure.isOpen} leastDestructiveRef={cancelRef} onClose={handleClose} closeOnEsc={false} closeOnOverlayClick={false}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{body}</AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="red" onClick={handleClose}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

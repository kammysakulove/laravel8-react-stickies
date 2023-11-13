import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogProps } from '@chakra-ui/react';
import { useRef } from 'react';

type OKAlertDialogProps = Omit<AlertDialogProps, 'leastDestructiveRef' | 'children'> & {
  title: string;
  body: string;
};

export const OKAlertDialog = ({ title, body, isOpen, onClose }: OKAlertDialogProps) => {
  const cancelRef = useRef<HTMLDivElement>(null);

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} closeOnEsc={false} closeOnOverlayClick={false}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{body}</AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="red" onClick={onClose}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

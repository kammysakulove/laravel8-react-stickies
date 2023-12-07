import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Spacer, Stack } from '@chakra-ui/react';
import { Form, InputField, TextareaField, SelectField } from '@/components/Form';
import { z } from 'zod';
import { CreateStickDTO, useCreateStick } from '../api/createStick';
import { useUsers } from '@/features/users/api/getUsers';
import { useEffect } from 'react';
import { useAuthUserStore } from '@/store/authUserStore';
import { User } from '@/features/users/types';
import { AuthUser } from '@/features/auth';
import { SubmitHandler } from 'react-hook-form';

type CreateStickiesProps = {
  disclosure: ReturnType<typeof useDisclosure>;
  onCloseAdditional?: () => void;
};

const schema = z.object({
  title: z.string().min(1, '入力してください'),
  body: z.string().min(1, '入力してください'),
  to: z.string().min(1, '選択してください'),
});

const createOptions = (users: User[], authUser: AuthUser) => {
  return [
    { value: authUser?.id, label: '自分' },
    ...(users
      ?.filter((user) => user.id !== authUser?.id)
      .map((user) => ({
        value: user.id,
        label: user.name,
      })) || []),
  ];
};

export const CreateSticky = ({ disclosure, onCloseAdditional }: CreateStickiesProps) => {
  //const cancelRef = useRef<HTMLDivElement>(null);
  const { users, isLoading, refetch } = useUsers(false);
  const mutation = useCreateStick();
  const authUser = useAuthUserStore((state) => state.user);

  useEffect(() => {
    if (disclosure.isOpen) {
      refetch();
    }
  }, [disclosure.isOpen]);

  const handleClose = () => {
    onCloseAdditional?.();
    disclosure.onClose();
  };

  const onSubmit: SubmitHandler<CreateStickDTO> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        disclosure.onClose();
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <Modal isOpen={disclosure.isOpen} onClose={handleClose} closeOnEsc={true} closeOnOverlayClick={true} size="lg">
      <ModalOverlay>
        <ModalContent>
          <Form<CreateStickDTO, typeof schema> onSubmit={onSubmit} schema={schema}>
            {({ register, formState }) => (
              <>
                <ModalHeader fontSize="lg" fontWeight="bold" textAlign="center">
                  新しい付箋
                </ModalHeader>
                <ModalCloseButton />
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <ModalBody>
                      <Stack spacing={5}>
                        <InputField label="タイトル" error={formState.errors.title} type="text" register={register('title')} />
                        <TextareaField label="本文" error={formState.errors.body} register={register('body')} rows={5} />
                        {authUser && users && <SelectField label="宛先" error={formState.errors.to} register={register('to')} options={createOptions(users, authUser)} />}
                      </Stack>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="gray" onClick={handleClose}>
                        キャンセル
                      </Button>
                      <Spacer />
                      <Button colorScheme="blue" type="submit">
                        作成
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </>
            )}
          </Form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

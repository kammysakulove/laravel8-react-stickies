import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import { useLogout } from '@/features/auth/';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const mutation = useLogout();
  const navigate = useNavigate();

  const logoutClick = async () => {
    console.log('logout');
    await mutation.mutateAsync(undefined, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <Flex bg="gray.400">
      <Spacer />
      <Box p="2">
        <Button colorScheme="red" size="sm" onClick={logoutClick}>
          ログアウト
        </Button>
      </Box>
    </Flex>
  );
};

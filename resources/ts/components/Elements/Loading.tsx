import { Center, Flex, Spinner } from '@chakra-ui/react';

export const LoadingComponent = () => {
  return (
    <Flex width={'100%'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center>
        <Spinner size="xl" emptyColor="gray.200" color="teal.400" />
      </Center>
    </Flex>
  );
};

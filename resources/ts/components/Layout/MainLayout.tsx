import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './Header';

type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  console.log('render main layout');

  return (
    <>
      <Box bg="gray.50" w="100vw" h="100vh">
        <Header />
        <Box p="4">{children}</Box>
      </Box>
    </>
  );
};

import { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { render, RenderOptions } from '@testing-library/react';

const TestProvider = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: TestProvider, ...options });

export const baseUrl = 'http://localhost:8080/laravel8-react-stickies';

export const testUsers = [
  {
    id: 1,
    name: '山田太郎',
    email: 'user1@test.jp',
    password: '0000',
    created_at: '2023-01-01 00:00:00',
  },
  {
    id: 2,
    name: '鈴木花子',
    email: 'user2@test.jp',
    password: '0000',
    created_at: '2023-01-01 00:00:00',
  },
  {
    id: 3,
    name: '佐藤一郎',
    email: 'user3@test.jp',
    password: '0000',
    created_at: '2023-01-01 00:00:00',
  },
];

export * from '@testing-library/react';
export { customRender as render };

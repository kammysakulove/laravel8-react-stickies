import { Stack, Flex, Button, Card, CardBody, Text, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { FaIcon } from '@/components/Elements/FaIcon';
import { CreateSticky } from '../components/CreateSticky';

export const Home = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <Stack spacing={4}>
        <Flex align={'center'} justify={'center'}>
          <Button onClick={() => disclosure.onOpen()} size="lg" colorScheme="blue" leftIcon={<FaIcon size="xl" icon="circle-plus" color="white" />}>
            新しい付箋
          </Button>
        </Flex>
        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Stack>

      <CreateSticky disclosure={disclosure}></CreateSticky>
    </>
  );
};

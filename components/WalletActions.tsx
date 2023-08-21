import React from 'react';
import { Button, VStack } from '@chakra-ui/react';

const WalletActions: React.FC = () => {
  return (
    <VStack spacing={4}>
      <Button colorScheme="teal">Send</Button>
      <Button colorScheme="blue">Receive</Button>
    </VStack>
  );
};

export default WalletActions;

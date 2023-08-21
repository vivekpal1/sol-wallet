import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import NetworkSelector from './NetworkSelector';

interface HeaderProps {
  onNetworkChange?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNetworkChange }) => {

  const handleNetworkChange = (value: string) => {
    if (onNetworkChange) {
      onNetworkChange(value);
    }
  };

  return (
    <Box bg="gray.700" color="white" px={4} py={2}>
      <Flex>
        <Box p="2">
          <Text fontSize="xl">Your DApp Name</Text>
        </Box>
        <Spacer />
        <Box>
          <NetworkSelector onChange={handleNetworkChange} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

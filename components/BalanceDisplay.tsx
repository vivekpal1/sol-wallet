import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

interface BalanceDisplayProps {
  solBalance: number;
  usdcBalance: number;
  solPrice: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ solBalance, usdcBalance, solPrice }) => {
  return (
    <Box bg="gray.700" color="white" p={4} borderRadius="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="sm" color="gray.400">SOL Balance</Text>
          <Text fontSize="lg">{solBalance.toFixed(2)} SOL</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.400">USDC Balance</Text>
          <Text fontSize="lg">${usdcBalance.toFixed(2)} USDC</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.400">Total Value</Text>
          <Text fontSize="lg">${(solPrice * solBalance + usdcBalance).toFixed(2)}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default BalanceDisplay;

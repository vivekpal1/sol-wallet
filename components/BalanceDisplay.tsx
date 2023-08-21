import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface BalanceDisplayProps {
  balance: number;

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <Box padding="1rem" borderRadius="lg" boxShadow="md">
      <Text fontWeight="bold">Balance:</Text>
      <Text>{balance} SOL</Text> {/* Replace SOL with your currency if different */}
    </Box>
  );
};

export default BalanceDisplay;

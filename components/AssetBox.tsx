import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

interface AssetProps {
  name: string;
  amount: number;
  icon: string;
}

const AssetBox: React.FC<AssetProps> = ({ name, amount, icon }) => {
  return (
    <Box padding="1rem" borderRadius="lg" boxShadow="md" d="flex" alignItems="center">
      <Image src={icon} boxSize="32px" marginRight="12px" />
      <Box>
        <Text fontWeight="bold">{name}</Text>
        <Text>{amount}</Text>
      </Box>
    </Box>
  );
};

export default AssetBox;

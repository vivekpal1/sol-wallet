import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

interface AssetBoxProps {
  assetIcon: string;
  assetName: string;
  assetBalance: number;
  usdValue: number;
}

const AssetBox: React.FC<AssetBoxProps> = ({ assetIcon, assetName, assetBalance, usdValue }) => {
  return (
    <Box bg="gray.700" color="white" p={4} borderRadius="md" mb={4} width="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image src={assetIcon} boxSize="40px" borderRadius="full" mr={4} />
          <Text fontSize="md">{assetName}</Text>
        </Flex>
        <Box>
          <Text fontSize="sm" color="gray.400">{assetBalance.toFixed(2)} {assetName}</Text>
          <Text fontSize="sm">${usdValue.toFixed(2)} USD</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AssetBox;

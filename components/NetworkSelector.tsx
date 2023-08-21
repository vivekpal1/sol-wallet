import React, { useState } from 'react';
import { Select, Box } from '@chakra-ui/react';

interface NetworkSelectorProps {
  onChange?: (value: string) => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ onChange }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>('mainnet');

  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedNetwork(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Box>
      <Select
        value={selectedNetwork}
        onChange={handleNetworkChange}
        width="200px"
      >
        <option value="mainnet">Mainnet</option>
        <option value="testnet">Testnet</option>
        <option value="devnet">Devnet</option>
      </Select>
    </Box>
  );
};

export default NetworkSelector;

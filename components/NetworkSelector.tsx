import React from 'react';
import { Select } from '@chakra-ui/react';

interface NetworkSelectorProps {
  network: string;
  changeNetwork: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ network, changeNetwork }) => {
  return (
    <Select 
        defaultValue={'mainnet-beta'} 
        width="160px" 
        height="42px" 
        textAlign={'center'} 
        value={network}
        onChange={changeNetwork}
      >
        <option value="mainnet-beta">mainnet-beta</option>
        <option value="devnet">devnet</option>
    </Select>
  );
};

export default NetworkSelector;

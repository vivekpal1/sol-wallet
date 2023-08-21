import React from 'react';
import { Flex, Select, IconButton } from '@chakra-ui/react'; 
import { SettingsIcon } from '@chakra-ui/icons';

interface HeaderProps {
  network: string;
  changeNetwork: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ network, changeNetwork, onOpen }) => {
  return (
    <Flex flexDir={'row'} justifyContent={'space-between'} alignItems="center">
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
      <IconButton 
        onClick={onOpen} 
        aria-label="Wallet Settings" 
        icon={<SettingsIcon fontSize="28px" />} 
        variant="ghost" 
        size="2xl" 
      />
    </Flex>
  );
};

export default Header;

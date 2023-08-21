import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Flex,
  Text,
  Divider,
  Button,
  Input,
  Code,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  accountMnemonic: string;
  solPrice: number;
  solBalance: number;
  usdcBalance: number;
  importAccountFromMnemonic: (mnemonic: string) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  accountMnemonic,
  solPrice,
  solBalance,
  usdcBalance,
  importAccountFromMnemonic
}) => {
  const [showSeed, setShowSeed] = useState(false);
  const [mnemonicToImport, setMnemonicToImport] = useState('');
  const [hasCopiedSeedLink, setHasCopiedSeedLink] = useState(false);

  const onCopySeedLink = () => {
    navigator.clipboard.writeText(accountMnemonic);
    setHasCopiedSeedLink(true);
    setTimeout(() => setHasCopiedSeedLink(false), 3000);  // reset copied state after 3 seconds
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Wallet Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack mb="24px" spacing={4}>
            <Flex width="100%" justifyContent="space-between" alignItems="center">
              <Text fontSize={'xl'}>Current Wallet</Text>
              <Text fontSize={'xl'} fontWeight={'600'}>
                ${(solPrice * solBalance + usdcBalance).toFixed(2)}
              </Text>
            </Flex>
            <Flex width="100%" justifyContent="center" alignItems="center">
              {showSeed ? (
                <Flex flexDirection={'column'} alignItems="center">
                  <Button colorScheme="yellow" variant="solid" width={'150px'} leftIcon={<WarningTwoIcon />} onClick={() => setShowSeed(false)}>
                    Hide Seed
                  </Button>
                  <Code my={4} padding={'20px'} fontSize="md" borderRadius={'2xl'}>
                    {accountMnemonic}
                  </Code>
                  <Button colorScheme="blue" variant="outline" onClick={onCopySeedLink}>
                    {hasCopiedSeedLink ? 'Copied' : 'Copy Link with Seed'}
                  </Button>
                </Flex>
              ) : (
                <Button colorScheme="yellow" variant="solid" leftIcon={<WarningTwoIcon />} onClick={() => setShowSeed(true)}>
                  Reveal Seed
                </Button>
              )}
            </Flex>
            <Divider />
            <Text fontSize={'xl'}>Import / Generate Account</Text>

            <Input mt={2} placeholder="Seed Phrase" onChange={(event: any) => setMnemonicToImport(event.target.value)} />
            <Button colorScheme="blue" variant="outline" onClick={() => importAccountFromMnemonic(mnemonicToImport)}>
              Import
            </Button>
            <Divider />
            <Button colorScheme="red" variant="solid" onClick={onClose}>  {/* assuming you want to close the modal on generating a new account */}
              Generate new account
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WalletModal;

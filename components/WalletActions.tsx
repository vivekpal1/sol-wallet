import { Flex, Button, Input, Divider, VStack, Code, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

interface WalletActionsProps {
  showSeed: boolean;
  accountMnemonic: string;
  mnemonicToImport: string;
  onCopySeedLink: () => void;
  hasCopiedSeedLink: boolean;
  setShowSeed: (state: boolean) => void;
  setMnemonicToImport: (mnemonic: string) => void;
  importAccountFromMnemonic: (mnemonic: string) => void;
  onCfmOpen: () => void;
}

const WalletActions: React.FC<WalletActionsProps> = (props) => {
  const { 
    showSeed, accountMnemonic, mnemonicToImport, onCopySeedLink, hasCopiedSeedLink,
    setShowSeed, setMnemonicToImport, importAccountFromMnemonic, onCfmOpen 
  } = props;

  return (
    <VStack mb="24px" spacing={4}>
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
      <Button colorScheme="red" variant="solid" onClick={onCfmOpen}>
        Generate new account
      </Button>
    </VStack>
  );
};

export default WalletActions;

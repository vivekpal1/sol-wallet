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
  Button,
  Input,
  Select,
} from '@chakra-ui/react';

interface SolanaPayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentInitiated: (asset: string, amount: number, destination: string) => void;
}

const SolanaPayModal: React.FC<SolanaPayModalProps> = ({
  isOpen,
  onClose,
  onPaymentInitiated,
}) => {
  const [asset, setAsset] = useState('SOL');  // default asset
  const [amount, setAmount] = useState('');
  const [destination, setDestination] = useState('');

  const handlePayment = () => {
    if (amount && destination) {
      onPaymentInitiated(asset, parseFloat(amount), destination);
      onClose();
    } else {
      alert("Please provide valid payment details!");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Initiate Payment on Solana</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Flex width="100%" flexDirection="column">
              <Text mb={2}>Select Asset:</Text>
              <Select value={asset} onChange={(e) => setAsset(e.target.value)}>
                <option value="SOL">SOL</option>
                <option value="USDC">USDC</option>
                {/* Add other Solana tokens as needed */}
              </Select>
            </Flex>

            <Flex width="100%" flexDirection="column">
              <Text mb={2}>Amount:</Text>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Flex>

            <Flex width="100%" flexDirection="column">
              <Text mb={2}>Destination Address:</Text>
              <Input
                placeholder="Enter Solana address"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Flex>

            <Button colorScheme="blue" onClick={handlePayment}>
              Initiate Payment
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SolanaPayModal;

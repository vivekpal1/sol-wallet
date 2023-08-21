import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import QrReader from 'react-qr-reader';

interface ScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanComplete: (data: string | null) => void;
}

const ScannerModal: React.FC<ScannerModalProps> = ({ isOpen, onClose, onScanComplete }) => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data);
      onScanComplete(data);
    }
  }

  const handleError = (err: any) => {
    console.error(err);
    alert("An error occurred while scanning. Please try again.");
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Scan QR Code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
            {scanResult && (
              <>
                <Text>Scanned Data:</Text>
                <Text fontWeight="bold">{scanResult}</Text>
              </>
            )}
            <Button onClick={onClose}>Close Scanner</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ScannerModal;

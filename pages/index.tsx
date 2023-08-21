import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Header, NetworkSelector, BalanceDisplay, WalletActions, AssetBox } from '../components';
import { WalletModal, ScannerModal, ConfirmationModal, SolanaPayModal } from '../components/Modals';

const App: React.FC = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [isScannerModalOpen, setScannerModalOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isSolanaPayModalOpen, setSolanaPayModalOpen] = useState(false);

  const [solBalance, setSolBalance] = useState<number>(0);
  const [usdcBalance, setUsdcBalance] = useState<number>(0);
  const [solPrice, setSolPrice] = useState<number>(0);

  return (
    <ChakraProvider>
      <Header />

      <NetworkSelector />

      <BalanceDisplay solBalance={solBalance} usdcBalance={usdcBalance} solPrice={solPrice} />
      
      <WalletActions onOpenWalletModal={() => setWalletModalOpen(true)} />

      <AssetBox />

      {/* Modals */}
      <WalletModal isOpen={isWalletModalOpen} onClose={() => setWalletModalOpen(false)} />
      <ScannerModal isOpen={isScannerModalOpen} onClose={() => setScannerModalOpen(false)} />
      <ConfirmationModal isOpen={isConfirmationModalOpen} onClose={() => setConfirmationModalOpen(false)} />
      <SolanaPayModal isOpen={isSolanaPayModalOpen} onClose={() => setSolanaPayModalOpen(false)} />

    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

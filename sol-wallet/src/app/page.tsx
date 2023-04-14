"use client";

import { FC, useEffect } from 'react';
import * as multichainWallet from 'multichain-crypto-wallet';

const CreateWalletPage: FC = () => {
  const createWallet = async () => {
    try {
      const wallet = multichainWallet.createWallet({
        derivationPath: "",
        network: 'solana',
      });
      console.log('Wallet created', wallet.address);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const button = document.querySelector('#createWalletButton');
    button.addEventListener('click', createWallet);
    return () => {
      button.removeEventListener('click', createWallet);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Wallet</h1>
        <button id="createWalletButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create Wallet
        </button>
      </div>
    </div>
  );
};

export default CreateWalletPage;

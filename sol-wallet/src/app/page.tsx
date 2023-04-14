import { FC } from 'react';
import { Wallet } from 'multichain-crypto-wallet';
import { useClient } from 'blitz';

const CreateWalletPage: FC = () => {
  const client = useClient();

  const createWallet = async () => {
    try {
      const wallet = await Wallet.create(client, 'solana');
      console.log('Wallet created', wallet.address);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Wallet</h1>
        <button onClick={createWallet} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Create Wallet
        </button>
      </div>
    </div>
  )
}

export default CreateWalletPage;

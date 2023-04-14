import { FC, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import Link from 'next/link'


const HomePage: FC = () => {
  const [balance, setBalance] = useState<number | null>(null);

  // Initialize a connection to a Solana node
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Define the address of the wallet you want to check the balance for
  const publicKey = new PublicKey('YOUR_WALLET_ADDRESS');

  // Use the connection to get the balance of the wallet
  connection.getBalance(publicKey).then((value) => {
    setBalance(value / 1000000000); // Convert from lamports to SOL and update state
  });

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">My Solana Wallet</h1>
        <p className="text-gray-600 mb-4">
          Welcome to My Solana Wallet! Use the navigation links to manage your Solana account.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" className="text-blue-500 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:text-blue-600">
                Transactions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:text-blue-600">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Wallet Balance</h2>
          {balance !== null ? (
            <p className="text-gray-600">{balance} SOL</p>
          ) : (
            <p className="text-gray-600">Loading balance...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

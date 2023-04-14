import { FC, useState } from 'react';
import { useClient } from 'blitz';
import { Connection, SystemProgram } from '@solana/web3.js';

const CreateWalletPage: FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const client = useClient();

  const createWallet = async () => {
    try {
      const connection = new Connection("https://api.devnet.solana.com");
      const payerAccount = await connection.requestAirdrop(walletAddress, 1000000000);
      const createAccountIx = SystemProgram.createAccount({
        fromPubkey: payerAccount.publicKey,
        newAccountPubkey: walletAddress,
        lamports: 1000000000,
        space: 0,
        programId: new PublicKey("11111111111111111111111111111111")
      });
      const tx = await client.solana.signAndSendTransaction(connection, createAccountIx, payerAccount);
      console.log("Wallet created", tx);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Create Wallet</h1>
      <input type="text" value={walletAddress} onChange={e => setWalletAddress(e.target.value)} />
      <button onClick={createWallet}>Create Wallet</button>
    </div>
  )
}

export default CreateWalletPage;

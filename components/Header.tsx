import React from 'react';
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <title>USDC Wallet</title>
        <meta name="description" content="Extremely hot burner wallet for USDC" />
        <link rel="apple-touch-icon" href="ios.png" />
      </Head>
    </>
  );
};

export default Header;

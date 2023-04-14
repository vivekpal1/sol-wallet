// pages/dashboard.tsx
import { FC } from 'react'

const DashboardPage: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold">My Solana Wallet</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Transactions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Account Balance</h3>
              <p className="text-gray-600">123.45 SOL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Recent Transactions</h3>
              <ul>
                <li className="text-gray-600 mb-1">
                  Sent 1.23 SOL to john.doe@gmail.com
                </li>
                <li className="text-gray-600 mb-1">
                  Received 4.56 SOL from jane.doe@gmail.com
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Assets</h3>
              <ul>
                <li className="text-gray-600 mb-1">
                  10.00 SOL
                </li>
                <li className="text-gray-600 mb-1">
                  100.00 USDC
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage

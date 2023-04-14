import { FC } from 'react'

const DashboardPage: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Welcome to your Solana Wallet Dashboard! Here, you can manage your account and view your transactions.
        </p>
      </div>
    </div>
  )
}

export default DashboardPage
import { FC } from 'react'

const HomePage: FC = () => {
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
              <a href="#" className="text-blue-500 hover:text-blue-600">
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
    </div>
  )
}

export default HomePage

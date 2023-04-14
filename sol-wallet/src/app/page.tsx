// pages/index.tsx
import { FC } from 'react'
import Link from 'next/link'

const HomePage: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold">My Solana Wallet</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard">
                  <a className="text-blue-500 hover:text-blue-600">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/transactions">
                  <a className="text-gray-500 hover:text-gray-600">
                    Transactions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <a className="text-gray-500 hover:text-gray-600">
                    Settings
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to My Solana Wallet
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            eget sagittis turpis. Aenean tristique ante at velit hendrerit, id
            aliquam tortor vestibulum. Sed ac velit nulla. Suspendisse vitae
            elit elit. Nullam euismod est sit amet orci luctus, sit amet
            aliquet purus pulvinar.{' '}
          </p>
          <Link href="/dashboard">
            <a className="text-blue-500 hover:text-blue-600">
              Go to Dashboard
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default HomePage

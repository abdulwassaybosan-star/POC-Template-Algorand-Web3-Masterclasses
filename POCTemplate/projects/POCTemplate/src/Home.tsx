// src/components/Home.tsx
import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false)
  const [openPaymentModal, setOpenPaymentModal] = useState(false)
  const [openMintModal, setOpenMintModal] = useState(false)
  const [openTokenModal, setOpenTokenModal] = useState(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 flex flex-col">
      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-pink-600">DecentraVerse ✨</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A decentralized Patreon for writers & artists. Support your favorite creators,
          unlock exclusive content, and own your subscription.
        </p>
      </header>

      {/* Actions Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="grid gap-6 w-full max-w-2xl">
          {/* Connect Wallet */}
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-4">
              Start your journey by connecting your Algorand wallet.
            </p>
            <button
              className="w-full btn btn-primary"
              onClick={() => setOpenWalletModal(true)}
            >
              Connect Wallet
            </button>
          </div>

          {activeAddress && (
            <>
              {/* Send Tip */}
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold mb-2">Send a Tip 💰</h2>
                <p className="text-gray-600 mb-4">
                  Support your favorite creator with a quick tip.
                </p>
                <button
                  className="w-full btn btn-accent"
                  onClick={() => setOpenPaymentModal(true)}
                >
                  Send Tip
                </button>
              </div>

              {/* Mint NFT */}
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold mb-2">Mint Support Pass NFT 🎟️</h2>
                <p className="text-gray-600 mb-4">
                  Claim your exclusive supporter NFT as proof of support.
                </p>
                <button
                  className="w-full btn btn-secondary"
                  onClick={() => setOpenMintModal(true)}
                >
                  Mint NFT
                </button>
              </div>

              {/* Create Token */}
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold mb-2">Create Your Own Token</h2>
                <p className="text-gray-600 mb-4">
                  Launch a custom token (ASA) to engage your community.
                </p>
                <button
                  className="w-full btn btn-info"
                  onClick={() => setOpenTokenModal(true)}
                >
                  Create Token
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        ✨ Built with Algorand & Web3 ✨
      </footer>

      {/* Modals */}
      <ConnectWallet
        openModal={openWalletModal}
        closeModal={() => setOpenWalletModal(false)}
      />
      <Transact
        openModal={openPaymentModal}
        setModalState={setOpenPaymentModal}
      />
      <NFTmint
        openModal={openMintModal}
        setModalState={setOpenMintModal}
      />
      <Tokenmint
        openModal={openTokenModal}
        setModalState={setOpenTokenModal}
      />
    </div>
  )
}

export default Home

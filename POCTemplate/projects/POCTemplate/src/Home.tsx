// src/components/Home.tsx
import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'

interface HomeProps {}

interface Creator {
  name: string
  bio: string
  image: string
  wallet: string
}

const creators: Creator[] = [
  {
    name: "MrBeast",
    bio: "American YouTuber, media personality, and philanthropist",
    image: "https://www.pngall.com/wp-content/uploads/14/Mr-Beast-PNG-Images-HD.png",
    wallet: "WALLET_ADDRESS_1",
  },
  {
    name: "J.K. Rowling",
    bio: "Author of the Harry Potter series, exploring magical worlds.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rMvqJzvHvyjq6YDWajTa-lUcRfwAuUkJmQ&s",
    wallet: "WALLET_ADDRESS_2",
  },
  {
    name: "Sarah Khan",
    bio: "Pakistani actress known for her TV roles in Urdu series.",
    image: "https://farahandfatima.com/cdn/shop/products/20220508_202433_0000.png?v=1652027379",
    wallet: "WALLET_ADDRESS_3",
  },
  {
    name: "Hania Amir",
    bio: "Pakistani actress in Urdu television and films.",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9s7cAAlBB3kuakBZ3iTmwh_hODYhL-inxfhVs9QRJIx5Yy3lwHfHhfuwbe7BaRPHj01OqTgpFzmr-uTaGtdCPr7EIt8wDp1ob9QiILw",
    wallet: "WALLET_ADDRESS_4",
  },
  {
    name: "Saif Ali Khan",
    bio: "Indian film actor and producer in Bollywood cinema.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0YvknF2yt4M0v8vJ7fGUoyx7_cr1u_mJDMjn1z59rHWpk80OUlx3jaQqCfUSt39fgJ2lFihU9sV6Q4yDfJ3nmY9Zec-YQrvwOTq7RgHw",
    wallet: "WALLET_ADDRESS_5",
  },
  // New 5 creators
  {
    name: "Taylor Swift",
    bio: "American singer-songwriter, known for her narrative songwriting and global pop hits.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHKc63rzsEqbaqbEiNZbokAqAJBEjcPrWAnsZnd4wl7HHyLR3Ddj69dLJQFQNJtn3dBFdXJpRtQcO3ZcMMCPuzV2ZFxxqB8FP1PmgcLg",
    wallet: "WALLET_ADDRESS_6",
  },
  {
    name: "Ed Sheeran",
    bio: "English singer-songwriter known for his soulful voice and hit singles around the globe.",
    image: "https://m.media-amazon.com/images/M/MV5BODI4NTkxOTkxMV5BMl5BanBnXkFtZTgwMzE0MDEzMTE@._V1_FMjpg_UX1000_.jpg",
    wallet: "WALLET_ADDRESS_7",
  },
  {
    name: "Drake",
    bio: "Canadian rapper, singer, and actor, one of the world's best-selling music artists.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8mIGIKONJtXjHVRvWi1-K0rIiW8KjWpc2gtroCxrUab-P7bzgSXnrAOIsDSMwXfaO1_3c5vtHrlplEwUDuAnnJggr01SOeUorWwW67k",
    wallet: "WALLET_ADDRESS_8",
  },
  {
    name: "Rihanna",
    bio: "Barbadian singer, actress, and businesswoman, known for her versatile music and Fenty brand.",
    image: "https://imageio.forbes.com/specials-images/imageserve/67606f22d9918d6930c26d22/0x0.jpg?format=jpg&crop=1549,1552,x551,y201,safe&height=416&width=416&fit=bounds",
    wallet: "WALLET_ADDRESS_9",
  },
  {
    name: "Atif Aslam",
    bio: "Pakistani playback singer and actor, renowned for soulful ballads and Bollywood hits.",
    image: "https://pbs.twimg.com/media/CQcIWk7WUAER78v.jpg:large",
    wallet: "WALLET_ADDRESS_10",
  },
]

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false)
  const [openPaymentModal, setOpenPaymentModal] = useState(false)
  const [openMintModal, setOpenMintModal] = useState(false)
  const [openTokenModal, setOpenTokenModal] = useState(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-orange-100 flex flex-col font-sans">
      {/* Hero Section */}
      <header className="relative text-center py-24 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Welcome to <span className="text-yellow-200 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">DecentraVerse ✨</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A decentralized Patreon for writers & artists. <br />
            Support your favorite creators, unlock exclusive content, <br />
            and own your subscription through Web3.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 animate-pulse rounded-xl"></div>
      </header>

      {/* Support Banner */}
      <section className="bg-white rounded-2xl shadow-lg mx-6 -mt-16 p-6 text-center relative z-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Support Your Favorite Creator ❤️</h2>
        <p className="text-gray-600">
          Empower creators directly with tips, NFTs, and tokens. <br />
          Be part of their journey and own your support.
        </p>
      </section>

      {/* Actions Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="grid gap-8 w-full max-w-3xl md:grid-cols-2">
          {/* Connect Wallet */}
          <div className="p-6 rounded-2xl shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between">Connect Wallet <span>🔗</span></h2>
            <p className="text-gray-700 mb-4">Start your journey by connecting your Algorand wallet.</p>
            <button
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold hover:from-pink-700 hover:to-pink-600 transition"
              onClick={() => setOpenWalletModal(true)}
            >
              Connect Wallet
            </button>
          </div>

          {activeAddress && (
            <>
              {/* Send Tip */}
              <div className="p-6 rounded-2xl shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between">Send a Tip 💰</h2>
                <p className="text-gray-700 mb-4">Support your favorite creator with a quick tip.</p>
                <button
                  className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold hover:from-purple-700 hover:to-purple-600 transition"
                  onClick={() => setOpenPaymentModal(true)}
                >
                  Send Tip
                </button>
              </div>

              {/* Mint NFT */}
              <div className="p-6 rounded-2xl shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between">Mint Support Pass 🎟️</h2>
                <p className="text-gray-700 mb-4">Claim your exclusive supporter NFT as proof of support.</p>
                <button
                  className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold hover:from-orange-600 hover:to-orange-500 transition"
                  onClick={() => setOpenMintModal(true)}
                >
                  Mint NFT
                </button>
              </div>

              {/* Create Token */}
              <div className="p-6 rounded-2xl shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between">Create Your Token 🚀</h2>
                <p className="text-gray-700 mb-4">Launch a custom ASA token to engage and reward your community.</p>
                <button
                  className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold hover:from-indigo-700 hover:to-indigo-600 transition"
                  onClick={() => setOpenTokenModal(true)}
                >
                  Create Token
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Creators Carousel */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Creators</h2>

        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory px-4 py-4 scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-100">
          {creators.map((creator, idx) => (
            <div
              key={idx}
              className="flex-none w-48 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg text-center snap-center hover:shadow-2xl hover:scale-105 transition transform"
            >
              <img src={creator.image} alt={creator.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover ring-2 ring-pink-400" />
              <h3 className="text-lg font-semibold">{creator.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{creator.bio}</p>
              <button className="px-3 py-1 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold hover:from-pink-700 hover:to-pink-600 transition">
                Support
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 bg-white shadow-inner">
        ✨ Built with Algorand & Web3 | Inspired by Patreon ✨
      </footer>

      {/* Modals */}
      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
    </div>
  )
}

export default Home

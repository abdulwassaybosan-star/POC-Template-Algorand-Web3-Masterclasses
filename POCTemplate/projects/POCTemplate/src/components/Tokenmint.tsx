// src/components/Tokenmint.tsx
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { useWallet } from '@txnlab/use-wallet-react'
import { useSnackbar } from 'notistack'
import { useMemo, useState } from 'react'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

interface TokenMintProps {
  openModal: boolean
  setModalState: (value: boolean) => void
}

const Tokenmint = ({ openModal, setModalState }: TokenMintProps) => {
  const [assetName, setAssetName] = useState<string>('MasterPass Token')
  const [unitName, setUnitName] = useState<string>('MPT')
  const [total, setTotal] = useState<string>('1000') // human-readable total
  const [decimals, setDecimals] = useState<string>('0') // beginner-friendly

  const [loading, setLoading] = useState<boolean>(false)

  const { transactionSigner, activeAddress } = useWallet()
  const { enqueueSnackbar } = useSnackbar()

  const algodConfig = getAlgodConfigFromViteEnvironment()
  const algorand = useMemo(() => AlgorandClient.fromConfig({ algodConfig }), [algodConfig])

  const handleMintToken = async () => {
    if (!transactionSigner || !activeAddress) {
      enqueueSnackbar('Please connect your wallet first.', { variant: 'warning' })
      return
    }

    // Basic validation
    if (!assetName || !unitName) {
      enqueueSnackbar('Please enter an asset name and unit name.', { variant: 'warning' })
      return
    }
    if (!/^\d+$/.test(total)) {
      enqueueSnackbar('Total supply must be a whole number.', { variant: 'warning' })
      return
    }
    if (!/^\d+$/.test(decimals)) {
      enqueueSnackbar('Decimals must be a whole number.', { variant: 'warning' })
      return
    }

    try {
      setLoading(true)
      enqueueSnackbar('Creating token...', { variant: 'info' })

      const totalBig = BigInt(total)
      const decimalsBig = BigInt(decimals)

      // Convert to on-chain total
      const onChainTotal = totalBig * 10n ** decimalsBig

      const createResult = await algorand.send.assetCreate({
        sender: activeAddress,
        signer: transactionSigner,
        total: onChainTotal,
        decimals: Number(decimalsBig),
        assetName,
        unitName,
        defaultFrozen: false,
      })

      enqueueSnackbar(`✅ Token Created! ASA ID: ${createResult.assetId}`, { variant: 'success' })

      // Reset form
      setAssetName('MasterPass Token')
      setUnitName('MPT')
      setTotal('1000')
      setDecimals('0')
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Failed to create token', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <dialog id="token_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Create a MasterPass Token (ASA)</h3>
        <p className="text-sm text-gray-600 mb-4">
          This creates a standard fungible token on Algorand TestNet. No smart contract required.
        </p>

        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Asset name (e.g. MasterPass Token)"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Unit name (e.g. MPT)"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
          />
          <input
            type="number"
            min={1}
            className="input input-bordered w-full"
            placeholder="Total supply (e.g. 1000)"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <input
            type="number"
            min={0}
            max={19}
            className="input input-bordered w-full"
            placeholder="Decimals (0 for whole tokens)"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            On-chain total = <code>total × 10^decimals</code>.  
            For beginners, leaving decimals at 0 is simplest.
          </p>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => setModalState(false)}>Close</button>
          <button
            type="button"
            className={`btn btn-success ${assetName && unitName && total ? '' : 'btn-disabled'}`}
            onClick={handleMintToken}
          >
            {loading ? <span className="loading loading-spinner" /> : 'Create Token'}
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default Tokenmint

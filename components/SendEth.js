import { useAccount, useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { ethers } from 'ethers'

export default function SendEth(props) {
    const { amount } = props
    const { config } = usePrepareSendTransaction({
        request: {
            to: 'byldr.eth',
            value: ethers.utils.parseEther( amount || '0.01')
        }
    })
    const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)
    return (<>
        <button className="bg-blue-500 p-4 rounded-lg" disabled={!sendTransaction} onClick={() => sendTransaction?.()}>Send {amount} ETH</button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </>)
}
import { ethers } from 'ethers'
import { useAccount, erc20ABI, useContractWrite, usePrepareContractWrite } from 'wagmi'

export default function SendUSDC(props) {
    const { amount } = props
    const { address } = useAccount()

    const { config } = usePrepareContractWrite({
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        abi: erc20ABI,
        functionName: 'transfer',
        args: ['byldr.eth', ethers.utils.parseUnits(amount || '1', 6)],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return (
        <div>
            <button className="bg-blue-500 rounded-lg p-4 mt-2" disabled={!write} onClick={() => write?.()}>
                Send {amount} USDC
            </button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div>
    )
}
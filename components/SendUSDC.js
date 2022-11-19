import { useState } from 'react';
import { ethers } from 'ethers'
import { erc20ABI, useContractWrite, usePrepareContractWrite } from 'wagmi'

export default function SendUSDC() {
    const [amount, setAmount] = useState('10')

    const { config } = usePrepareContractWrite({
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        abi: erc20ABI,
        functionName: 'transfer',
        args: ['byldr.eth', ethers.utils.parseUnits(amount || '0', 6)],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)
    const validPattern = "^[0-9]*\.?[0-9]{0,4}$"
    const isValidInput = (amount) => {
        return RegExp(validPattern).test(amount)
    }

    return (
        <div>
            <input className="p-4 rounded-lg mr-4 " type="text" pattern={validPattern} onChange={(e) => {
                if (isValidInput(e.target.value)){
                    if(e.target.value == ".")
                        setAmount("0.")
                    else {
                        setAmount(e.target.value)
                    }
                }
            }} value={amount} />
            <button className="bg-blue-500 rounded-lg p-4 mt-2 cursor-pointer disabled:bg-gray-400 min-w-[11em]" disabled={!write} onClick={() => write?.()}>
                Send {amount} USDC
            </button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div>
    )
}
import { useState } from 'react';   
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { ethers } from 'ethers'

export default function SendEth() {
    const [amount, setAmount] = useState('0.01')
    const { config } = usePrepareSendTransaction({
        request: {
            to: 'byldr.eth',
            value: ethers.utils.parseEther(amount || '0.01')
        }
    })
    const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)
    const validPattern="^[0-9]*\.?[0-9]{0,4}$" 
    const isValidInput = (amount) => {
        return RegExp(validPattern).test(amount)
    }

    return (<>
        <input className="p-4 rounded-lg mr-4 " type="text" pattern={validPattern} onChange={(e) => {
            if (isValidInput(e.target.value)){
                if(e.target.value == ".")
                    setAmount("0.")
                else {
                    setAmount(e.target.value)
                }
            }

        }} value={amount} />
        <button className="bg-blue-500 p-4 rounded-lg disabled:bg-gray-400 min-w-[11em]"
            disabled={!sendTransaction}
            onClick={() => sendTransaction?.()}>
                Send {amount} ETH
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </>)
}
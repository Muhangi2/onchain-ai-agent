import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains'

declare global {
  interface Window {
    ethereum: any;
  }
}

 
export  function createPulicWalletClient(){
    const account=privateKeyToAccount(process.env.PRIVATE_API_KEY as `0x${string}`)
    return createWalletClient({
        account,
        chain: baseSepolia,
        transport: http()
    })
}


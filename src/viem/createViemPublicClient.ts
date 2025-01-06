import { createPublicClient, http } from 'viem'
import { baseSepolia } from 'viem/chains'

export function baseSeporiaPublicClient() {
    return createPublicClient({
        chain: baseSepolia,
        transport: http(),
    })
}


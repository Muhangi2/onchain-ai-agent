import { Address } from "viem";
import { baseSeporiaPublicClient } from "../viem/createViemPublicClient.js";
import { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

interface GetBalanceArgs {
    wallet: Address;
}
export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'get_balance',
            description: 'Get the balance of a wallet',
            parameters: {
                type: 'object',
                properties: {
                    wallet: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The wallet address to get the balance of'
                    }
                },
                required: ['wallet']
            }
        }
    },
    handler: async ({ wallet }) => {
        const client = baseSeporiaPublicClient();
        const balance = await client.getBalance({ address: wallet });
        return formatEther(balance);
    }
}
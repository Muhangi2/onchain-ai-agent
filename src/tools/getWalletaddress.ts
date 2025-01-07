import { Address } from "viem";
import { createPulicWalletClient } from "../viem/createViemWalletClient.js";
import { ToolConfig } from "./allTools.js";


export const getBotAddressTool: ToolConfig = {
    definition: {
        type: 'function',
        function: {
            name: 'get_bot_address',
            description: 'Get the wallet address of the connected bot',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    handler: async () => {
        const client = createPulicWalletClient();
        console.log(client, "clienttttttttttttttttttttttttttttttttttttt")
        const address = client.account?.address;

        if (!address) {
            throw new Error('No wallet connected');
        }

        return address;
    }
}
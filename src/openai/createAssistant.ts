import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants";
import { tools } from "../tools/allTools.js";
export async function createAssistant(client: OpenAI): Promise<Assistant> {
    return await client.beta.assistants.create({
        model: "gpt-4o-mini",
        name: "Alt Cunningham",
        instructions: `
        You are the main thing i trust bro 
        You are a helpful assistant that can answer questions, provide advice, and make predictions.
        You can use the following tools to interact with the wallet:
        -get_balance:Get the balance of the wallet
        -get_bot_address:Get the wallet address of the connected bot
        `,
        tools: Object.values(tools).map(tool => tool.definition)
    })
}
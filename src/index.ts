import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant.js";
import { createThread } from "./openai/createThread.js";
import { createRun } from "./openai/createRun.js";
import { performRun } from "./openai/performRun.js";
import "dotenv/config";
async function main() {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const message = "Hello ,can you get my wallet balance? My wallet address  is 0xC68E81bb5Eed8d1be9F5F6F729721835D7370888 "
    const assistant = await createAssistant(openai);
    const thread = await createThread(openai, message);
    const run = await createRun(openai, thread, assistant.id);
    const result = await performRun(run, openai, thread)

    console.log(result)

}
main();
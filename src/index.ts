import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant.js";
import { createThread } from "./openai/createThread.js";
import { createRun } from "./openai/createRun.js";
import { performRun } from "./openai/performRun.js";
async function main() {
    const openai = new OpenAI({
        apiKey: "YOUR_OPENAI_API_KEY"
    });

    const message = "Hello ,Iam Muahngi Elioda"
    const assistant = await createAssistant(openai);
    const thread = await createThread(openai, message);
    const run = await createRun(openai, thread, assistant.id);
    const result = await performRun(run, openai, thread)

    
}
main();
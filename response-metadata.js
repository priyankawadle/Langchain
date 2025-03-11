import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

const openaiModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
  temperature: 0.9,
  maxTokens: 40
});

const response = await openaiModel.invoke(
  "Give me oerview of Shree Chatrapati shivaji Maharaj"
);

console.log("Prompt Token: ",response.usage_metadata.input_tokens);
console.log("Output Token: ",response.usage_metadata.output_tokens);
console.log("Total Token: ",response.usage_metadata.total_tokens)

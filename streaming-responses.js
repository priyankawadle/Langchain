import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

const openaiModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
});

const streamResponse = await openaiModel.stream(
  "Give me oerview of Shree Chatrapati shivaji Maharaj"
);

for await(const token of streamResponse){
    process.stdout.write(token.content)
}

// console.log(streamResponse.content);
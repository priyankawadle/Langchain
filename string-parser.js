import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers"
import "dotenv/config";

const openaiModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
  maxTokens: 30
});

const stringOutputParser = new StringOutputParser();

const response = await openaiModel.invoke(
  "Give me oerview of Shree Chatrapati shivaji Maharaj"
);

const parsed_response = await stringOutputParser.parse(response.content)

console.log("parsed_response: ", parsed_response );

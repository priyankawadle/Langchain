import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import "dotenv/config";

//Model
const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
});

//Promt Template
const templateString =
  "Please provide suggestions on a good names for {pet_animal} ";
const petNamePromt = PromptTemplate.fromTemplate(templateString);
console.log(petNamePromt)
//Output Parser
const stringOutputParser = new StringOutputParser();

//chain
const petChainName = petNamePromt.pipe(chatModel).pipe(stringOutputParser);

const response = await petChainName.invoke({
  pet_animal: "rabbit",
});
console.log(response);

import { HumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import fs from "node:fs/promises";
import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

//Model
const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4-turbo",
});

const hotdogImage = await fs.readFile("hotdog.jpg");
const base64Image = hotdogImage.toString("base64");


const multiModalPrompt = ChatPromptTemplate.fromMessages([
  ["system", "Tell me about items in image"],
  ["user", [{
        type: "image_url",
        image_url: "data:image/jpg;base64,{base64_image_1}",
  }]],

]);


const chain = multiModalPrompt.pipe(chatModel)
const response = await chain.invoke({
    base64_image_1: base64Image
})
console.log(response.content);

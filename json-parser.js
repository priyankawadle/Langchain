import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import "dotenv/config";

const openaiModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o",
  // maxTokens: 30
});

const jsonOutputParser = new JsonOutputParser();

const prompt = `Give me below json fields of book {title}
*title,
*author,
*yearpublished
`

const chatPrompt = ChatPromptTemplate.fromMessages([
    ["user",prompt]
])

const formattedPrompt = await chatPrompt.format({
    title:"Rich and poor dad"
})
const response = await openaiModel.invoke(formattedPrompt);

const parsed_response = await jsonOutputParser.parse(response.content)

console.log("parsed_response: ", parsed_response );

import { ChatPromptTemplate, FewShotChatMessagePromptTemplate } from "@langchain/core/prompts"

const exampleMessages = [
    {input:"Who is Prim Minister of India", output:"Narendra Modi"},
    {input:"What is capital of india",output:"New Delhi"},
    {input:"Who is President of india",output:"Droupadi Murmu"}
];

const examplePromptTemplates = ChatPromptTemplate.fromMessages([
    ["human","{input}"],
    ["ai","{output}"]
]);

const myFewShotPrompt = new FewShotChatMessagePromptTemplate({
    examplePrompt: examplePromptTemplates,
    examples: exampleMessages,
    inputVariables: []
});

const formattedPrompt = await myFewShotPrompt.format();

console.log(formattedPrompt)

const invokedPrompt = await myFewShotPrompt.invoke();

console.log(invokedPrompt)

const actualPrompt = ChatPromptTemplate.fromMessages([
    myFewShotPrompt
]);
const prompt = await actualPrompt.format();
console.log(prompt)
import {ChatPromptTemplate} from "@langchain/core/prompts"

const chatMessages = [
    ["system","You are {language} expert."],
    ["user","{question}"]
];

const chatPromt = ChatPromptTemplate.fromMessages(chatMessages);

const formattedPrompt = await chatPromt.format({
    language:"Python",
    question:"Who is PM of india"
})
console.log(formattedPrompt);

const invokePrompt = await chatPromt.invoke({
    language:"Python",
    question:"Who is PM of india"
})
console.log(invokePrompt,"tochatmessgaes:", invokePrompt.toChatMessages());
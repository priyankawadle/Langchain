import { PromptTemplate,PipelinePromptTemplate } from "@langchain/core/prompts"
import { ChatOpenAI} from "@langchain/openai"
import "dotenv/config";

const openaiModel = new ChatOpenAI({
    apikey: process.env.OPENAI_API_KEY,
    template: "gpt-o3-mini"
})

const personalityPrompt = PromptTemplate.fromTemplate("I am very interested to help other people.");

const topicPrompt = PromptTemplate.fromTemplate("I am interested in learning about {topic_name}\n");

const overviewPrompt = PromptTemplate.fromTemplate("Sure Here is quick overview of {topic_name}:{topic_overview}\n")

const questionPrompt = PromptTemplate.fromTemplate(`
    {personality},
    {question},
    {answer},
    Now can you tell me history of {new_topic}
    `);

const compositionPrompt = new PipelinePromptTemplate({
    finalPrompt: questionPrompt,
    pipelinePrompts:[
        {
            name:"personality",
            prompt: personalityPrompt
        },
        {
            name:"question",
            prompt: topicPrompt
        },
        {
            name:"answer",
            prompt: overviewPrompt
        }
    ]
})

// const prompt = await compositionPrompt.invoke({
//     topic_name: " Quantum Physics",
//     topic_overview: " This is study of very small item, where things get wired",
//     new_topic:" Shree Chatrapati Shivaji Maharaj"
// })

// console.log(prompt.value)

const chain = await compositionPrompt.pipe(openaiModel)
const resopnse = await chain.invoke({
    topic_name: " Quantum Physics",
    topic_overview: " This is study of very small item, where things get wired",
    new_topic:" Shree Chatrapati Shivaji Maharaj"
})
console.log(resopnse.content)
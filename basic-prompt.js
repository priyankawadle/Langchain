// Import the PromptTemplate module from LangChain, which allows us to create structured prompts
import { PromptTemplate } from "@langchain/core/prompts";

// Define a template string with a placeholder {country} that will be replaced dynamically
const templateString = "Who is the president of {country}?";

// Create a PromptTemplate instance using the predefined template string
const myPrompt = PromptTemplate.fromTemplate(templateString);

console.log(myPrompt)
// Expected Output: PromptTemplate {
//     lc_serializable: true,
//     lc_kwargs: {
//       inputVariables: [ 'country' ],
//       templateFormat: 'f-string',
//       template: 'Who is the president of {country}?'
//     },
//     lc_runnable: true,
//     name: undefined,
//     lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
//     inputVariables: [ 'country' ],
//     outputParser: undefined,
//     partialVariables: undefined,
//     metadata: undefined,
//     tags: undefined,
//     templateFormat: 'f-string',
//     template: 'Who is the president of {country}?',
//     validateTemplate: true,
//     additionalContentFields: undefined
//   }

// Format the prompt by replacing the {country} placeholder with "India"
// The .format() method returns the fully formatted prompt as a string
console.log(await myPrompt.format({
    country: "India"
})); 
// Expected Output: "Who is the president of India?"

// Invoke the prompt with "India" as the country
// The .invoke() method is similar to .format(), but it supports LangChain's advanced processing
console.log(await myPrompt.invoke({
    country: "India"
})); 
// Expected Output: "StringPromptValue {
//   lc_serializable: true,
//   lc_kwargs: { value: 'who is the president of India' },
//   lc_namespace: [ 'langchain_core', 'prompt_values' ],
//   value: 'who is the president of India'
// }"

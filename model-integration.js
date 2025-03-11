//temperature: Definition: Adjusts how random or creative the model's responses are.
// Range: 0.0 (most deterministic) to 2.0 (highly random).
// Default: Typically 0.7.

//topK: Definition: The model only considers the top K most likely words instead of all possible words.
// Range: 1 (very strict) to 40+ (more flexible).
// Effect:Lower topK (e.g., 10) → Less diverse but more accurate.
// Higher topK (e.g., 50) → More diverse but can become less coherent.

//topP: Definition: Instead of picking the top K words, it selects words whose cumulative probability adds up to P.
// Range: 0.0 to 1.0 (default 0.9).
// topP = 0.1 → Only considers the top 10% of likely words.
// topP = 0.9 → Considers 90% of likely words, making responses more creative.

//maxOutputToken: Definition: Limits the number of words/tokens in the output.
// Use Case: Prevents overly long responses or reduces cost.

//stop: Definition: The model stops generating text if it reaches a specific word or phrase.
// Use Case: Useful for structured responses or stopping at a delimiter (e.g., "END").
import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

const openaiModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "",
  temperature: "",
  maxTokens,
});

const resopnse = openaiModel.invoke("Transalte hello how are you? in hindi");

console.log(response);

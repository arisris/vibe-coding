import { env } from "$env/dynamic/private";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const cerebras = createOpenAICompatible({
  name: "cerebras",
  baseURL: "https://api.cerebras.ai/v1",
  apiKey: env.CEREBRAS_API_KEY,
});

// for unique naming to other constants the model must be underscore case
// the thinking model must be suffixed by _thinking indentifier

export const qwen_3_32b_thinking = cerebras("qwen-3-32b");
export const llama_3_3_70b = cerebras("llama-3.3-70b");

// export all models

export const allModel = {
  qwen_3_32b_thinking,
  llama_3_3_70b,
};
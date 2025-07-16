import { env } from "$env/dynamic/private";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

type LanguageModelV2Middleware = ReturnType<typeof extractReasoningMiddleware>;

const cerebras = createOpenAICompatible({
  name: "cerebras",
  baseURL: "https://api.cerebras.ai/v1",
  apiKey: env.CEREBRAS_API_KEY,
});

const gemini = createOpenAICompatible({
  name: "gemini",
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
  apiKey: env.GEMINI_API_KEY,
});

// for unique naming to other constants the model must be underscore case
// the thinking model must be suffixed by _thinking indentifier

const qwen_3_32b_thinking = cerebras("qwen-3-32b");
const llama_3_3_70b = cerebras("llama-3.3-70b");
const gemini_2_5_flash_lite = gemini("gemini-2.5-flash-lite-preview-06-17");

export const languageModels = {
  qwen_3_32b_thinking: wrapLanguageModel({
    model: qwen_3_32b_thinking,
    middleware: [
      extractReasoningMiddleware({
        tagName: "think",
      }),
    ],
  }),
  llama_3_3_70b,
  gemini_2_5_flash_lite,
};

export const aiProvider = customProvider({
  languageModels,
});

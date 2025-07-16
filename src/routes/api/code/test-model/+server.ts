import { llama_3_3_70b, allModel } from "$lib/server/ai-service";
import { generateText } from "ai";

const models = Object.entries(allModel);

export const GET = async (event) => {
  const model = event.url.searchParams.get("model") || "llama_3_3_70b";
  
  if (!models.find(([key]) => key === model)) {
    return new Response("Model not found", { status: 404 });
  }

  const result = await generateText({
    model: llama_3_3_70b,
    maxOutputTokens: 9000,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "Whao is prabowo subianto?",
      },
    ],
  });

  return new Response(result.text, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

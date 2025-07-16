import { languageModels, aiProvider } from "$lib/server/ai";
import { streamText } from "ai";

const models = Object.entries(languageModels);

export const GET = async ({ params: { id } }) => {
  if (!models.find(([key]) => key === id)) {
    return new Response("Model not found", { status: 404 });
  }
  console.log(`Using model: ${id}`);
  const result = streamText({
    model: aiProvider.languageModel(id),
    maxOutputTokens: 9000,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "Siapa prabowo subianto?",
      },
    ],
  });
  return result.toTextStreamResponse();
};

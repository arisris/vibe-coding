import { llama_3_3_70b } from "$lib/server/ai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = "You are a helpful coding assistant.";

// logic for chat stream based code fixed and code generation

export const POST = async ({ request }) => {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: llama_3_3_70b,
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...convertToModelMessages(messages),
    ],
    tools: {},
    activeTools: [],
    maxOutputTokens: 9000,
    // onChunk void
    async onChunk({ chunk }) {
      switch (chunk.type) {
      }
    },
    // onError void
    onError({ error }) {
      console.error(error);
    },
    // onFinish void
    onFinish({ sources, steps }) {
      console.log("finished");
    },
  });

  return result.toUIMessageStreamResponse();
};

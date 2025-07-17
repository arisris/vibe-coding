import { Daytona } from "@daytonaio/sdk";

const PORT = 3000;
const daytona = new Daytona({
  apiKey: "",
  apiUrl: "https://app.daytona.io/api",
});

const sandbox = await daytona.create({
  snapshot: "bun-alpine-05-1g",
  autoDeleteInterval: 1,
  public: true,
  envVars: {
    DEVELOPMENT: "true",
  },
});

const deleteSandbox = async () => {
  try {
    if (sandbox.state !== "destroyed") {
      await sandbox.delete();
    }
  } catch (e) {
  } finally {
    process.exit();
  }
};

process.on("SIGINT", deleteSandbox);
process.on("SIGTERM", deleteSandbox);
process.on("exit", deleteSandbox);

const fs = sandbox.fs,
  sp = sandbox.process;

const serverCode = `
const server = Bun.serve({
  port: ${PORT},
  fetch(req) {
    console.log("Request URL:", req.url)
    return new Response("Hello World!");
  }
})
console.log("Server started on: ", server.url.href)
`;
const code = new TextEncoder().encode(serverCode);
try {
  const sessionId = "bun-i";
  await fs.createFolder("/app", "755");
  await fs.uploadFile(Buffer.from(code), "/app/index.ts");

  await sp.createSession(sessionId);
  const cmd = await sp.executeSessionCommand(sessionId, {
    command: "bun /app/index.ts",
    runAsync: true,
  });
  const link = await sandbox.getPreviewLink(PORT);
  console.log(link.url);
  await sp.getSessionCommandLogs(sessionId, cmd.cmdId, (chunk) => {
    console.log(chunk);
  });
} catch (e) {
  console.error(e.message);
} finally {
  await deleteSandbox();
}

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    console.log("running hello world");
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  }
);

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

export const multiStepSlow = inngest.createFunction(
  {
    id: "multistep-slow",
    retries: 0,
  },
  { event: "test/multistep.slow" },
  async ({ step }) => {
    await step.run("short-1", () => {});
    await step.sleep("zzz", "5m");
    await step.run("short-2", () => {});
  }
);

export const multiStepFast = inngest.createFunction(
  {
    id: "multistep-fast",
    retries: 0,
  },
  { event: "test/multistep.fast" },
  async ({ step }) => {
    await step.run("step-1", () => {});
    await step.sleep("3-milliseconds", "3");
    await step.run("step-2", () => {});
    await step.sleep("3-milliseconds", "3");
    await step.run("step-3", () => {});
    await step.sleep("3-milliseconds", "3");
    await step.run("step-4", () => {});
  }
);

export const multiStepSleepless = inngest.createFunction(
  {
    id: "multistep-sleepless",
    retries: 0,
  },
  { event: "test/multistep.sleepless" },
  async ({ step }) => {
    await step.run("step-1", () => {});
    await step.run("step-2", () => {});
    await step.run("step-3", () => {});
    await step.run("step-4", () => {});
    await step.run("step-5", () => {});
    await step.run("step-6", () => {});
  }
);

export const muiltiStepParallel = inngest.createFunction(
  {
    id: "multistep-parallel",
    retries: 0,
  },
  { event: "test/multistep.parallel" },
  async ({ step }) => {
    await Promise.all([
      step.run("run", () => {}),
      step.sleep("sleep-1", "1s"),
      step.sleep("sleep-1", "1m"),
    ]);
  }
);

export const retrySteps = inngest.createFunction(
  {
    id: "multistep-retry",
  },
  { event: "test/multistep.retry" },
  async ({ step, attempt }) => {
    await step.sleep("sleep-1", "1s");

    await step.run("a", () => {
      if (attempt === 0) {
        throw new Error("no bueno");
      }
    });

    await step.sleep("sleep-1", "1m");
  }
);

export const future = inngest.createFunction(
  {
    id: "multistep-future-retry",
  },
  { event: "test/multistep.futureRetry" },
  async ({ step, attempt }) => {
    await step.sleep("sleep-1", "1s");

    await step.run("a", () => {
      if (attempt === 0) {
        throw new Error("no bueno");
      }
    });

    await step.sleep("sleep-1", "1m");
  }
);

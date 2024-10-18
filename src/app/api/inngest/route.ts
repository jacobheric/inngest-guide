import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import {
  future,
  helloWorld,
  muiltiStepParallel,
  multiStepFast,
  multiStepSleepless,
  multiStepSlow,
  retrySteps,
} from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    multiStepSlow,
    multiStepFast,
    multiStepSleepless,
    muiltiStepParallel,
    retrySteps,
    future,
  ],
});

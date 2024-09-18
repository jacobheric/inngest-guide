import {
  multiStepFast,
  multiStepSleepless,
  multiStepSlow,
  future,
  parallelSteps,
  retrySteps,
} from "@/inngest/functions";
import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    multiStepSlow,
    multiStepFast,
    multiStepSleepless,
    parallelSteps,
    retrySteps,
    future,
  ],
});

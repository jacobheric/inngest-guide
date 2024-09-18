import { inngest } from "@/inngest/client";

export default async function Send() {
  await inngest.send({
    name: "multistep-future-retry",
    ts: 1731783821000,
    data: {
      accountId: "test",
    },
    user: {
      external_id: "testId",
    },
  });
  return <>...event sent...</>;
}

import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

// Create a simple async Next.js API route handler
export async function GET() {
  // Send your event payload to Inngest
  await inngest.send({
    name: "test/hello.world",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.slow",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.fast",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.sleepless",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.parallel",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.retry",
    data: {
      email: "test@example.com",
    },
  });

  await inngest.send({
    name: "test/multistep.futureRetry",
    data: {
      email: "test@example.com",
    },
  });

  return NextResponse.json({ name: "Hello Inngest from Next!" });
}

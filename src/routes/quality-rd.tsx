import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quality-rd")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "capabilities" });
  },
});

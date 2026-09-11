import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/capabilities")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "capabilities" });
  },
});

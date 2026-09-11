import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "projects" });
  },
});

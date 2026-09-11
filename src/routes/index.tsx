import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sree Dakssnaa Aerospace & Defence | Engineering Precision" },
      {
        name: "description",
        content:
          "Sree Dakssnaa Aerospace & Defence India Pvt Ltd delivers engineering, manufacturing and integration solutions for aerospace and defence — precision machining, composites, fabrication, assembly and turnkey manufacturing.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}

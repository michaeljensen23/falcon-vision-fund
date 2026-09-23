import { createFileRoute } from "@tanstack/react-router";
import { FundBook } from "@/components/book/FundBook";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FundBook />;
}

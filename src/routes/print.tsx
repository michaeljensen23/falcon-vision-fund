import { createFileRoute } from "@tanstack/react-router";
import { PrintBook } from "@/components/book/FundBook";

export const Route = createFileRoute("/print")({ component: Print });

function Print() {
  return <PrintBook />;
}

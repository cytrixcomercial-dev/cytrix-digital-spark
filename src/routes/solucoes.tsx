import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes")({
  component: SolucoesLayout,
});

function SolucoesLayout() {
  return <Outlet />;
}

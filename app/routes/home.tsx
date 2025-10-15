import type { Route } from "./+types/home";
import FirstInvoice from "~/components/FirstInvoice";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Invoice Generator" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <FirstInvoice />;
}

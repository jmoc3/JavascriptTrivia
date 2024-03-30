import Providers from "./provider";
import { Header } from "@/components/Header";
import { PrincipalContainer } from "@/components/PrincipalContainer";

export default function Home() {
  return (
    <Providers>
      <Header />
      <main className="flex min-h-screen items-center justify-center p-24">
        <PrincipalContainer   />
      </main>
    </Providers>
  );
}

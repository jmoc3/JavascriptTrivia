import NextProviderComponent from "./providers/NextProvider";
import { Header } from "@/components/Header";
import { PrincipalContainer } from "@/components/PrincipalContainer";

export default function Home() {
  return (
    <NextProviderComponent>
        <Header />
        <main className="flex min-h-screen items-center justify-center p-24">
          <PrincipalContainer   />
        </main>
    </NextProviderComponent>
  );
}

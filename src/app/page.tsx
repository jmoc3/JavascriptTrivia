import { PrincipalContainer } from "./main/PrincipalContainer";
import Providers from "./provider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Providers>
        <PrincipalContainer />
      </Providers>
    </main>
  );
}

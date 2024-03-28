'use client'

import { PrincipalContainer } from "./main/PrincipalContainer";
import Providers from "./provider";

export default function Home() {
  return (
    <Providers>
      <main className="flex min-h-screen items-center justify-center p-24">

        <PrincipalContainer   />
        
        
      </main>
    </Providers>
  );
}

'use client'

import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Providers({children}: {children: React.ReactNode}){
  return(
    <NextUIProvider >
      <ThemeProvider attribute='class' defaultTheme='dark' themes={['light','dark','modern']}>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )}
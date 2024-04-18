'use client'

import { JavascriptLogo } from "@/assets/JavascriptLogo";
import { useQuestionStore } from "@/store/questions";
import { Game } from "./principalContainer/Game";
import { Progress } from "@nextui-org/react";
import { useSession } from "next-auth/react";


export const PrincipalContainer = () =>{

  const {questions, fetchQuestions} = useQuestionStore()
  const {data:session}=useSession()

  fetchQuestions(10)
  
  return (
    <div className="container flex flex-col items-center gap-16 ">
      <div className="stack flex gap-5">
        <JavascriptLogo />
        <h2 className="text-6xl text-white">Javascript Quiz</h2>
      </div>

      {questions.length == 0 ? <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      color="warning"
      className="w-2/4"
    />
 : <Game/>}
    </div>
  )
} 
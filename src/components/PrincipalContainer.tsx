'use client'

import { JavascriptLogo } from "@/assets/JavascriptLogo";
import { ButtonStart } from "./ButtonStart";
import { useQuestionStore } from "@/store/questions";
import { Game } from "./principalContainer/Game";


export const PrincipalContainer = () =>{
  const {questions} = useQuestionStore()
  
  return (
    <div className="container flex flex-col items-center gap-16 ">
      <div className="stack flex gap-5">
        <JavascriptLogo />
        <h2 className="text-6xl text-white">Javascript Quiz</h2>
      </div>

      {questions.length == 0 ? <ButtonStart /> : <Game/>}
    </div>
  )
} 
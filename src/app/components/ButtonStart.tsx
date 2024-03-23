'use client'

import { useQuestionStore } from "@/store/questions";
import {Button} from "@nextui-org/react";

export const ButtonStart = ():JSX.Element => {
  const {fetchQuestions} = useQuestionStore()
  return (
    <Button className='bg-red-500' onClick={()=>fetchQuestions(5)} >Empezar!</Button>
  )
}
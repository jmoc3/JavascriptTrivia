import { Question as QuestionType } from "@/types"

export const getBgColor = (info:QuestionType, index:number) => {

  const correct = '#095028'
  const incorrect = '#610726'
  const none = 'transparent'
    
  if(info.userSelectedAnswer==undefined) return none 
  if(index!=info.correctAnswer && index!=info.userSelectedAnswer) return none
  if(info.correctAnswer===index) return correct
  if(info.userSelectedAnswer===index) return incorrect

}
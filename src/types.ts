type Question = {
  id:number,
  question:string,
  code:string,
  answers:string[],
  correctAnswer:number,
  explanation:string,
  userSelectedAnswer?:number,
  isCorrectUserAnswer?:boolean
}

export type { Question }
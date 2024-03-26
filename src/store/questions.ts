import { create } from "zustand";
import type { Question } from "../types";


type State = {
  questions: Question[],
  currentQuestion: number,
  check:string[]
}

type Actions = {
  fetchQuestions: (limit:number) => void,
  selectAnswer: (questionId:number,answerIndex:number)=>void
  setCheck: (value:string) => void,
  goNextQuestion: ()=>void
}

export const useQuestionStore = create<State & Actions>((set,get)=>({
  questions: [],
  currentQuestion: 0,
  userSelect:[],
  check:[''],
  fetchQuestions: async(limit:number) => {
    const res = await (await fetch('http://localhost:3000/data.json')).json()   
    const questions = res.questions.sort(()=>Math.random() - .5).slice(0,limit)
    set({questions})
  },
  selectAnswer: (questionId:number,answerIndex:number) => {
    const {questions} = get()

    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(q=>q.id === questionId)
    const questionInfo = newQuestions[questionIndex]
    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
  
    newQuestions[questionIndex] = {
      ... questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer:answerIndex
    }

    set({questions:newQuestions})    
  },
  setCheck: (value:string) => set({check:[value]}),
  goNextQuestion: () => {
    const {currentQuestion, questions} = get()
    const nextQuestion = currentQuestion + 1

    if (nextQuestion > questions.length) return

    set({currentQuestion:nextQuestion})
  } 
}))  
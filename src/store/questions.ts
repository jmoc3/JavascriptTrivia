import { create } from "zustand";
import type { Question } from "../types";

type State = {
  questions: Question[],
  currentQuestion: number,
}

type Actions = {
  fetchQuestions: (limit:number) => void
}

export const useQuestionStore = create<State & Actions>((set)=>({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: async(limit:number) => {
    const res = await (await fetch('http://localhost:3000/data.json')).json()   
    const questions = res.questions.sort(()=>Math.random() - .5).slice(0,limit)
    set({questions})
  }
}))  
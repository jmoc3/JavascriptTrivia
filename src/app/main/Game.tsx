import { useQuestionStore } from "@/store/questions"
import type { Question as QuestionType } from "@/types"
import { Card, Listbox, ListboxItem, Button } from "@nextui-org/react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { GoChevronRight, GoCheck  } from "react-icons/go";
import {ExplanationComponent} from './Explanation'

const getBgColor = (info:QuestionType, index:number) => {

  const correct = '#095028'
  const incorrect = '#610726'
  const none = 'transparent'
    
  if(info.userSelectedAnswer==undefined) return none 
  if(index!=info.correctAnswer && index!=info.userSelectedAnswer) return none
  if(info.correctAnswer===index) return correct
  if(info.userSelectedAnswer===index) return incorrect

}

const Question = ({info}:{info:QuestionType}) => {

  const { questions, 
          currentQuestion,
          check, 
          selectAnswer, 
          setCheck,
          goNextQuestion,
          fetchQuestions,
          } = useQuestionStore()

  const handler = (index:number) => () => {
    selectAnswer(info.id,index)
    setCheck(info.answers[info.correctAnswer])
  }

  const nextHandler = () => { 
    if(info.userSelectedAnswer!=undefined) goNextQuestion() 
  }
  const resetHandler = () => {
    fetchQuestions(10)
    setCheck('')
  }

  return (
    <Card className="p-8 gap-8 w-[90%]">

      <h5>{info.question}</h5>
      <SyntaxHighlighter language="javascipt" style={hybrid} className='rounded '>
        {info.code}
      </SyntaxHighlighter>
      
      <div className="options w-full">
        <Listbox 
          aria-label="Single selection example"
          variant="bordered"
          selectedKeys={check}
        >
          {info.answers.map((element,index)=>(
            <ListboxItem key={`${element}`}
              color="warning"
              onClick={handler(index)} 
              style={{backgroundColor:getBgColor(info,index)}} 
              isDisabled={info.userSelectedAnswer!=null} 
              endContent={<GoCheck className={`${info.userSelectedAnswer!=undefined && info.correctAnswer==index ? 'block':'hidden'} relative`}/>}
              className="transition select-none">{element}

            </ListboxItem>
          ))}
        </Listbox>
      </div>
      <div className="footer flex justify-between px-2 ">
        <span className="select-none">{currentQuestion + 1}/{questions.length}</span>
        
        <div className="buttons flex items-center space-x-4">
          <Button color="warning" variant="flat" onClick={resetHandler}>Restart</Button>  
          <Button isIconOnly color="danger" variant="flat" onClick={nextHandler}>
            <GoChevronRight />
          </Button>    
        </div>
      </div>

    </Card>
  )
}

export const Game = () => {
  const {questions, currentQuestion } = useQuestionStore()
  const questionInfo = questions[currentQuestion]
  
  return (
    <div className="flex w-3/4 gap-[5rem]"> 
      <Question info={questionInfo}/>
      <ExplanationComponent info={questionInfo} />      
    </div>
  )
}
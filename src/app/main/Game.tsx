import { useQuestionStore } from "@/store/questions"
import type { Question as QuestionType } from "@/types"
import { Card } from "@nextui-org/react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Listbox, ListboxItem} from "@nextui-org/react";
import { useState, useMemo } from "react";


const Question = ({info}:{info:QuestionType}) => {

  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  return (
    <Card className="p-8 gap-8">

      <h5>{info.question}</h5>
      <SyntaxHighlighter language="javascipt" style={hybrid} className='rounded '>
        {info.code}
      </SyntaxHighlighter>
      
      <div className="options w-full">
        <Listbox 
          aria-label="Single selection example"
          variant="bordered"
          color="warning"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {info.answers.map(e=>(
            <ListboxItem key={`${e}`}>{e}</ListboxItem>
          ))}
        </Listbox>
      </div>

    </Card>
  )
}

export const Game = () => {
  const {questions, currentQuestion} = useQuestionStore()
  const questionInfo = questions[currentQuestion]
  return (
    <>
      <Question info={questionInfo}/>
    </>
  )
}
import { Question } from "@/types/types";
import {Accordion, AccordionItem} from "@nextui-org/react";

export const ExplanationComponent = ({info}:{info:Question}) => {
  return(
    <div className="explanation w-8/12 select-none">
      <Accordion disabledKeys={["1"]}  selectedKeys={`${+(info.userSelectedAnswer!=undefined)}`} disableAnimation={true}>
        <AccordionItem key="1" aria-label="Argument" subtitle="Select an answer to see its explanation" title="Argument" >
        {info.explanation}
        </AccordionItem>
      </Accordion>
    </div>
  )
}
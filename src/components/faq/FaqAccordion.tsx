import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type TAccordionProps = {
  ques?: string;
  ans?: string;
};

const FaqAccordion = ({ ques, ans }: TAccordionProps) => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{ques || "Is it accessible?"}</AccordionTrigger>
          <AccordionContent>
            {ans || "Yes. It adheres to the WAI-ARIA design pattern."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;

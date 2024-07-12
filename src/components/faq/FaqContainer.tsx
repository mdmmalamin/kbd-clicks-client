import faq from "../../assets/constants/faq";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import FaqAccordion from "./FaqAccordion";

const FaqContainer = () => {
  return (
    <Container className="p-12 bg-white shadow-2xl rounded-2xl">
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        <div className="flex-1 space-y-6">
          <HeadLine className="!text-left">kbd Clicks Help & FAQ</HeadLine>
          <p>These are some of the most asked questions.</p>
          <p>
            If you need further assistance feeld free to contact us via{" "}
            <span className="text-lg font-semibold text-slate-700">E-Mail</span>{" "}
            or get Help on our Discord Server.
          </p>
          <Button className="bg-kbd-primary text-xl text-white hover:bg-kbd-accent hover:text-kbd-primary font-bold rounded-full p-6 transition duration-300">
            View Full FAQ
          </Button>
        </div>

        <div className="flex-1">
          {faq?.map((item, idx) => (
            <FaqAccordion {...item} key={idx} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FaqContainer;

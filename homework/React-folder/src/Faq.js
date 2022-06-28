import { useState } from "react";

const faqData = [
  {
    question: `When is the deadline for applications?`,
    answer: `You can apply until November 12th, 2022`,
  },
  {
    question: `What does the program provide?`,
    answer: `Support from a local or an international mentor, opportunity to network and form working groups with other participants of the program, Environment where tp grow, advance and broaden your skills and knowledge`,
  },
  {
    question: "What is the selection sriteria?",
    answer: ` We evaluate your motivation and goals. Th assessment will be xarried out by a special working group together with mentors`,
  },
  {
    question: "What is timeline?",
    answer: "Program starts on 6th of January and ends on 30th of June,2023",
  },
  {
    question: "What competences can I train in TechMentor program?",
    answer: (
      <>
        {" "}
        We have mentors representing 12 tracks:
        <ul>
          <li>Frontend Development</li>
          <li>Backend development</li>
          <li>UX/UI</li>
          <li>QA</li>
          <li>Engineering</li>
          <li>IT support/DevOps</li>
          <li>Project management</li>
          <li>Product management</li>
          <li>Cyber security</li>
          <li>Data analytics/data science</li>
          <li>Startups</li>
          <li>"Step up your game"</li>
        </ul>
      </>
    ),
  },
  {
    question: " What is 'Step up your game' mentorship?",
    answer:
      "   It is for ladies with experience that want to “step up their game” in the IT field: boost their skillset, while knowing the basics already: likely finished our previous tracks, have done some work in the IT field or professionals that want to move to the IT field from a non-IT related position.",
  },
  {
    question: "Where to find more info?",
    answer: (
      <>
        <p>
          Find info about mentors on{" "}
          <a
            href="http://rigatechgirls.com/mentors"
            target="_blank"
            rel="noopener noreferrer"
          >
            mentor page
          </a>{" "}
        </p>
        The lorem ipsum is a placeholder text used in publishing and graphic
        design. This filler text is a short paragraph that contains all the
        letters f the alphabet. The character are spread out evenly so that the
        reader's attention is focused on the layout of the text instead of it's
        content{" "}
      </>
    ),
  },
  {
    question: (
      <>
        What is{" "}
        <a href="Page2.html" rel="noopener noreferrer">
          "Lorem ipsum"?(read more by clicking)
        </a>
      </>
    ),
    answer:
      "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters f the alphabet. The character are spread out evenly so that the reader's attention is focused on the layout of the text instead of it's content",
  },
  {
    question: "How do I apply?",
    answer: (
      <>
        You can do this right here <i class="fas fa-hand-point-right"></i>
        <a
          href="http://www.rigatechgirls.com/mentorship2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="apply">APPLY</button>
        </a>
      </>
    ),
  },
];

const QuestionContainer = ({ question, answer, setOpenQuestion, isOpen }) => {
  return (
    <div
      onClick={() => setOpenQuestion(question)}
      className="question-container"
    >
      <div className="question">{question}</div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section id="main-part">
      <h2 className="sr-only">FAQ</h2>
      <div id="faq-containter" className="faq">
        <QuestionContainer />
        {faqData.map((item) => (
          <QuestionContainer
            key={item.question}
            question={item.question}
            answer={item.answer}
            setOpenQuestion={setOpenQuestion}
            isOpen={openQuestion === item.question}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;

// Close previous opened question if user clicks on new one.
// Use helper functions for creating JavaScript elements, to simplify main code
const mainPart = document.getElementById("main-part");

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
    answer: ` We have mentors representing 12 tracks:<ul>
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
    </ul>`,
  },
  {
    question: " What is 'Step up your game' mentorship?",
    answer:
      "   It is for ladies with experience that want to “step up their game” in the IT field: boost their skillset, while knowing the basics already: likely finished our previous tracks, have done some work in the IT field or professionals that want to move to the IT field from a non-IT related position.",
  },
  {
    question: "Where to find more info?",
    answer: `<p>Find info about mentors on <a href="http://rigatechgirls.com/mentors" target="_blank" rel="noopener noreferrer">mentor page</a> </p>
The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters f the alphabet. The character are spread out evenly so that the reader's attention is focused on the layout of the text instead of it's content `,
  },
  {
    question: `What is <a href="Page2.html" rel="noopener noreferrer">"Lorem ipsum"?(read more by clicking)</a>`,
    answer:
      "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters f the alphabet. The character are spread out evenly so that the reader's attention is focused on the layout of the text instead of it's content",
  },
  {
    question: "How do I apply?",
    answer: `You can do this right here <i class="fas fa-hand-point-right"></i
></span>
<a
  href="http://www.rigatechgirls.com/mentorship2022"
  target="_blank"
  rel="noopener noreferrer"
  ><button class="apply">APPLY</button></a
>`,
  },
];

//START: create container
const createFaqDataContainer = (faqEntryData, faqContainer) => {
  const { question, answer } = faqEntryData;
  let visible = "answer-visible";
  let hidden = "answer-hidden";
  const entryContainer = document.createElement("div");
  entryContainer.className = "question-container";

  const entryAnswer = document.createElement("div");
  entryAnswer.className = "faq answer  answer-hidden";
  entryAnswer.innerHTML = answer;

  const entryQuestion = document.createElement("div");
  entryQuestion.className = "faq question chevron right";
  entryQuestion.innerHTML = question;

  entryContainer.append(entryQuestion);
  entryContainer.append(entryAnswer);

  faqContainer.append(entryContainer);
  //END: create container

  //START: adding ability to open/close questions
  const answerVisibility = (entryAnswer, entryQuestion) => {
    const isVisible = entryAnswer.className.includes(visible);

    if (isVisible) {
      entryAnswer.className = `answer ${hidden}`;
      entryQuestion.className = "question chevron right";
    } else {
      entryAnswer.className = `answer ${visible}`;
      entryQuestion.className = "question chevron bottom";
    }
  };
  entryQuestion.onclick = () => {
    answerVisibility(entryAnswer, entryQuestion);
  };
  entryAnswer.onclick = () => {
    answerVisibility(entryAnswer, entryQuestion);
  };

  //CLOSE: adding ability to open/close questions
};

//START: adding container to html
const faqList = () => {
  mainPart.innerHTML = "";
  const faqContainer = document.createElement("div");
  faqContainer.id = "faq-container";

  faqData.forEach((faqEntryData) => {
    createFaqDataContainer(faqEntryData, faqContainer);
  });

  mainPart.append(faqContainer);
};

faqList();
//END: adding container to html

const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

//START: opening all answers by clicking on questions/answers
const openAllQuestionsBtn = document.querySelectorAll(".button")[1];
openAllQuestionsBtn.onclick = () => {
  answers.forEach((answer) => {
    const isVisible = answer.className.includes("answer-visible");

    if (isVisible) {
      answer.className = `answer answer-hidden`;
    } else {
      answer.className = `answer answer-visible`;
    }
  });

  questions.forEach((question) => {
    const isRight = question.className.includes("right");

    if (isRight) {
      question.className = "question chevron bottom";
    } else {
      question.className = "question chevron right";
    }
  });
};
//END: opening all answers by clicking on questions/answers

// START: search place
const searchPlace = document.getElementById("search");
const clearBtn = document.querySelector("[type='submit']");
const faqSentences = document.querySelectorAll(".faq");
const question = document.querySelectorAll(".question");
let filteredData = [];
const faqContainer = document.getElementById("faq-container");



searchPlace.addEventListener("keyup", function () {
  const searchText = searchPlace.value.toLowerCase();

  filteredData = faqData.filter(
    (sentence) =>
      sentence.answer.toLowerCase().includes(searchText) ||
      sentence.question.toLowerCase().includes(searchText)
  );

  faqContainer.innerHTML = "";
  filteredData.forEach((data) => {
    createFaqDataContainer(data, faqContainer);
  });
});

// END: search place

//START: functionality of CLEAR button
clearBtn.onclick = (e) => {
  e.preventDefault();

  if (searchPlace.value !== "") {
    searchPlace.value = "";
    // createFaqDataContainer(faqSentences, faqContainer);
  }
};

//END: functionality of CLEAR button

import React, { useState } from "react";
import './App.css';
import { fetchQuizQuestions } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
// types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;


const App = () => {
  const [ score, setScore ] = useState(0);
  const [ number, setNumber ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ gameOver, setGameOver ] = useState(true);
  const [ questions, setquestions ] = useState([]);
  const [ userAnswer, setUserAnswer ] = useState([]);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading questions . . .</p>




      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
      /> */}



      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;

import "./style.css";

import NavQuiz from "../../components/NavQuiz";
import { useNavigate, useParams } from "react-router-dom";
import { mockQuizGame } from "../../mocks/Quiz";
import { QuizResponse } from "../../types/Quiz";
import { useState } from "react";

export default function QuizGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const games = mockQuizGame.filter((quiz) => quiz.quizId === id);

  const [answered, setAnswered] = useState(false);
  const [questIndex, setQuestIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<QuizResponse | null>(
    null
  );

  const currentQuest = games[questIndex];

  const handleResponseClick = (response: QuizResponse) => {
    if (answered) return;
    setSelectedResponse(response);
    setAnswered(true);
    const timer = setTimeout(() => {
      if (questIndex < games.length - 1) {
        setQuestIndex((prevIndex) => prevIndex + 1);
        setSelectedResponse(null);
        setAnswered(false);
      } else {
        navigate("/quiz");
      }
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="quiz-game-container">
      <NavQuiz index={questIndex + 1} total={games.length} />
      <div className="quiz-game-question">
        <h1>{currentQuest?.question}</h1>
        <img className="game-image" src="/assets/default.png" alt="image" />
        <div className="quiz-game-responses">
          {currentQuest.responses.map((res, index) => {
            const getClass = () => {
              if (!!selectedResponse && res.text === selectedResponse.text) {
                return `quiz-game-button ${
                  selectedResponse.correct ? "correct" : "incorrect"
                }`;
              }

              return "quiz-game-button";
            };
            return (
              <button
                key={index}
                className={getClass()}
                onClick={() => handleResponseClick(res)}
                disabled={answered} // Desativa todos os botões após a resposta
              >
                {res.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import "./style.css";

import NavBar from "../../components/Navbar/Index";
import QuizCard from "../../components/QuizCard/QuizCard";
import { useNavigate } from "react-router-dom";
import { mockQuiz } from "../../mocks/Quiz";

export default function QuizzesList() {
  const navigate = useNavigate();
  return (
    <div className="quiz-container">
      <NavBar>
        <div className="image-container">
          <img src="assets/nat_avatar.png" alt="nat_avatar" />
          <p>@natbezerra</p>
        </div>
        <div className="cards-container">
          {mockQuiz.map((quiz) => (
            <QuizCard
              onClick={() => navigate(`/quiz/${quiz.id}`)}
              key={quiz.id}
              image={quiz.image}
              title={quiz.title}
            />
          ))}
        </div>
      </NavBar>
    </div>
  );
}

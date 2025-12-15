import "./style.css";

import React from "react";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  image: string;
  title: string;
};

const QuizCard: React.FC<Props> = ({ image, title, ...props }) => {
  return (
    <button className="quiz-card" {...props}>
      <img className="image" src={image || "assets/default.png"} />
      <div className="quiz-infos">
        <h1 className="title">{title}</h1>
        <img src="assets/avatar_stack.png" height={32} />
      </div>
    </button>
  );
};

export default QuizCard;

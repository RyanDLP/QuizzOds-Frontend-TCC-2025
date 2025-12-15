export type QuizItem = {
  id: string;
  image: string;
  title: string;
};

export type QuizResponse = {
  text: string;
  correct: boolean;
};
export type QuizGameItem = {
  id: string;
  quizId: string;
  image: string;
  question: string;
  responses: QuizResponse[];
};

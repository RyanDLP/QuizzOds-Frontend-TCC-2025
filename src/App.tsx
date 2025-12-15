import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OdsPage from "./pages/Ods";
import Quiz from "./pages/QuizzesList";
import QuizGame from "./pages/QuizGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ods/:id" element={<OdsPage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz/:id" element={<QuizGame />} />
    </Routes>
  );
}

export default App;

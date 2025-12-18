import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingScreen } from "./pages/SplashScreen";

const Home = lazy(() => import("./pages/Home"));
const OdsPage = lazy(() => import("./pages/Ods"));
const Quiz = lazy(() => import("./pages/QuizzesList"));
const QuizGame = lazy(() => import("./pages/QuizGame"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ods/:id" element={<OdsPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:id" element={<QuizGame />} />
      </Routes>
    </Suspense>
  );
}

export default App;

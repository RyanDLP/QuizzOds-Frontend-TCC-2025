import "./style.css";

import {
  Home,
  SportsEsports,
  Search,
  Notifications,
} from "@mui/icons-material";
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = { children?: ReactNode };

export const BottomBar: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="bottomBar">
      <header className="header">
        <Search className="search" />
        <Notifications className="notification" />
      </header>
      <main className="body">{children}</main>
      <footer>
        <button onClick={() => navigate("/")}>
          <Home />
          <span>Home</span>
        </button>
        <button onClick={() => navigate("/quiz")}>
          <SportsEsports />
          <span>Quiz</span>
        </button>
      </footer>
    </div>
  );
};

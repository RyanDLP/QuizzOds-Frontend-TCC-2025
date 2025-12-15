import "./style.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

type Props = {
  index: number;
  total: number;
};

const NavQuiz: React.FC<Props> = ({ index, total }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-quiz">
      <button onClick={() => navigate("/quiz")}>
        <Close htmlColor={"#ffffff"} />
      </button>
      <p>{`${index}/${total}`}</p>
    </div>
  );
};

export default NavQuiz;

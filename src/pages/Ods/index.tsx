import "./style.css";

import { useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { mockOds } from "../../mocks/Ods";

export default function OdsPage() {
  const { id } = useParams();
  const ods = mockOds.find((o) => o.id === id);

  if (!ods) {
    return <h1 className="not-found">ODS não encontrada</h1>;
  }

  const navigate = useNavigate();

  return (
    <div>
      <header className="ods-header">
        <button className="btn-arrow" onClick={() => navigate("/")}>
          <ArrowBack />
        </button>
        <h1>{ods.title}</h1>
      </header>
      <div className="ods-page-container">
        <p className="ods-page-subtitle">{ods.subtitleOd}</p>
        <div className="od-description">{ods.descriptionOd}</div>
        <div className="res-brasil">
          <p>A Resposta do Brasil</p>
        </div>
        <div className="res-ini">{ods.resume}</div>
        <ul className="ods-response-list">
          {ods.responsesOds.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

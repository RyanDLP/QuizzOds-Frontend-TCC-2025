import "./style.css";

import { Link } from "react-router-dom";
import { mockOds } from "../../mocks/Ods";
import NavBar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar>
        <div className="home-wrapper">
          <ul className="home-content">
            {mockOds.map((ods) => (
              <div className="ods-card" key={ods.id}>
                <li className="ods-number-title"> {ods.title} </li>
                <p className="ods-subtext">{ods.subtitleOd}</p>
                <img
                  className="ods-big-image"
                  src={ods.coverImage}
                  alt={ods.title}
                />
                <Link className="ods-read-more" to={`/ods/${ods.id}`}>
                  Ler mais
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </NavBar>
    </div>
  );
}

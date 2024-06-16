import { Link } from "react-router-dom";
import Header from "../../components/header";
import "./home.css";

export default function Home() {
  return (
    <div id="home">
      <div className="header">
        <Header />
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

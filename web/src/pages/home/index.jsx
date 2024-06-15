import Header from "../../components/header";
import { Button } from "@mui/base/Button";
import "./home.css";

export default function Home() {
  return (
    <div id="home">
      <div className="header">
        <Header />
        <Button />
      </div>
    </div>
  );
}

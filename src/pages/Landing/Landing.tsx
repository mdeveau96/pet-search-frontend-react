import Button from "../../components/Button/Button";
import "./Landing.css";
import { Link } from "react-router";

export default function Landing() {
  return (
    <>
      <div className="container">
        <div>
          <Link className="title" to="/">
            <h1>Pet Search</h1>
          </Link>
        </div>
        <div className="selection--container">
          <Button link="/post-lost-pet" design="lost">
            Post a Lost Pet
          </Button>
          <Button link="/feed" design="feed">
            Lost Pet Updates
          </Button>
        </div>
      </div>
    </>
  );
}

import Button from "../../components/Button/Button";
import "./Landing.css";
import { Link } from "react-router";

export default function Landing() {
  return (
    <>
      <div className="container">
        <h1 className="title">
          <Link to="/">
            Pet Search
          </Link>
        </h1>
        <div className="selection--container">
          <h3>Welcome to Pet Search!</h3>
          <p>If you are currently looking for your pet please create a new post listing:</p>
          <Button link="/post-lost-pet" design="lost">
            Post a Lost Pet
          </Button>
          <p>If you would like to see other lost pets or check a post you previously created:</p>
          <Button link="/feed">
            Lost Pet Updates
          </Button>
        </div>
      </div>
    </>
  );
}

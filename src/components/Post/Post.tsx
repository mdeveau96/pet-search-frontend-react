import { JSX, useState } from "react";
import Button from "../Button/Button";
import "./Post.css";

interface Props {
  title: string;
  imageUrl?: string;
  content?: string;
  cityName: string;
  disableButtons: boolean;
}

const Post: React.FC<Props> = (props: Props): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const select = () => {
    console.log(isSelected)
    setIsSelected(!isSelected);
  };

  return (
    <article className="post--container">
      <header className="post--header">
        {props.title} - <strong className="lost--status">Lost</strong> in{" "}
        {props.cityName}
      </header>
      <hr />
      <div className="post--image">{props.imageUrl}</div>
      <div className="post--content">{props.content}</div>
      <hr />
      <div className="post--actions">
        <Button disabled={props.disableButtons} design="flat" selected={isSelected} onClick={select}>
          1232 Likes
        </Button>
        <Button disabled={props.disableButtons} design="flat">
          242 Comments
        </Button>
        <Button disabled={props.disableButtons} design="flat">
          2342 Shares
        </Button>
      </div>
    </article>
  );
};

export default Post;

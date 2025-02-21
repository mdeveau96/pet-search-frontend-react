import Button from "../Button/Button";
import "./Post.css"

interface PostProps {
  title: string;
  imageUrl?: string;
  content?: string;
  cityName: string;
}

export default function Post({title, imageUrl, content, cityName}: PostProps) {
  return (
    <article className="post--container">
      <header className="post--header"><h3 className="post--title">{title} - <strong className="lost--status">Lost</strong> in {cityName}</h3></header>
      <hr/>
      <div className="post--image">
        {imageUrl}
      </div>
      <div className="post--content">{content}</div>
      <hr/>
      <div className="post--actions">
        <Button>Like</Button>
        <Button>Comment</Button>
      </div>
    </article>
  )
}
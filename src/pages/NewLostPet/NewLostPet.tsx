import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";
import "./NewLostPet.css"
import Post from "../../components/Post/Post";
import Card from "../../components/Card/Card";

interface postFormData {
  title: string;
  imageUrl: string;
  content: string;
  cityName: string;
}

interface PreviewProps {
  post: postFormData;
}

const PostPreview: React.FC<PreviewProps> = (props: PreviewProps) => {
  return (
    <>
      <Post title={props.post.title} imageUrl={props.post.imageUrl} content={props.post.content} cityName={props.post.cityName} disableButtons={true}/>
      <div>
        <Button design="" type="button">Back</Button>
        <Button design="" type="submit">Create Post</Button>
      </div>
    </>
  )
}

const NewLostPet: React.FC = () => {
  const [post, setPost] = useState<postFormData>({
    title: "",
    imageUrl: "",
    content: "",
    cityName: "",
  });
  const [showPostForm, setShowPostForm] = useState<boolean>(true);
  const [showPostPreview, setShowPostPreview] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value } = e.target;
    setPost((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const onClick = () => {
    setShowPostPreview(!showPostPreview)
    setShowPostForm(!showPostForm)
  }

  const createPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost = post
    console.log(newPost)
    try {
      // const response = await fetch("http://localhost:8080/feed/post", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer` //Add token functionality
      //   },
      //   body: JSON.stringify(post)
      // })
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`)
      // }
      // const data: Post = await response.json() as Post;
    } catch (error) {
      console.error('There was an error sending the POST request:', error);
    }
  }

  return (
    <>
      <Card>
          <form className="new-post--form" onSubmit={createPost}>
          {showPostForm && 
            <>
              <Input
                id="cityName"
                name="cityName"
                label="What city and state did your pet going missing in?"
                type="text"
                control="input"
                placeHolder="Ex. Los Angeles, CA"
                required={true}
                value={post.cityName}
                onChange={handleInputChange}
              />
              <Input
                id="title"
                name="title"
                label="Tell us a little bit about your pet"
                type="text"
                control="input"
                placeHolder="Species, breed, color, size, etc."
                required={true}
                value={post.title}
                onChange={handleInputChange}
              />
              <Input
                id="content"
                name="content"
                label="Any more information that can help others"
                control="textarea"
                placeHolder=""
                rows={10}
                required={true}
                value={post.content}
                onChange={handleInputChange}
              />
              <Button design="submit" type="button" onClick={onClick}>
                Preview
              </Button>
            </>}
            {showPostPreview && <div>
              <PostPreview post={post} />
            </div>}
          </form>
      </Card>
    </>
  );
}

export default NewLostPet;

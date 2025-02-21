import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";
import "./NewLostPet.css"
import Post from "../../components/Post/Post";

export default function NewLostPet() {
  interface Post {
    title: string;
    imageUrl: string;
    content: string;
    cityName: string;
  }

  const [post, setPost] = useState<Post>({
    title: "",
    imageUrl: "",
    content: "",
    cityName: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value } = e.target;
    setPost((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const createPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost: Post = post
    console.log(newPost)
    // try {
    //   const response = await fetch("http://localhost:8080/feed/post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer` //Add token functionality
    //     },
    //     body: JSON.stringify(post)
    //   })
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`)
    //   }
    //   const data: Post = await response.json() as Post;
    //   setPostData(data)
    // } catch (error) {
    //   console.error('There was an error sending the POST request:', error);
    // }
  }

  return (
    <>
      <div className="container">
        <form className="new-post--form" onSubmit={createPost}>
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
          <Button design="submit" type="submit">
            Submit
          </Button>
        </form>
        <div className="post-preview--container">
          <div className="post-preview">
            <Post title={post.title} imageUrl={post.imageUrl} content={post.content} cityName={post.cityName}/>
          </div>
        </div>
      </div>
    </>
  );
}

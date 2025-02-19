import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";

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

  const createPost = async (formData: FormData) => {
    const cityName = formData.get("countyName") as string;
    const title = formData.get("title") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const content = formData.get("content") as string;
    const post: Post = {title: title, imageUrl: imageUrl, content: content, cityName: cityName}
    try {
      const response = await fetch("http://localhost:8080/feed/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer` //Add token functionality
        },
        body: JSON.stringify(post)
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      // const data: Post = await response.json() as Post;
      // setPostData(data)
    } catch (error) {
      console.error('There was an error sending the POST request:', error);
    }
  }

  return (
    <>
      <div className="container">
        <form className="newPost" action={createPost}>
          <Input
            id="countyName"
            name="countyName"
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
            type="text"
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
        <div className="post-preview">
          {post.cityName}
        </div>
      </div>
    </>
  );
}

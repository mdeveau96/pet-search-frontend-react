import { useState } from "react";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";

export default function NewLostPet() {
  interface Post {
    title: string;
    imageUrl: string;
    content: string;
    county: string;
  }

  const [post, setPost] = useState<Post>({
    title: "",
    imageUrl: "",
    content: "",
    county: "",
  })

  const createPost = async (formData: FormData) => {
    const county = formData.get("countyName") as string;
    const title = formData.get("title") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const content = formData.get("content") as string;
    const post: Post = {title: title, imageUrl: imageUrl, content: content, county: county}
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
      <form className="county" action={createPost}>
        
        <Input
          id="countyName"
          name="countyName"
          label="What county did your pet going missing in?"
          type="text"
          control="input"
          placeHolder="What county do you live in?"
          required={true}
          value={post.county}
          onChange={e => {
            setPost({
              ...post,
              county: e.target.value
            })
          }}
        />
        <Button design="submit" type="submit">
          Submit
        </Button>
        {postData && (
          <h1>{postData.title}</h1>
        )}
      </form>
    </>
  );
}

// import { useState } from "react";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";

export default function NewLostPet() {
  interface Post {
    title: string;
    imageUrl: string;
    content: string;
    county: string;
  }

  function createPost(formData: FormData) {
    const county = formData.get("countyName") as string;
    const title = formData.get("title") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const content = formData.get("content") as string;
    const post: Post = {title: title, imageUrl: imageUrl, content: content, county: county}
    
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
        />
        <Button design="submit" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

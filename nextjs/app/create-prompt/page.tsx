"use client";

import { useSession } from "next-auth/react";
import Error from "next/error";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Form, { Prompt } from "@components/Form";

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" } as Prompt);

  if (!session || !session.user) {
    return (
      <Error statusCode={401} title="Only signed-in users can create prompt" />
    );
  }

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resp = await fetch("/api/prompts", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          creator: session.user!.name,
        } as Prompt),
      });

      if (resp.ok) {
        router.push("/");
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;

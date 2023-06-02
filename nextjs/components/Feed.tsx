"use client";

import { useEffect, useState } from "react";
import PromptCard, { Prompt } from "./PromptCard";

type PromptCardListProps = {
  data: Prompt[];
};

const PromptCardList = ({ data }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((p) => (
        <PromptCard key={p.prompt} prompt={p} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPrompts, setAllPrompts] = useState([] as Prompt[]);
  const fetchPrompts = async () => {
    const resp = await fetch("/api/prompts");
    if (!resp.ok) {
      console.log("Failed to fetch prompts", resp);
      return;
    }
    const data = await resp.json();
    setAllPrompts(data);
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          className="search_input peer"
        />
      </form>

      <PromptCardList data={allPrompts} />
    </section>
  );
};

export default Feed;

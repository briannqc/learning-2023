import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request: Request) => {
  const { userId, prompt, tag } = await request.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err: any) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err: any) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

import { chatSession } from "@/config/model";
import { NextResponse } from "next/server";

export const POST = async ({ request }: { request: any }) => {
  try {
    // getting users prompt
    const { prompt } = await request.json();
    console.log("Prompt", prompt);

    //    get the results
    const results = await chatSession.sendMessage(prompt);
    console.log(results.response.text());

    return NextResponse.json({
      results: JSON.parse(results.response.text()),
    });
  } catch (error) {
    NextResponse.json(`An error occurred: ${error}`);
  }
};

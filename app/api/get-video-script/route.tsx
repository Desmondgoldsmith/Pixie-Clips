import { chatSession } from "@/config/model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    console.log("Received prompt:", prompt);

    const results = await chatSession.sendMessage(prompt);
    const responseText = results.response.text();
    console.log("API response:", responseText);

    let parsedResults;
    try {
      parsedResults = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse API response:", parseError);
      return NextResponse.json(
        { error: "Failed to parse API response" },
        { status: 500 }
      );
    }

    return NextResponse.json({ results: parsedResults });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}

import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.textToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export const POST = async (request: Request) => {
  const { text, id } = await request.json();
  // Construct the request
  const getRequest = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };
};

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMIMI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "write a script to generate a 30 seconds video on the topic : interesting historic story along with AI image prompt in a realistic format. For each scene , give me a result in JSON format with imagePrompt and contentText as field.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A bustling medieval marketplace, vibrant with merchants, craftsmen, and townsfolk, realistic style, intricate details",\n    "contentText": "In 1381, England faced the Peasants\' Revolt, a monumental uprising fueled by oppressive taxes and social unrest."\n  },\n  {\n    "imagePrompt": "A determined Wat Tyler, leader of the Peasants\' Revolt, addressing a large crowd with passion and anger, realistic style, detailed clothing",\n    "contentText": "At the heart of this rebellion stood Wat Tyler, a charismatic figure who rallied thousands against the crown."\n  },\n  {\n    "imagePrompt": "King Richard II, young and apprehensive, meeting with Wat Tyler and the rebels outside the walls of London, realistic style, historically accurate clothing",\n    "contentText": "A young King Richard II, just 14 years old, courageously rode out to meet the rebels, a pivotal moment in history."\n  },\n  {\n    "imagePrompt": "A tense standoff between the King\'s men and the rebels, swords drawn, a sense of impending conflict, realistic style",\n    "contentText": "Negotiations turned volatile.  A scuffle broke out, and Wat Tyler was fatally wounded."\n  },\n  {\n    "imagePrompt": "King Richard II, bravely addressing the angry mob after the death of Wat Tyler, trying to calm the situation, realistic style, focus on his expression",\n    "contentText": "Facing a potentially explosive situation, Richard II showed remarkable composure, promising the rebels their demands would be met."\n  },\n  {\n    "imagePrompt": "Rebels dispersing after the King\'s address, a mix of relief, uncertainty, and disappointment on their faces, realistic style",\n    "contentText": "While the rebellion was ultimately suppressed, the Peasants\' Revolt marked a significant turning point in English history, demonstrating the power of the common people."\n  }\n]\n```\n\n\nThis script outlines a 30-second video (approximately 5 seconds per scene).  The image prompts are designed for AI art generators like Midjourney, Stable Diffusion, or DALL-E 2, aiming for realistic depictions of the events. The `contentText` provides the narration for each scene.  You\'ll need to use a video editor to combine the generated images with the text and background music/sound effects.  Consider adding transitions between scenes for a more polished result.\n',
        },
      ],
    },
  ],
});

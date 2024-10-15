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
          text: "write a script to generate a 30 seconds video on the topic : interesting historic story along with AI image prompt in a realistic format. For each scene , give me a result in JSON format with imagePrompt and contentText as field ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```python\nimport json\n\ndef generate_video_script(topic="The Great Molasses Flood"):\n    """Generates a 30-second video script with AI image prompts.\n\n    Args:\n        topic: The historical topic for the video.\n\n    Returns:\n        A list of dictionaries, each representing a scene with image prompt and text.\n    """\n\n    if topic == "The Great Molasses Flood":\n        script = [\n            {\n                "imagePrompt": "A bustling, early 20th-century Boston street scene with horse-drawn carts and pedestrians, set against a clear winter sky.",\n                "contentText": "January 15, 1919, Boston. A seemingly ordinary winter day...",\n                "duration": 5  # seconds\n            },\n            {\n                "imagePrompt": "A massive steel tank towering over the North End neighborhood, filled to the brim with molasses. Subtle cracks are visible on its surface.",\n                "contentText": "...held a hidden danger. A 50-foot-tall tank containing 2.3 million gallons of molasses...",\n                "duration": 5\n            },\n            {\n                "imagePrompt": "The molasses tank bursting open, a thick wave of molasses exploding outwards, engulfing buildings and people in its path. Debris flies everywhere.",\n                "contentText": "...suddenly ruptured, unleashing a sticky tsunami.",\n                "duration": 5\n            },\n            {\n                "imagePrompt": "A chaotic scene of destruction. Buildings are crushed, streets are flooded with molasses, people and horses struggle to free themselves from the sticky mess.",\n                "contentText": "A wave of molasses, 25 feet high and traveling at 35 miles per hour, swept through the streets...",\n                "duration": 5\n            },\n            {\n                "imagePrompt": "Rescue workers pulling people from the molasses, some injured, others covered head-to-toe in the sticky substance.  Horses are being helped or put down.",\n                "contentText": "...leaving a trail of destruction and claiming 21 lives.",\n                "duration": 5\n            },\n            {\n                "imagePrompt": "A black and white photo of the aftermath, showing the devastation and cleanup efforts.  Focus on the twisted metal and debris.",\n                "contentText": "The Great Molasses Flood, a bizarre and tragic event in history.",\n                "duration": 5\n            }\n\n        ]\n\n\n    # Add more topics here with their respective scripts. For example:\n    # elif topic == "Another Historical Event":\n    #   script = [...]\n\n    else:  # Default script if topic not found.\n        script = [{"imagePrompt": "A generic historical scene.", "contentText": "No script found for this topic.", "duration": 30}]\n    \n\n    return json.dumps(script, indent=4)\n\n\n# Example usage:\nprint(generate_video_script()) # Uses the default "The Great Molasses Flood"\nprint(generate_video_script("The Great Molasses Flood"))\n# To generate for a different topic (once you add it to the function):\n# print(generate_video_script("Another Historical Event"))\n\n\n```\n\n\nThis improved version provides:\n\n* **JSON Output:** The script is now correctly formatted as a JSON string, making it easy to parse and use with video editing software or other tools.\n* **Clearer Prompts:** The image prompts are more descriptive, providing context and details for AI image generation.  They are also more realistic and focus on achievable imagery.\n* **Concise Text:** The `contentText` is kept brief, suitable for short video durations.\n* **Duration per Scene:** Each scene dictionary now includes a `duration` field (in seconds), which can be used to control the timing in video editing.\n* **Topic Flexibility:** The function is designed to easily accommodate additional historical topics by adding `elif` blocks within the `generate_video_script` function.  \n* **Error Handling:**  A basic default script is included if the requested `topic` is not found.\n\n\n\n\nTo use this:\n\n1. **Run the Python code.** It will print the JSON string to the console.\n2. **Copy the JSON output.**\n3. **Use an AI image generator:**  Paste the `imagePrompt` from each scene into your chosen AI image generator (Midjourney, Dall-E 2, Stable Diffusion, etc.) to create the visuals.\n4. **Combine in a video editor:** Use a video editing program to assemble the generated images, add the `contentText` as captions or voiceover, and set the duration of each scene according to the `duration` specified.\n\n\n\n\nThis structured approach makes it much easier to create historical videos using AI-generated imagery.  Remember to add more topics to the  `generate_video_script()` function to expand its capabilities.',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "write a script to generate a 30 seconds video on the topic : interesting historic story along with AI image prompt in a realistic format. For each scene , give me a result in JSON format with imagePrompt and contentText as field.\n\nNB: i just need the imagePrompt and contentField for the scene in JSON format, i'm not asking you to embed this in a programming language or anything",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A bustling medieval marketplace scene in London, with vendors selling goods, people in period clothing, and a few stray animals. The sky is overcast.",\n    "contentText": "1665. London thrived, unaware of the silent killer lurking within its walls."\n  },\n  {\n    "imagePrompt": "A close-up of a rat with fleas visible on its fur, in a dark, grimy alleyway.",\n    "contentText": "The bubonic plague, carried by fleas on rats, began its insidious spread."\n  },\n  {\n    "imagePrompt": "A person with visible buboes (swollen lymph nodes) on their neck and armpit, looking weak and feverish.  The background is dimly lit, suggesting sickness and confinement.",\n    "contentText": "The telltale signs: swollen lymph nodes, fever, and agonizing pain."\n  },\n  {\n    "imagePrompt": "Medieval plague doctors in their distinctive bird-like masks, moving through the streets.  A cart piled with bodies is in the background.",\n    "contentText": "Plague doctors, their beaked masks filled with herbs, offered little real help."\n  },\n  {\n    "imagePrompt": "A mass burial pit outside the city walls, with bodies being thrown in.  The scene is somber and grim.",\n    "contentText": "Death\'s toll was staggering. Mass graves became the grim reality."\n  },\n  {\n    "imagePrompt": "A view of London from a distance, with smoke rising from burning pyres in several locations. The sky is a mix of orange and grey.",\n    "contentText": "Desperate attempts to stop the spread included burning the belongings of the deceased."\n  },\n  {\n    "imagePrompt": "A lone figure walking down an empty street in London. A \'Plague House\' sign is visible on a door in the background.",\n    "contentText": "The Great Plague of London claimed an estimated 100,000 lives, reshaping the city forever."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

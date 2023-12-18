import OpenAI from 'openai';

export default async function generateImages({
  keyword,
  colour,
  phrase,
  numberOfImages
}: {
  keyword: string;
  colour: string;
  phrase: string;
  numberOfImages: number;
}) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  try {
    const apiCalls = Array.from({ length: numberOfImages }, () => {
      return openai.images.generate({
        prompt: `Generate a prompt based on the following phrase: "${phrase}". Use the following keyword an anchor: ${keyword}. The image should have a main colour of: ${colour}.`,
        n: 1,
        model: 'dall-e-3'
      });
    });
    const results = await Promise.allSettled(apiCalls);
    return results;
  } catch (e) {
    console.log(e);
  }
}

import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json(
        { error: 'Message content is required.' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-1106:personal::AXHsC6My',
      messages: [
        { role: 'system', content: 'You are a Panda Express service assistant.' },
        { role: 'user', content: message },
      ],
      max_tokens: 150,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: 'No reply generated by OpenAI.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Error:', error.message || error);
    return NextResponse.json(
      { error: 'Failed to process the request.' },
      { status: 500 }
    );
  }
}
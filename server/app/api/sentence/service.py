import os

from openai import AsyncOpenAI

from app.api.sentence.schema import SentenceLength

client = AsyncOpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
)


async def generate_sentence(length: SentenceLength) -> str:
    prompt = "Write a daily conversation sentence in Korean. It should be natural and informal."

    if length == "short":
        prompt += "(50-100 characters)"
    elif length == "medium":
        prompt += "(100-200 characters)"
    elif length == "long":
        prompt += "(200-300 characters)"
    else:
        raise ValueError("Invalid sentence length")

    response = await client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gpt-3.5-turbo",
        temperature=0.8,  # creativity
        top_p=1.0,  # diversity
        frequency_penalty=1.0,  # 중복 줄이기
        presence_penalty=0.8,  # 새로운 아이디어 유도
    )

    return response.choices[0].message.content

import os

from openai import AsyncOpenAI

from app.api.sentence.schema import SentenceLength

client = AsyncOpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
)


async def generate_sentence(length: SentenceLength) -> str:
    prompt = "영어 작문을 연습할 수 있도록 한국어 문장을 작성해줘. 문장에는 영어가 포함되면 안돼."

    if length == "short":
        prompt += (
            "일상적인 대화에서 사용되는 짧고 간단한 한국어 문장을 최대 150자 이하로 작성해줘. 이 대화는 드라마에 나오는 대사여야해."
        )
    elif length == "medium":
        prompt += "하나의 주제에 대해 100자 이상 150자 이하로 주제에 대해서 깊이 있게 생각할 수 있는 한국어 문장을 작성해줘."
    elif length == "long":
        prompt += "하나의 주제에 대해 200자 이상 300자 이하로 상세하고 깊이 있는 한국어 문장을 작성해줘. 이 문장은 그 주제에 대해 다양한 측면을 다룰 수 있도록 작성해야해."
    else:
        raise ValueError("Invalid sentence length")

    response = await client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
        model="gpt-3.5-turbo",
        temperature=0.8,  # creativity
        top_p=1.0,  # diversity
        frequency_penalty=1.0,  # 중복 줄이기
        presence_penalty=0.8,  # 새로운 아이디어 유도
    )

    return response.choices[0].message.content


async def generate_feedback(sentence: str, user_sentence: str) -> str:
    prompt = (
        f"{sentence} 문장이 원본 문장이고 {user_sentence} 사용자가 작성한 문장이야. 사용자가 작성한 영어 문장을 검토하고, 문법적인 오류나 부자연스러운 부분을 찾아 수정해줘."
        f"그리고 더 나은 문장으로 교정해줘.\n"
        "어떤 부분이 문법적으로 올바르지 않거나 어색한지 이유를 자세히 알려줘.\n"
    )

    response = await client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "너는 영어 문법과 자연스러운 표현에 매우 능숙한 교정자야. 문법적인 오류를 고치고 더 자연스러운 문장으로 개선할 수 있어. 친절한 방식으로 대답하고 ~요.로 끝나는 말투를 사용해.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        model="gpt-3.5-turbo",
        temperature=0.7,
        top_p=1.0,
        frequency_penalty=0.5,
        presence_penalty=0.5,
    )
    return response.choices[0].message.content

from fastapi import APIRouter, Body, status

from app.api.sentence import service
from app.api.sentence.schema import FeedbackRequest, SentenceRequest

router = APIRouter()


@router.post(
    "/generate",
    description="Generate a sentence",
    response_model=dict[str, str],
    status_code=status.HTTP_201_CREATED,
)
async def generate_sentence(
    request: SentenceRequest = Body(...),
):
    sentence = await service.generate_sentence(request.sentence_length)
    return {"data": sentence}


@router.post(
    "/feedback",
    description="Get a feedback of the user's sentence",
    response_model=dict[str, str],
    status_code=status.HTTP_201_CREATED,
)
async def generate_feedback(
    request: FeedbackRequest = Body(...),
):
    feedback = await service.generate_feedback(request.sentence, request.user_sentence)
    return {"data": feedback}

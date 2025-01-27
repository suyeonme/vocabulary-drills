from fastapi import APIRouter, Body, status

from app.api.sentence import service
from app.api.sentence.schema import SentenceRequest

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

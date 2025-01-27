from typing import Literal

from pydantic import BaseModel

SentenceLength = Literal["short", "medium", "long"]


class SentenceRequest(BaseModel):
    sentence_length: SentenceLength


class FeedbackRequest(BaseModel):
    sentence: str
    user_sentence: str

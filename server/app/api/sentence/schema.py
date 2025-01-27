from typing import Literal

from pydantic import BaseModel

SentenceLength = Literal["short", "medium", "long"]


class SentenceRequest(BaseModel):
    sentence_length: SentenceLength

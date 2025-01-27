import { SentenceLength } from "./api.type";
import { axiosInstance } from "./axiosInstance";

export const generateSentence = async (params: {
  sentence_length: SentenceLength;
}) => {
  return axiosInstance.post<{ data: string }>("/api/sentence/generate", {
    sentence_length: params.sentence_length,
  });
};

export const generateFeedback = async (params: {
  sentence: string;
  user_sentence: string;
}) => {
  return axiosInstance.post<{ data: string }>("/api/sentence/feedback", {
    sentence: params.sentence,
    user_sentence: params.user_sentence,
  });
};

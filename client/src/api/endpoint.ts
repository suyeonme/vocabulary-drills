import { SentenceLength } from "./api.type";
import { axiosInstance } from "./axiosInstance";

export const generateSentence = async (params: {
  sentence_length: SentenceLength;
}) => {
  return axiosInstance.post<{ data: string }>("/api/sentence/generate", {
    sentence_length: params.sentence_length,
  });
};

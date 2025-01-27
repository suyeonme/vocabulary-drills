import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateSentence } from "@/api/endpoint";
import type { SentenceLength } from "@/api/api.type";

const useGenerateSentence = ({
  sentenceLength,
}: {
  sentenceLength: SentenceLength;
}) => {
  const [sentence, setSentence] = useState<string>("");

  const mutation = useMutation({
    mutationFn: () => generateSentence({ sentence_length: sentenceLength }),
    onSuccess: (response) => {
      setSentence(response.data?.data ?? "");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    sentence,
    generateSentenceApi: () => mutation.mutate(),
    isLoading: mutation.isPending,
  };
};

export default useGenerateSentence;

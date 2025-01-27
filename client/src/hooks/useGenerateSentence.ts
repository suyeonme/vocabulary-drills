import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateSentence } from "@/api/endpoint";
import type { SentenceLength } from "@/api/api.type";

const useGenerateSentence = ({
  sentenceLength,
  onSuccess,
}: {
  sentenceLength: SentenceLength;
  onSuccess: (result: string) => void;
}) => {
  const [sentence, setSentence] = useState<string>("");

  const mutation = useMutation({
    mutationFn: () => generateSentence({ sentence_length: sentenceLength }),
    onSuccess: (response) => {
      const result = response.data?.data ?? "";
      setSentence(result);
      if (typeof onSuccess === "function") {
        onSuccess(result);
      }
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

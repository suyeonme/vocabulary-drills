import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateFeedback } from "@/api/endpoint";

const useGenerateFeedback = ({
  sentence,
  userSentence,
}: {
  sentence: string;
  userSentence: string;
}) => {
  const [feedback, setFeedback] = useState<string>("");

  const mutation = useMutation({
    mutationFn: () =>
      generateFeedback({ sentence, user_sentence: userSentence }),
    onSuccess: (response) => {
      const result = response.data?.data ?? "";
      setFeedback(result);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    feedback,
    generateFeedbackApi: () => mutation.mutate(),
    isLoading: mutation.isPending,
  };
};

export default useGenerateFeedback;

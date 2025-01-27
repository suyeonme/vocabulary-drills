import { useState } from "react";

interface FeedbackParams {
  sentence: string;
  userSentence: string;
}

export interface UseFeedbackParamsReturn {
  params: FeedbackParams;
  updateParams: (
    key: keyof FeedbackParams,
    value: FeedbackParams[keyof FeedbackParams]
  ) => void;
  resetParams: () => void;
}

const useFeedbackParams = (): UseFeedbackParamsReturn => {
  const [params, setParams] = useState<FeedbackParams>({
    sentence: "",
    userSentence: "",
  });

  const updateParams = <K extends keyof FeedbackParams>(
    key: K,
    value: FeedbackParams[K]
  ): void => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const resetParams = (): void => {
    setParams({
      sentence: "",
      userSentence: "",
    });
  };

  return { params, updateParams, resetParams };
};

export default useFeedbackParams;

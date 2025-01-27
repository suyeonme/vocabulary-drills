import { useState } from "react";
import { Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { SentenceLength } from "@/api/api.type";
import { Title } from "@/components/Title";
import useGenerateSentence from "@/hooks/useGenerateSentence";
import { UseFeedbackParamsReturn } from "@/hooks/useFeedbackParams";

const SENTENCE_LENGTHS = ["short", "medium", "long"];

interface GenerateSentenceProps {
  params: UseFeedbackParamsReturn["params"];
  updateParams: UseFeedbackParamsReturn["updateParams"];
  onClickFeedback: () => void;
  isFeedbackLoading: boolean;
}

const GenerateSentence = ({
  params,
  updateParams,
  onClickFeedback,
  isFeedbackLoading,
}: GenerateSentenceProps) => {
  const [sentenceLength, setSentenceLength] =
    useState<SentenceLength>("medium");

  const handleChangeSentenceLength = (length: SentenceLength): void => {
    setSentenceLength(length);
  };

  // 문장 생성
  const { sentence, generateSentenceApi, isLoading } = useGenerateSentence({
    sentenceLength,
    onSuccess: (result) => {
      updateParams("sentence", result);
    },
  });

  return (
    <>
      <div>
        <Title>Exercise sentence:</Title>
        <div className="flex items-center justify-between mb-2">
          <RadioGroup
            value={sentenceLength}
            onValueChange={handleChangeSentenceLength}
            className="flex"
          >
            {SENTENCE_LENGTHS.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <RadioGroupItem value={opt} id={opt} />
                <label htmlFor={opt} className="text-sm">
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </label>
              </div>
            ))}
          </RadioGroup>
          <Button
            variant="default"
            className="cursor-pointer"
            size="sm"
            onClick={generateSentenceApi}
          >
            Generate
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          </Button>
        </div>
        <Textarea value={sentence} placeholder="Practice sentence" rows={10} />
      </div>

      <div className="mt-10">
        <Title>Enter your sentence:</Title>
        <p className="text-xs text-gray-600 mb-1">
          Translate the exercise sentences into English
        </p>
        <Textarea
          placeholder="Enter your sentence"
          disabled={sentence === ""}
          rows={10}
          onChange={(e) => updateParams("userSentence", e.target.value)}
        />
        <Button
          variant="default"
          className="mt-5 cursor-pointer block ml-auto"
          disabled={
            sentence === "" || params.userSentence === "" || isFeedbackLoading
          }
          onClick={onClickFeedback}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default GenerateSentence;

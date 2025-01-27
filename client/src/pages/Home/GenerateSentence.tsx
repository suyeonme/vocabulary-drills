import { Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { SentenceLength } from "@/api/api.type";
import { Title } from "@/components/Title";

const SENTENCE_LENGTHS = ["short", "medium", "long"];

interface GenerateSentenceProps {
  sentence: string;
  sentenceLength: SentenceLength;
  onChangeRadioGroup: (length: SentenceLength) => void;
  isLoading: boolean;
  onGenerate: () => void;
}

const GenerateSentence = ({
  sentence,
  isLoading,
  sentenceLength,
  onChangeRadioGroup,
  onGenerate,
}: GenerateSentenceProps) => {
  return (
    <>
      <div>
        <Title>Exercise sentence:</Title>
        <div className="flex items-center justify-between mb-2">
          <RadioGroup
            value={sentenceLength}
            onValueChange={onChangeRadioGroup}
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
            onClick={onGenerate}
          >
            Generate
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          </Button>
        </div>
        <Textarea value={sentence} placeholder="Practice sentence" />
      </div>

      <div className="mt-10">
        <Title>Enter your sentence:</Title>
        <p className="text-xs text-gray-600 mb-1">
          Translate the exercise sentences into English
        </p>
        <Textarea
          placeholder="Enter your sentence"
          disabled={sentence === ""}
        />
        <Button
          variant="default"
          className="mt-5 cursor-pointer block ml-auto"
          onClick={onGenerate}
          disabled={sentence === ""}
        >
          Submit
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </div>
    </>
  );
};

export default GenerateSentence;

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
      <Title>Desired sentence length:</Title>
      <RadioGroup value={sentenceLength} onValueChange={onChangeRadioGroup}>
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
        className="mt-5 cursor-pointer"
        onClick={onGenerate}
      >
        Generate
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      </Button>

      {sentence !== "" && (
        <div className="mt-10">
          <Title>Practice sentence:</Title>
          <Textarea value={sentence} />
        </div>
      )}
    </>
  );
};

export default GenerateSentence;

import { useState } from "react";
import Header from "@/components/Header";
import type { SentenceLength } from "@/api/api.type";
import useGenerateSentence from "@/hooks/useGenerateSentence";
import GenerateSentence from "./GenerateSentence";
import { Title } from "@/components/Title";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const [sentenceLength, setSentenceLength] =
    useState<SentenceLength>("medium");

  const handleChangeSentenceLength = (length: SentenceLength): void => {
    setSentenceLength(length);
  };

  const { sentence, generateSentenceApi, isLoading } = useGenerateSentence({
    sentenceLength,
  });

  return (
    <section>
      <Header />
      <div className="flex flex-wrap lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 p-5 border-b lg:border-b-0 lg:border-r border-gray-400">
          <GenerateSentence
            sentence={sentence}
            sentenceLength={sentenceLength}
            onChangeRadioGroup={handleChangeSentenceLength}
            isLoading={isLoading}
            onGenerate={generateSentenceApi}
          />
        </div>

        <div className="w-full lg:w-1/2 p-5"></div>
      </div>
    </section>
  );
};

export default Home;

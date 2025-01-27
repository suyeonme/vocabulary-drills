import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import GenerateSentence from "./GenerateSentence";
import useFeedbackParams from "@/hooks/useFeedbackParams";
import useGenerateFeedback from "@/hooks/useGenerateFeedback";
import SentenceFeedback from "./SentenceFeedback";

const Home = () => {
  const { params, updateParams } = useFeedbackParams();

  const {
    feedback,
    generateFeedbackApi,
    isLoading: isFeedbackLoading,
  } = useGenerateFeedback({
    sentence: params.sentence,
    userSentence: params.userSentence,
  });

  return (
    <section>
      <Header />
      <div className="flex flex-wrap lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 p-5 border-b lg:border-b-0 lg:border-r border-gray-400">
          <GenerateSentence
            params={params}
            updateParams={updateParams}
            onClickFeedback={generateFeedbackApi}
          />
        </div>

        <div className="w-full lg:w-1/2 p-5">
          {isFeedbackLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <SentenceFeedback feedback={feedback} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;

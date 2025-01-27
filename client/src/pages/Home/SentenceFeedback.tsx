import { Title } from "@/components/Title";

const SentenceFeedback = ({ feedback }: { feedback: string }) => {
  return (
    <div>
      <Title>Feedback from AI teacher:</Title>
      {feedback === "" ? (
        <div className="flex items-center gap-2 mt-5">
          <img src="/assistant.png" alt="Assistant image" />
          <div>
            <p>1. Generate a practice sentence.</p>
            <p>2. Translate the practice sentence into English.</p>
            <p>3. Request feedback.</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm whitespace-pre-line">{feedback}</p>
          <img src="/good.png" alt="Assistant image" className="ml-auto" />
        </div>
      )}
    </div>
  );
};

export default SentenceFeedback;

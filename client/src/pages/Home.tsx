import Header from "@/components/Header";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const SENTENCE_LENGTHS = ["short", "medium", "long"];

const Home = () => {
  return (
    <section>
      <Header />
      <div className="p-5 flex flex-wrap lg:flex-row flex-col">
        <div className="w-full lg:w-1/2">
          <h1 className="text-md font-bold">
            Please select the desired sentence length:
          </h1>
          <RadioGroup defaultValue="medium">
            {SENTENCE_LENGTHS.map((opt) => (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={opt} id={opt} />
                <label htmlFor={opt} className="text-sm">
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </label>
              </div>
            ))}
          </RadioGroup>
          <Button variant="default" className="mt-5">
            Generate
          </Button>
        </div>

        <div className="w-full lg:w-1/2">test</div>
      </div>
    </section>
  );
};

export default Home;

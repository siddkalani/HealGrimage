import bg1 from "../assets/bg-1.jpg";
import hospital from "../assets/hospital.jpg";
import QuoteForm from "../components/QuoteForm";
import India from "../assets/india.svg";

const Landing = () => {
  return (
    <div className="flex w-full h-fit flex-col bg-[#FFFFFF] text-black">
      <div className="flex h-[856px] w-full overflow-hidden">
        <img src={bg1} alt="" className="w-[900px] h-[856px]" />
        <div className="text-[#000000] w-full h-full flex flex-col items-center mt-20">
          <div className="text-center w-[75ch] pb-20 text-lg">
            {'"T͟o͟p͟ D͟o͟c͟t͟o͟r͟s͟ and L͟u͟x͟u͟r͟y͟ H͟o͟t͟e͟l͟s͟ to W͟e͟l͟l͟n͟e͟s͟s͟ R͟e͟t͟r͟e͟a͟t͟s͟"'}
          </div>
          <img src={India} alt="" className="w-[200px]" />
          <div className="w-[680px] text-center">
            <h1 className="text-2xl font-karma">
              Discover World-Class Healthcare in India:
            </h1>
            <h2 className="text-3xl font-karma">
              Exceptional Treatments, Unmatched Value
            </h2>
          </div>
        </div>
      </div>

      <div id="section" className="w-full flex items-center">
        <QuoteForm />
        <img src={hospital} alt="" className="w-[800px] h-auto" />
      </div>
    </div>
  );
};

export default Landing;

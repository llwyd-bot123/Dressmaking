import Em from "./sub_components/Em";
import Hero from "./sub_components/Hero";
import Pec from "./sub_components/PEC";
import Quarters from "./sub_components/Quarters";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Quarters />
      <Pec />
      <Em />
    </div>
  );
}

export default Home;

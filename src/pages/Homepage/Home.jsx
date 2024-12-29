import Em from "./sub_components/Em";
import Hero from "./sub_components/Hero";
import Pec from "./sub_components/PEC";
import Quarters from "./sub_components/Quarters";
import placeholderImage from "../../assets/images/placeholder.png";
function Home() {
  return (
    <div className="flex flex-col">
      <Hero placeholderImage={placeholderImage} />
      <Quarters />
      <Pec placeholderImage={placeholderImage} />
      <Em placeholderImage={placeholderImage} />
    </div>
  );
}

export default Home;

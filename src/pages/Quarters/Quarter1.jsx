import { Link } from "react-router-dom";
import lockImage from "../../assets/images/lock.png";
import unlockImage from "../../assets/images/unlock.png";
import checkImage from "../../assets/images/check.png";
import { useNavigate } from "react-router-dom";

function Quarters() {
  const navigate = useNavigate();

  const handleQuarter1Btn = () => {
    navigate("/quarter1");
  };

  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-12 px-5 lg:col-span-2 lg:h-screen lg:bg-custom_color1">
        <div className="flex-col hidden my-8 lg:my-16 lg:flex">
          <button
            onClick={handleQuarter1Btn}
            className="py-4 lg:py-6 bg-secondarybg hover:bg-secondarybg/50"
          >
            Quarter 1
          </button>
          <button
            disabled
            className="py-4 text-gray-400 lg:py-6 hover:bg-secondarybg/50"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="mr-4">Quarter 2</span>{" "}
              <img src={lockImage} alt="Lock Icon" />
            </div>
          </button>
          <button
            disabled
            className="py-4 text-gray-400 lg:py-6 hover:bg-secondarybg/50"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="mr-4">Quarter 3</span>{" "}
              <img src={lockImage} alt="Lock Icon" />
            </div>
          </button>
          <button
            disabled
            className="py-4 text-gray-400 lg:py-6 hover:bg-secondarybg/50"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="mr-4">Quarter 4</span>{" "}
              <img src={lockImage} alt="Lock Icon" />
            </div>
          </button>
        </div>

        <div className="mt-8 lg:hidden">
          <label
            htmlFor="quarter-select"
            className="block mb-3 text-lg font-bold lg:text-xl"
          >
            Select Quarter
          </label>
          <select
            id="quarter-select"
            name="quarter"
            className="w-full p-6 border border-r-[24px] text-lg md:text-xl border-transparent rounded-md"
          >
            <option value="quarter1">Quarter 1</option>
            <option disabled value="quarter2">
              Quarter 2
            </option>
            <option disabled value="quarter3">
              Quarter 3
            </option>
            <option disabled value="quarter4">
              Quarter 4
            </option>
          </select>
        </div>
      </div>

      <div className="col-span-12 px-5 mb-8 lg:col-span-10 md:px-8">
        <div className="flex flex-col">
          <h1 className="mt-8 md:mt-16 text-3xl md:text-5xl leading-tight md:leading-[72px] mb-6 md:mb-12 text-left tracking-wide">
            Quarter 1
          </h1>

          <div className="p-6 bg-white border border-black_50 md:p-12">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Pre-test
                </Link>
                <img src={checkImage} alt="Lock Icon" />
              </div>
              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/q1_lesson1"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Lesson 1
                </Link>
                <img src={unlockImage} alt="Lock Icon" />
              </div>

              <div className="pl-4 md:pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  <Link
                    disabled
                    to="/q1_quiz1"
                    className="text-lg md:text-xl hover:text-text_link hover:underline"
                  >
                    Quiz 1
                  </Link>
                  <img src={lockImage} alt="Lock Icon" />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Lesson 2
                </Link>
                <img src={lockImage} alt="Lock Icon" />
              </div>
              <div className="pl-4 md:pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  <Link
                    to="/"
                    className="text-lg md:text-xl hover:text-text_link hover:underline"
                  >
                    Quiz 2
                  </Link>
                  <img src={lockImage} alt="Lock Icon" />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Lesson 3
                </Link>
                <img src={lockImage} alt="Lock Icon" />
              </div>
              <div className="pl-4 md:pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  <Link
                    to="/"
                    className="text-lg md:text-xl hover:text-text_link hover:underline"
                  >
                    Quiz 3
                  </Link>
                  <img src={lockImage} alt="Lock Icon" />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Lesson 4
                </Link>
                <img src={lockImage} alt="Lock Icon" />
              </div>
              <div className="pl-4 md:pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  <Link
                    to="/"
                    className="text-lg md:text-xl hover:text-text_link hover:underline"
                  >
                    Quiz 4
                  </Link>
                  <img src={lockImage} alt="Lock Icon" />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                <Link
                  to="/"
                  className="text-lg md:text-xl hover:text-text_link hover:underline"
                >
                  Post-test
                </Link>
                <img src={lockImage} alt="Lock Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quarters;

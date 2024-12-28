import { Link } from "react-router-dom";

function Quarters() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="h-screen col-span-2 bg-custom_color1">
        <div className="flex flex-col my-16">
          <button className="py-6 bg-secondarybg">Quarter 1</button>
          <button className="py-6">Quarter 1</button>
          <button className="py-6">Quarter 1</button>
          <button className="py-6">Quarter 1</button>
        </div>
      </div>
      <div className="col-span-10 px-8">
        <div className="flex flex-col">
          <h1 className="mt-16 leading-[72px] mb-12 text-5xl tracking-wide ">
            Quarter 1
          </h1>
          <div className="p-12 bg-white">
            <div className="grid grid-cols-1">
              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/" className="px-0 py-2 mx-0 text-xl">
                  Pre-test
                </Link>
                <i>1</i>
              </div>
              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/q1_lesson1" className="px-0 py-2 mx-0 text-xl">
                  Lesson 1
                </Link>
                <i>1</i>
              </div>
              <div className="pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  {" "}
                  <Link to="/" className="px-0 py-2 mx-0 text-xl">
                    Quiz 1
                  </Link>
                  <i>1</i>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/" className="px-0 py-2 mx-0 text-xl">
                  Lesson 2
                </Link>
                <i>1</i>
              </div>
              <div className="pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  {" "}
                  <Link to="/" className="px-0 py-2 mx-0 text-xl">
                    Quiz 2
                  </Link>
                  <i>1</i>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/" className="px-0 py-2 mx-0 text-xl">
                  Lesson 3
                </Link>
                <i>1</i>
              </div>
              <div className="pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  {" "}
                  <Link to="/" className="px-0 py-2 mx-0 text-xl">
                    Quiz 3
                  </Link>
                  <i>1</i>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/" className="px-0 py-2 mx-0 text-xl">
                  Lesson 4
                </Link>
                <i>1</i>
              </div>
              <div className="pl-10">
                <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                  {" "}
                  <Link to="/" className="px-0 py-2 mx-0 text-xl">
                    Quiz 4
                  </Link>
                  <i>1</i>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between py-2 border-b border-hr_color">
                {" "}
                <Link to="/" className="px-0 py-2 mx-0 text-xl">
                  Post-test
                </Link>
                <i>1</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quarters;

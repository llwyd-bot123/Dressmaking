import { useNavigate } from "react-router-dom";

function Quarter1() {
  const navigate = useNavigate();

  const handleQuarter1Btn = () => {
    navigate("/quarter1");
  };

  return (
    <div className="px-5 bg-white lg:px-20 ">
      <h1 className="my-10 text-3xl tracking-wide text-right lg:my-28 lg:text-5xl">
        Quarters
      </h1>
      <div className="grid grid-cols-1 gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-2 mb-28">
        <div className="">
          <h3 className="mb-6 text-lg font-bold lg:text-xl">Quarter 1</h3>
          <p className="mb-8 text-base lg:text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <button
            onClick={handleQuarter1Btn}
            className="px-6 py-3 text-base border rounded-md lg:text-lg lg:px-12 hover:bg-blue-100 text-text_link border-text_link text-md"
          >
            Start
          </button>
        </div>
        <div className="">
          <h3 className="mb-6 text-lg font-bold lg:text-xl">Quarter 2</h3>
          <p className="mb-8 text-base lg:text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <button
            disabled
            className="px-6 py-3 text-base text-gray-400 bg-gray-200 border border-gray-400 rounded-md opacity-50 cursor-not-allowed lg:text-lg lg:px-12 text-md"
          >
            Start
          </button>
        </div>
        <div className="">
          <h3 className="mb-6 text-lg font-bold lg:text-xl">Quarter 3</h3>
          <p className="mb-8 text-base lg:text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <button
            disabled
            className="px-6 py-3 text-base text-gray-400 bg-gray-200 border border-gray-400 rounded-md opacity-50 cursor-not-allowed lg:text-lg lg:px-12 text-md"
          >
            Start
          </button>
        </div>
        <div className="">
          <h3 className="mb-6 text-lg font-bold lg:text-xl">Quarter 4</h3>
          <p className="mb-8 text-base lg:text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <button
            disabled
            className="px-6 py-3 text-base text-gray-400 bg-gray-200 border border-gray-400 rounded-md opacity-50 cursor-not-allowed lg:text-lg lg:px-12 text-md"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quarter1;

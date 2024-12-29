import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="my-20 lg:my-28">
      <div className="flex flex-col items-center justify-center mb-20 text-center">
        <h1 className="mb-6 text-2xl tracking-wide lg:text-5xl">
          Be part of the class!
        </h1>
        <p className="mt-2 text-xl lg:w-3/4 lg:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="flex items-center justify-center px-5 lg:px-0">
        <div className="p-4 bg-white border lg:p-16 lg:w-[700px] border-black_50">
          <p className="mt-2 mb-8 text-lg font-bold lg:text-2xl">Sign Up</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-7 mb-7">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 text-base border lg:text-lg border-black_50"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 text-base border lg:text-full border-black_50"
            />

            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 text-base border lg:text-full border-black_50"
            />

            <input
              type="text"
              placeholder="Grade"
              className="w-full p-3 text-base border lg:text-full border-black_50"
            />
          </div>
          <input
            type="text"
            placeholder="Section"
            className="w-full p-3 text-base border mb-7 lg:text-full border-black_50"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-8 text-base border lg:text-full border-black_50"
          />
          <input
            type="text"
            placeholder="Create Password"
            className="w-full p-3 mb-8 text-base border lg:text-full border-black_50"
          />
          <div className="flex flex-row items-center justify-between">
            <button className="px-6 py-3 text-base text-white rounded-md lg:px-12 lg:text-lg bg-text_link">
              Register
            </button>
            <p className="text-base text-right lg:text-lg">
              Already have an account?{" "}
              <Link to="/login" className="text-text_link">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

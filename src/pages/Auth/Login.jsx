import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="my-20 lg:my-28">
      <div className="flex flex-col items-center justify-center mb-20 text-center">
        <h1 className="mb-6 text-2xl tracking-wide lg:text-5xl">
          Welcome to the class!
        </h1>
        <p className="mt-2 text-xl lg:w-3/4 lg:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="flex items-center justify-center px-5 lg:px-0">
        <div className="p-4 bg-white border lg:p-16 lg:w-[700px] border-black_50">
          <p className="mt-2 mb-8 text-lg font-extrabold lg:text-2xl">Log In</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 text-base border lg:text-lg mb-7 border-black_50"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full p-3 text-base border lg:text-lg mb-7 border-black_50"
          />
          <div className="flex flex-row items-center justify-between ">
            <button className="px-6 py-3 text-base text-white rounded-md lg:px-12 lg:text-lg bg-text_link">
              Log In
            </button>
            <p className="text-base text-right lg:text-lg">
              To register{" "}
              <Link to="/register" className="text-text_link">
                click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

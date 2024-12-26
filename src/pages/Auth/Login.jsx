import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="my-28">
      <div className="flex flex-col items-center justify-center mb-20 text-center">
        <h1 className="mb-6 text-5xl tracking-wide">Welcome to the class!</h1>
        <p className="w-3/4 mt-2 text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-1/3 p-16 bg-white border border-black_50">
          <p className="mt-2 mb-8 text-2xl font-extrabold">Log In</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border mb-7 border-black_50"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full p-3 mb-8 border border-black_50"
          />
          <div className="flex flex-row items-center justify-between">
            <button className="px-12 py-3 text-white rounded-md bg-text_link text-md">
              Log In
            </button>
            <p>
              To register{" "}
              <Link to="/" className="text-text_link">
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

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow-sm">
      <div className="sm:px-6 lg:px-20">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center mr-12 shrink-0">
              <img
                className="w-auto h-8 mr-3"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <Link to="/" className="px-3 py-2 text-xl">
                Photo
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Link
                to="/"
                className="px-3 tracking-wide text-md text-text_link"
              >
                Introduction
              </Link>
              <Link
                to="/"
                className="px-3 tracking-wide text-md text-text_link"
              >
                Quarters
              </Link>
              <Link
                to="/"
                className="px-3 tracking-wide text-md text-text_link"
              >
                Personal Entrepreneurial Competencies
              </Link>
              <Link
                to="/"
                className="px-3 tracking-wide text-md text-text_link"
              >
                Environment and Market
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="px-12 py-3 border rounded-md text-text_link border-text_link text-md"
              >
                Log in
              </button>

              <button
                onClick={handleRegisterClick}
                className="px-12 py-3 text-white border rounded-md bg-text_link text-md"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            aria-current="page"
          >
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 tetext-md">
            Team
          </a>
          <a href="#" className="block px-3 py-2 tetext-md">
            Projects
          </a>
          <a href="#" className="block px-3 py-2 tetext-md">
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

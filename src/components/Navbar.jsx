import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import profileLogo from "../assets/images/gg_profile.png";

function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow-sm">
      <div className="lg:px-20">
        <div className="relative flex items-center justify-between h-20 px-5 lg:px-0 ">
          <div className="flex flex-row space-x-20">
            <div className="flex items-center justify-start space-x-0 lg:space-x-3">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <Link to="/" className="px-3 py-2 text-xl">
                Photo
              </Link>
            </div>
            <div className="items-center justify-center hidden space-x-4 lg:flex">
              <Link
                to="/introduction"
                className="px-3 tracking-wide transition duration-300 ease-in-out text-md text-text_link hover:text-blue-700"
              >
                Introduction
              </Link>
              <Link
                to="/quarter1"
                className="px-3 tracking-wide transition duration-300 ease-in-out text-md text-text_link hover:text-blue-700 "
              >
                Quarters
              </Link>
              <Link
                to="/"
                className="px-3 tracking-wide transition duration-300 ease-in-out text-md text-text_link hover:text-blue-700 "
              >
                Personal Entrepreneurial Competencies
              </Link>
              <Link
                to="/"
                className="px-3 tracking-wide transition duration-300 ease-in-out text-md text-text_link hover:text-blue-700 "
              >
                Environment and Market
              </Link>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              ref={hamburgerRef}
              onClick={toggleMobileMenu}
              className="text-text_link focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:flex">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="px-12 py-3 transition duration-300 ease-in-out border rounded-md text-text_link border-text_link text-md hover:bg-blue-100"
              >
                Log in
              </button>

              <button
                onClick={handleRegisterClick}
                className="px-12 py-3 text-white transition duration-300 ease-in-out border rounded-md bg-text_link text-md hover:bg-blue-700"
              >
                Register
              </button>
            </div>

            {/* profile avatar when logged in (temporary) */}
            {/* <img src={profileLogo} alt="" /> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/introduction"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base transition duration-200 rounded-md text-md text-text_link hover:bg-gray-600 hover:text-white"
            >
              Introduction
            </Link>
            <Link
              to="/quarter1"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base transition duration-200 rounded-md text-md text-text_link hover:bg-gray-600 hover:text-white"
            >
              Quarters
            </Link>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base transition duration-200 rounded-md text-md text-text_link hover:bg-gray-600 hover:text-white"
            >
              Personal Entrepreneurial Competencies
            </Link>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base transition duration-200 rounded-md text-md text-text_link hover:bg-gray-600 hover:text-white"
            >
              Environment and Market
            </Link>

            <div className="flex flex-row px-3 pt-2 space-x-4">
              <button
                onClick={handleLoginClick}
                className="px-6 py-2 text-base transition duration-200 border rounded-md text-text_link border-text_link text-md hover:bg-gray-600 hover:text-white"
              >
                Log in
              </button>

              <button
                onClick={handleRegisterClick}
                className="px-6 py-2 text-base text-white transition duration-200 border rounded-md bg-text_link text-md hover:bg-blue-600 hover:text-white"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

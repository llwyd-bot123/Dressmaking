import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("./components/Navbar"));

// const ContactPage = lazy(() => import('./pages/ContactPage'));
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="pt-20">
          {" "}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

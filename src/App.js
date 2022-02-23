import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const Games = lazy(() => import("./components/games/games"));
  const About = lazy(() => import("./components/about/about"));
  const MyAccount = lazy(() => import("./components/myAccount/myAccount"));
  const Login = lazy(() => import("./components/login/login"));
  const Registration = lazy(() =>
    import("./components/registration/registration")
  );

  return (
    <div className="page_container">
    <div className="content_wrap">
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="games/*" element={<Games />} />
          <Route path="about" element={<About />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Routes>
      </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;

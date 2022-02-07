import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const Games = lazy(() => import("./components/games/games"));
  const News = lazy(() => import("./components/news/news"));
  const Support = lazy(() => import("./components/support/support"));
  const MyAccount = lazy(() => import("./components/myAccount/myAccount"));

  return (
    <div className="">
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="games/*" element={<Games />} />
          <Route path="news" element={<News />} />
          <Route path="support" element={<Support />} />
          <Route path="my-account" element={<MyAccount />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

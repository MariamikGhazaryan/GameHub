import { Route, Routes } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';
import Games from "./components/games/games";
import MyAccount from "./components/myAccount/myAccount";
import Support from "./components/support/support";
import News from "./components/news/news";

function App() {



  return (
      <div className=''>
          <Header/>
          <Routes>
              <Route path="games/*" element={<Games />} />
              <Route path="news" element={<News />} />
              <Route path="support" element={<Support />} />
              <Route path="my-account" element={<MyAccount />} />
          </Routes>
          <Footer/>
      </div>

  );
}

export default App;

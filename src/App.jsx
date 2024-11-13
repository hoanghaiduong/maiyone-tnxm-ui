import { useEffect } from "react";

import { BrowserRouter, Route, Router, Routes, useLocation,  } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import HomePage from "./Pages/HomePage";
function App() {

  
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <>
    <BrowserRouter>
     
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

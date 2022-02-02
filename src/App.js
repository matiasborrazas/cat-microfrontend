
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<RandomCat />}></Route>
        <Route  exact path="/cat/:greeting" element={<GreetingCat history={history}/>} ></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
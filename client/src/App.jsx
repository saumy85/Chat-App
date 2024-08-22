import { useState } from "react";
//import dotenv from "dotenv";
//dotenv.config();

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

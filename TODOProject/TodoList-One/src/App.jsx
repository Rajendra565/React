import { useState } from "react";
import "./App.css";
import AppName from "./Comapanent/AppName";
import InputBox from "./Comapanent/InputBox";
import Items from "./Comapanent/Items";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center  w-100 container gap-2">
        <AppName/>
        <div className="container text-center w-75 d-flex flex-column items-center gap-4">
         <InputBox/>
          <Items items="Buy Milk" date="30/2/2023"/>
          <Items items="Go to Collage" date="20/10/2022"/>
          
        </div>
      </div>
    </>
  );
}

export default App;

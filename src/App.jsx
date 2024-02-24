import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Image from "./Components/Image";
import NameComponent from "./Components/NameComponent";
import Hello from "./Components/Hello";
import Form from "./Components/Form";
import Facebook from "./Components/Facebook";
import SignUp from "./Components/SignUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen w-full">
        <div className="w-1/2 bg-purple-300 md:block hidden">
          <Image />
        </div>
        <div className="w-full md:w-1/2 bg-red-100 shadow-2xl flex flex-col justify-center items-center">
          <div className="w-full md:w-1/2 bg-pink-50 shadow-2xl flex flex-col justify-center items-center rounded-3xl">
            <NameComponent />
            <Hello />
            <Form />
            <div className="font-bold">OR</div>
            <Facebook />
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

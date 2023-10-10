import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );

  // return(
  // <>
  // <div><h1 className='text-red-500'>hello</h1></div>
  // <div><h3 className='text-red-800'>hello</h3></div>
  // </>
  //   )
}

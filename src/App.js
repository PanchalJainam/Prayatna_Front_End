import "./App.css";
import Router from "./router/Router";
// import "../public/style.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Navbar from "./Components/Navbar";
// import Signup from "./Pages/Signup";
// import SignIn from "./Pages/SignIn";
// import Form from "./Components/Form";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Form /> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/registration">
            <Route index element={<Signup />} />
          </Route>
          <Route path="/login">
            <Route index element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Router />
    </>
  );
};

export default App;

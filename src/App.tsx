import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import SendMoney from "./pages/sendMoney";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sendMoney" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

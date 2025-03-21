import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import SendMoney from "./pages/sendMoney";
import ContactMain from "./pages/contact";
import ScrollToTop from "./pages/nav/ScrollToTop";
import About from "./pages/about";
import Testimonials from "./pages/testimonials";
import Track from "./pages/track";
import Password from "./pages/password/Password";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/sendMoney" element={<SendMoney />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

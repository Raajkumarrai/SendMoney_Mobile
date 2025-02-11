import FootContact from "../nav/FootContact";
import TopBarNav from "../nav/TopBarNav";
import TopNav from "../nav/TopNav";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <div>
      <TopNav />
      <TopBarNav />
      <HomePage />
      <FootContact />
    </div>
  );
};

export default Home;

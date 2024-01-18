import Top from "../components/Top";
import Home from"../components/Home";
import Collection from"../components/Collection"
import Inspiration from "../components/Inspiration";
import Approach from "../components/Approach";
import HomeProducts from "./HomeProducts";
import { useSelector } from "react-redux";
import Divider from "../components/divider";

const HomePage = () => {
  const user = useSelector((store) => store.authReducer.user);

  return (
    <div>
      
      <Home/>
      <Divider/>
      <Collection/>
      <Divider/>
      <Top />
      <Divider/>
      <Inspiration />
      <Divider />
      <Approach />
    </div>
  );
};

export default HomePage;

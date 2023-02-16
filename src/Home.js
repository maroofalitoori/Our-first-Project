import "./App.css";
import Header from "./Header";
import SideBar from "./side-bar";
import Routing from "./main-pages/routing";

function Home() {
  return (
    <div className="bg-black">
      <Header />
      <div className="flex">
        <SideBar />
        <Routing />
      </div>
    </div>
  );
}

export default Home;

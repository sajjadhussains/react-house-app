import "./App.css";
import Banner from "./components/Banner/Banner";
import BestSelling from "./components/BestSellingCards/BestSellingCards";
import Blogs from "./components/Blogs/Blogs";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import GameStructures from "./components/GameStructures/GameStructures";
import Navbar from "./components/Navbar/Navbar";
import PlayHouseImg from "./components/PlayHouseImg/PlayHouseImg";
import PlayHouses from "./components/PlayHouses/PlayHouses";
import Reviews from "./components/Reviews/Reviews";
import SignUpForNews from "./components/SignUpForNews/SignUpForNews";
import TopBar from "./components/TopBar/TopBar";
import WhyPlayHouse from "./components/WhyPlayHouse/WhyPlayHouse";

function App() {
  return (
    <>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
      <GameStructures></GameStructures>
      <BestSelling></BestSelling>
      <PlayHouses></PlayHouses>
      <WhyPlayHouse></WhyPlayHouse>
      <Reviews></Reviews>
      <Faq></Faq>
      <PlayHouseImg></PlayHouseImg>
      <Blogs></Blogs>
      <SignUpForNews></SignUpForNews>
      <Footer></Footer>
    </>
  );
}

export default App;

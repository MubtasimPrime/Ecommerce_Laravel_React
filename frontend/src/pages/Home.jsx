import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  const newArrivals = useLoaderData();

  return (
    <>
      <header className="bg-black py-3">
        <h1 className="text-white text-center">Your Fashion Partner</h1>
      </header>
      <Hero></Hero>
      <NewArrivals newArrivals={newArrivals}></NewArrivals>
    </>
  );
};

export default Home;

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <section className="font">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </section>
  );
};

export default MainLayout;

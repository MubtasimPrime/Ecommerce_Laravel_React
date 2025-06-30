import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <section className="font">
      <Outlet></Outlet>
    </section>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-screen overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

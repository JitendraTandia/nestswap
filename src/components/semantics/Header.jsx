import { useRef } from "react";
import Logo from "../../assets/nestswap.png";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { NavList } from "../../data/SemanticsData";

const Header = () => {
  const navDiv = useRef();

  return (
    <header className="h-fit bg-white flex items-center justify-between sticky top-0 z-10 text-xl py-3 shadow lg:justify-around">
      {/* COMPANY LOGO */}
      <div className="pl-5 lg:pl-0 ">
        <Link to={"/"}>
          <img src={Logo} alt="NestSwap Logo" className="h-12" />
        </Link>
      </div>

      {/* MOBILE RESPONSIVE MENU WITH LIST ITEMS */}
      <nav
        ref={navDiv}
        className="absolute bg-white shadow-lg lg:shadow-none min-h-[40vh] md:min-h-fit flex items-center justify-center left-0 top-[-80vh] duration-1000 w-full lg:w-auto lg:static"
      >
        <ul className="flex flex-col lg:flex-row items-center gap-4 my-5">
          {NavList.map((item, index) => (
            <Link key={index} to={item.url}>
              <li className="px-2.5 font-semibold hover:text-gray-400 duration-300 hover:cursor-pointer">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <div id="options" className="flex items-center font-medium ">
        {/* Mobile Menu bar */}
        <IoIosMenu
          className="bg-white hover:text-gray-400 duration-300 hover:cursor-pointer size-10 text-3xl lg:hidden"
          onClick={(e) => {
            navDiv.current.classList.toggle("top-[-80vh]");
            navDiv.current.classList.toggle("top-[8vh]");
          }}
        />
      </div>
    </header>
  );
};

export default Header;

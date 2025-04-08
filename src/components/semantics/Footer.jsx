import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/nestswap.png";
import { FooterList } from "../../data/SemanticsData";

const Footer = () => {
  return (
    <footer className="p-2 bg-white shadow-lg">
      {/* <div className="flex items-center flex-col p-2">
          <img
            className="my-5 "
            src={Logo}
            width={150}
            height={150}
            alt="Company-Logo"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </p>
        </div> */}

      {/* SOCIALS */}
      <div className="flex justify-between md:justify-end gap-4 text-white text-xl px-5 md:p-0">
        <div className="rounded-full bg-black p-2">
          <FaTwitter />
        </div>
        <div className="rounded-full bg-black p-2">
          <FaFacebook />
        </div>
        <div className="rounded-full bg-black p-2">
          <FaLinkedin />
        </div>
        <div className="rounded-full bg-black p-2">
          <FaInstagram />
        </div>
      </div>

      {/* FOOTER LISTS */}
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div className="flex flex-col p-2 text-center lg:text-left">
          <h3 className="text-gray-600">Let's start working together</h3>
          <h2 className="font-bold text-2xl">
            <a href="mailto:nestswap@gmail.com">nestswap@gmail.com</a>
          </h2>
          <p className="text-gray-400 text-sm mt-10 hidden md:block">
            © Copyright 2025 by NestSwap
          </p>
        </div>

        <div className="flex flex-col p-2" id="options">
          <ul className="flex flex-col text-center ml-2 md:text-left">
            {FooterList.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              className="bg-white p-2 rounded-l-lg focus-visible:outline-0 text-sm my-2"
              placeholder="Enter your email to subscribe"
            />
            <button className="bg-[#344DEF] text-white font-semibold rounded-r-lg p-2 cursor-pointer hover:bg-[#2828ff]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* PRIVACY POLICiES */}
      <div className="text-sm text-gray-400 text-center ">
        <p>Privacy Policy . Stylus Marketing . Terms & Conditions</p>
        <p className="md:hidden">© Copyright 2025 by NestSwap</p>
      </div>
    </footer>
  );
};

export default Footer;

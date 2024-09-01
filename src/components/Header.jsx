import logo from "../assets/logo-no-background.svg";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
import HeaderClick from "./HeaderClick";
import { useState } from "react";
import HoverDropDown from "./HoverDropDown";
import { treatments } from "../assets/treatments";
import { cities } from "../assets/cities";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [dropDown, setDropDown] = useState({
    visibility: false,
    identifier: "",
  });

  return (
    <div className="w-screen h-[110px] bg-[#052560] text-white text-xl overflow-hidden font-Poppins">
      <ul className="flex list-none gap-5 items-center justify-between h-full">
        <li className="flex h-full items-center gap-5 ml-2">
          <div className="w-[190px] rounded-full m-2">
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-7 h-full items-center">
            <HeaderClick>
              <NavLink to="/">Home</NavLink>
            </HeaderClick>
            <HeaderClick
              onMouseEnter={() =>
                setDropDown({ visibility: true, identifier: "treatment" })
              }
              onMouseLeave={() =>
                setDropDown({ visibility: false, identifier: "treatment" })
              }
            >
              Treatments {<RiArrowDropDownLine color="white" size="1.2rem" />}
            </HeaderClick>
            <HeaderClick
              onMouseEnter={() =>
                setDropDown({ visibility: true, identifier: "city" })
              }
              onMouseLeave={() =>
                setDropDown({ visibility: false, identifier: "city" })
              }
            >
              Cities {<RiArrowDropDownLine color="white" size="1.2rem" />}
            </HeaderClick>
            <HeaderClick>Health-Card</HeaderClick>
            <HeaderClick>Packages</HeaderClick>
            {/* <HeaderClick>
              <input type="text" className="outline-none p-1 text-black h-[28px] rounded-sm" placeholder="Search here"/>
              <CiSearch color="white" />
            </HeaderClick> */}
          </ul>
        </li>

        <li className="mr-7 text-base">
          <ul className="flex h-full items-center gap-10">
            <li className="rounded-xl bg-[#CEF4EB] text-[#052560] p-2">
              <button>
                <HashLink smooth to="/#section">
                  {" "}
                  Get a Quote{" "}
                </HashLink>
              </button>
            </li>
            <li className="rounded-xl bg-[#CEF4EB] text-[#052560] p-2">
              <button>Log In</button>
            </li>
          </ul>
        </li>
      </ul>

      {dropDown.visibility &&
        (dropDown.identifier == "treatment" ? (
          <HoverDropDown
            onMouseEnter={() =>
              setDropDown({ visibility: true, identifier: "treatment" })
            }
            onMouseLeave={() =>
              setDropDown({ visibility: false, identifier: "treatment" })
            }
          >
            <NavLink to="/treatment">
              <div className="grid grid-cols-3 grid-rows-3 w-full h-full p-2 gap-2">
                {treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center"
                  >
                    {
                      <img
                        src={treatment.logo}
                        alt=""
                        color="white"
                        className="w-[40px]"
                      />
                    }
                    <p>{treatment.name}</p>
                  </div>
                ))}
              </div>
            </NavLink>
          </HoverDropDown>
        ) : (
          <HoverDropDown
            onMouseEnter={() =>
              setDropDown({ visibility: true, identifier: "city" })
            }
            onMouseLeave={() =>
              setDropDown({ visibility: false, identifier: "city" })
            }
          >
            <NavLink to="/city">
              <div className="grid grid-cols-3 grid-rows-3 w-full h-full p-2 gap-2">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center"
                  >
                    {
                      <img
                        src={city.logo}
                        alt=""
                        color="white"
                        className="w-[40px]"
                      />
                    }
                    <p>{city.name}</p>
                  </div>
                ))}
              </div>
            </NavLink>
          </HoverDropDown>
        ))}
    </div>
  );
};

export default Header;

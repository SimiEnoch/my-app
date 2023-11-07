import React from "react";
import { MdOutlineAccountCircle, MdLocalOffer } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbBrandAmongUs } from "react-icons/tb";
import { HiBuildingStorefront } from "react-icons/hi2";
import { SiWish } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
import { BsQuestionSquare } from "react-icons/bs";

export const Sidebar = ({ sideBarToggle }) => {
  return (
    <div>
       <aside
        id="sidebar"
        className={`${sideBarToggle ? "sidebar-responsive" : ""} h-screen w-64 
        `}
      >
        {/* <div className="sidebar-title ">
            <div className="sidebar-brand flex gap-2">
              <h3 className=" mt-2 font-[Calibri] text-[16px]"></h3>
            </div>
            <span className="icon close_icon" onClick={openSideBar}>
              X
            </span>
          </div> */}

        <ul className=" mt-2 font-semibold text-black">
          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <AiTwotoneHome />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">Home</p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <TbBrandAmongUs />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                New Arrivals
              </p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <HiBuildingStorefront />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Brands Outlets
              </p>
            </Link>
          </li>

          <hr />
          <h5 className="text-[18px] font-[Calibri] ml-8 mt-2">You & Me</h5>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to="sign-up"
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <MdOutlineAccountCircle />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Account
              </p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <SiWish />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Wishlist
              </p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <MdLocalOffer />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Special Offers
              </p>
            </Link>
          </li>

          <hr />
          <h5 className="text-[18px] font-[Calibri] ml-10 mt-2">Others</h5>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <BsQuestionSquare />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">FAQ's</p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <FcSalesPerformance />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Deals/Sales
              </p>
            </Link>
          </li>

          <li className="sidebar-list-item  space-y-1 flex ml-3 gap-7">
            <Link
              to=""
              className="flex gap-5 hover:bg-gray-200 px-2 rounded-lg hover:text-blue-800"
            >
              <p className="mt-3">
                <MdLocalOffer />
              </p>
              <p className=" font-paragraph rounded px-2 text-[14px]">
                Special Offers
              </p>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

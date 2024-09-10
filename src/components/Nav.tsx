import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../assets/images/fav.png";
import config from "../config.json";

const Nav = ({ navIsSticky = true }: { navIsSticky?: boolean }) => {
  return (
    <div
      className={`py-2 px-4 bg-white shadow ${
        navIsSticky ? "sticky" : ""
      } top-0 left-0 z-50 w-full`}
    >
      <nav className="flex justify-between items-center w-full text-black max-md:hidden max-w-screen-xl mx-auto">
        <a href="/" className="text-2xl font-bold flex gap-2">
          <img src={logoImg.src} alt="logo" className="w-10 bg-white rounded-sm h-auto" />
          <div className="text-sm font-bold">
            <h1 className="text-orange-500">PHS</h1>
            <h1 className="text-primary font-semibold">THE BEST CLASS</h1>
          </div>
        </a>
        <ul className="flex gap-4 items-center text-sm">
          {config.pages.map((page) => (
            <li key={page.name}>
              <a href={page.url} className="hover:text-gray-600 transition">{page.name}</a>
            </li>
          ))}
        </ul>
        <a href={config.bookingLink} target="_blank">
          <button className="btn btn-primary text-white rounded-md">Book Now</button>
        </a>
      </nav>
      <nav className="flex justify-between items-center md:hidden">
        <div className="flex items-center gap-2">
          <label htmlFor="my-drawer" className="drawer-button">
            <Icon icon="mdi:menu" className="text-black text-3xl" />
          </label>
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoImg.src}
              alt="logo"
              width={400}
              height={400}
              className="w-6 bg-white rounded-md"
            />
            <div className="text-xs font-bold">
              <h1 className="text-orange-500">Cross Country</h1>
              <h1 className="text-primary font-semibold">Water Tank Cleaning</h1>
            </div>
          </a>
        </div>
        <a href={config.bookingLink} target="_blank">
          <button className="btn btn-primary btn-sm text-white rounded-md">Book Now</button>
        </a>
      </nav>
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-black min-h-full w-80 p-4 text-base">
            {config.pages.map((page) => (
              <li key={page.name}>
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
            <li className="mt-auto">
              <div className="flex items-center gap-2">
                <img
                  src={logoImg.src}
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-12 rounded-md object-contain bg-white"
                />
                <div className="text-sm font-bold">
                  <h1 className="text-orange-500">Cross Country</h1>
                  <h1 className="text-primary font-semibold">Water Tank Cleaning</h1>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
import React from "react";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <>
      <header className="py-25px">
        <div className="max-w-[1350px] mx-auto px-15px">
          <div className="flex flex-wrap">
            <div className="w-[110px]">
              <a href="javascript:;">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="flex justify-end items-center w-[calc(100%_-_110px)]">
              <nav className="768:flex flex-wrap items-center hidden">
                <ul className="flex flex-wrap items-center text-20">
                  <li className="mr-15px 992:mr-25px 1200:mr-45px">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Home</a>
                  </li>
                  <li className="mr-15px 992:mr-25px 1200:mr-45px">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Property</a>
                  </li>
                  <li className="mr-15px 992:mr-25px 1200:mr-45px">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">About</a>
                  </li>
                  <li className="mr-15px 992:mr-25px 1200:mr-45px">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Post Property</a>
                  </li>
                  <li className="mr-15px 992:mr-25px 1200:mr-45px">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Blog</a>
                  </li>
                  <li className="mr-30px 992:mr-60px 1200:mr-[140px]">
                    <a className="text-14 992:text-16 1200:text-20 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Contact</a>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center">
                  <a className="text-14 992:text-16 1200:text-20 mr-15px 992:mr-25px drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" href="javascript:;">Sign in</a>
                  <a className="text-14 992:text-16 1200:text-20 py-[6px] px-20px rounded-[4px] bg-[rgba(68,_0,_95,_0.15)] shadow-[0px_2px_3px_0px_rgba(18,_82,_174,_0.40)]" href="javascript:;">Sign Up</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

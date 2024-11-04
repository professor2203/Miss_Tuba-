"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import FlipText from "../FlipText/page";
import { style } from "@/libs/styles/page";
import { NavAnimation } from "@/libs/gsap/page";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import Menu from "../Menu/page";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    NavAnimation(navRef.current);
  }, []);

  return (
    <>
      <div className={style.navContainer} ref={navRef}>
        <nav className={`w-full h-full ${style.paddingX} flex justify-between items-center`}>
          <div className="logo">
            <Link href={`/`} className="flex items-center gap-3 md:gap-4">
              <Image
                src={"/profile.jpg"}
                width={50}
                height={50}
                priority
                className="w-[40px] md:w-[50px] rounded-full"
              />
              <FlipText element={"TUBA ALI"} />
            </Link>
          </div>
          <div className="menu hidden md:flex items-center gap-6">
            <Link href={"/About"} className={style.menuItem}>
              About
            </Link>
            <Link href={"/Work"} className={style.menuItem}>
              Works
            </Link>
            <Link href={"/ContactUs"} className={style.getInTouchButton}>
              Get in touch
            </Link>
          </div>

          <div onClick={() => setMenu(!menu)} className="md:hidden ">
            {!menu ? (
              <RxHamburgerMenu size={24} className="text-[--text-color] cursor-pointer" />
            ) : (
              <VscClose size={26} className="text-[--text-color] cursor-pointer" />
            )}
          </div>
        </nav>
      </div>
      {menu && <Menu className={style.menuContainer} />}
    </>
  );
};

export default Nav;

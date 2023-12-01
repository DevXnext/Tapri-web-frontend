"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="shadow-md bg-black">
        <Popover className="xl:w-[1280px] mx-auto flex items-center font-fstroboto h-24  text-white  py-3 justify-between px-2 ">
          <Link
            href="/"
            className="basis-[50%] flex justify-start text-black space-x-5 font-semibold text-base items-center"
          >
            <Image src="/logo/logo.svg" width={100} height={100} alt="Logo" />
          </Link>
          <div className="sm:flex hidden flex-row basis-2/3 space-x-6 font-medium items-center justify-end text-[19px]">
            <Link
              href="/"
              className={` hover:text-red-500
              ${pathname === "/" ? "text-red-500 " : ""}`}
            >
              {" "}
              Home
            </Link>
            <Link
              href="/add-franchise"
              className={` hover:text-red-500
              ${pathname === "/add-franchise" ? "text-red-500 " : ""}`}
            >
              {" "}
              Add Franchise
            </Link>
            <Link
              href="/menu"
              className={` hover:text-red-500
              ${pathname === "/menu" ? "text-red-500 " : ""}`}
            >
              {/* <Link href="/" className="hover:text-red-500"> */} Menu
            </Link>
            <Link href="#mobileclient" className="hover:text-red-500">
              {" "}
              Download App
            </Link>
            <Image src="/icon/cart.svg" width={30} height={30} alt="Cart" />

            <Link
              href="/login"
              className="flex flex-row space-x-3 border-2 px-8 border-[#FB2020] py-2 
             rounded-full items-center text-[19px] font-medium fill-white hover:bg-red-700 hover:text-white duration-300"
            >
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00049 9.25C5.50439 9.25 3.50049 7.24609 3.50049 4.75C3.50049 2.28906 5.50439 0.25 8.00049 0.25C10.4614 0.25 12.5005 2.28906 12.5005 4.75C12.5005 7.24609 10.4614 9.25 8.00049 9.25ZM11.1294 10.375C13.731 10.375 15.8755 12.5195 15.8755 15.1211V16.5625C15.8755 17.5117 15.1021 18.25 14.188 18.25H1.81299C0.86377 18.25 0.125488 17.5117 0.125488 16.5625V15.1211C0.125488 12.5195 2.23486 10.375 4.83643 10.375H5.43408C6.20752 10.7617 7.08643 10.9375 8.00049 10.9375C8.91455 10.9375 9.7583 10.7617 10.5317 10.375H11.1294Z"
                 
                />
              </svg>

              <span>Login</span>
            </Link>
          </div>

          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center">
              <Image
                src="/icon/menu.svg"
                width={50}
                height={50}
                alt="Humburger"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition sm:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/logo/logo.svg"
                      width={100}
                      height={100}
                      alt="Logo"
                    />

                    <div className="-mr-2">
                      <Popover.Button
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <Image
                          src="/icon/close.svg"
                          width={25}
                          height={25}
                          alt="Humburger"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8 font-semibold ">
                      <Link href="/" className="text-red-500">
                        {" "}
                        Home
                      </Link>
                      <Link href="/" className="hover:text-red-500">
                        {" "}
                        Add Franchise
                      </Link>
                      <Link href="/" className="hover:text-red-500">
                        {" "}
                        Menu
                      </Link>
                      <Link href="/" className="hover:text-red-500">
                        {" "}
                        Download App
                      </Link>
                      <div className="flex flex-row justify-between">
                        <Image
                          src="/icon/cart.svg"
                          width={30}
                          height={30}
                          alt="Cart"
                        />
                        <Link
                          href="/login"
                          className="flex flex-row space-x-3 border-2 px-8 border-[#FB2020] py-2 
             rounded-full items-center text-[19px] font-medium hover:bg-red-500 hover:text-white duration-300"
                        >
                          <Image
                            src="/icon/user.svg"
                            width={15}
                            height={15}
                            alt="User"
                          />
                          <span>Login</span>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};

export default Header;

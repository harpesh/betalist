import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between">
      <nav className="flex items-center ml-3">
        <div className="h-6 w-6 grid grid-cols-5">
          <div className="col-span-2 bg-black"></div>
          <div className="col-span-full"></div>
          <div className="col-span-full  bg-black"></div>
          <div className="col-span-full"></div>
          <div className="col-span-full bg-black"></div>
        </div>
        <div className="hidden pl-4 sm:flex gap-2">
          <a
            href=""
            className="block rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 py-1 px-2"
          >
            Home
          </a>
          <a
            href=""
            className="block rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 py-1 px-2"
          >
            Topics
          </a>
          <a
            href=""
            className="block rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 py-1 px-2"
          >
            Newsletter
          </a>
          <a
            href=""
            className="block rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 py-1 px-2"
          >
            Startup Jobs
          </a>
          <div className="w-8  flex justify-center items-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDots />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="hover:underline ">
                  AI Jobs
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:underline ">
                  Vision Pro apps
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:underline ">
                  FAQ
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:underline ">
                  Advertise
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:underline ">
                  Email us
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="flex items-center gap-3 ">
        <div className="w-[212px]">
          <Input />
        </div>
        <div className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 py-1 px-3">
          <Dialog>
            <DialogTrigger>Join</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 py-1 px-3">
          <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block rounded-full !max-w-[230px] bg-[#00CCD1]  text-white py-1 px-3">
          <Dialog>
            <DialogTrigger className="">Submit Startup</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

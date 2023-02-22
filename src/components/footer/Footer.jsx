import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" py-4">
      <div className=" flex gap-x-4 justify-center container items-center mx-auto">
        <h1 className="font-medium">LE MINH QUYET</h1>
        <div className="flex gap-x-4 md:gap-x-2 text-lg ">
          <a
            href="https://github.com/minhquyet1204?tab=repositories"
            target="blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100069334453508"
            target="blank"
          >
            <FaFacebookMessenger />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

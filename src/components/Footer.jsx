import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Navbar() {
  const email = "momanyifredm@gmail.com";
  const [copied, setCopied] = useState(false);

  return (
    <nav className="foot bg-transparent border-b-2 border-l-2 border-r-2 border-gray-300 text-black w-full">
        <hr className="mr-10 ml-10 border-gray-400"/>
      <div className="container mx-auto px-7 py-7 flex justify-between">
        <div className="nav-cont flex items-center">
          <p className="mr-2 ml-1 text-sm">©️ 2024 All rights reserved.</p>
        </div>

        <div className="flex text-sm items-center">
          <a href="https://www.linkedin.com/" className=" hover:text-gray-300 mr-2">LinkedIn</a>
          <span className="mr-2">/</span>
          <a href="https://dribbble.com/" className=" hover:text-gray-300 mr-2">Dribble</a>
          <span className="mr-2">/</span>
          <a href="https://www.instagram.com/" className=" hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
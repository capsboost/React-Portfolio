import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Navbar() {
  const email = "momanyifredm@gmail.com";
  const [copied, setCopied] = useState(false);

  return (
    <nav className="nav bg-transparent border-l-2 border-t-2 border-r-2 border-gray-300 text-black w-full">
        
      <div className="container mx-auto px-7 py-7 flex justify-between">
        <div className="nav-cont flex items-center  border-2 border-gray-300 rounded-full">
          <p className="mr-2 ml-1 text-sm">{email}</p>
          <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
            <button className="btn text-sm bg-white text-black rounded-l-full rounded-r-full py-3 px-4 mr-2">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
          <button className="btn bg-white text-black text-sm rounded-l-full rounded-r-full py-3 px-4 ">CV</button>
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
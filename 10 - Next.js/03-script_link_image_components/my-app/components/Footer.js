import React from "react";
//if we do not use link in next whole website will reload on click of links
//link makes only the component to reload
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-around bg-slate-800 text-white py-4">
        <div>Copyright All rights reserved</div>
        <ul className="flex gap-2 text-sm">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About us</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

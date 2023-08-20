import Link from "next/link";
import React from "react";
import links from "@/constants/navbar-links";
import { useRouter } from "next/router";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <div className="px-4 py-3 text-white font-bold flex lg:hidden">Menu</div>
        <ul className="text-white font-bold gap-0 hidden lg:(flex text-sm)">
          {links.map(({ label, url }) => (
            <li
              key={label}
              className={`py-3 m-0 hover:bg-gray-700 ${
                router.route === url ? `bg-gray-700` : ``
              }`}
            >
              <Link className="px-4 py-3 m-0" href={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

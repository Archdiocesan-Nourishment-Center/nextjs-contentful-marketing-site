import React from "react";

type Props = {};

const BottomBar = (props: Props) => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="bg-gray-700 text-white py-2 text-xs">
      <div className="container block text-center sm:text-left sm:flex mx-auto justify-between">
        <div>
          Copyright {currentYear} &copy; Archdiocesan Nourishment Center, Inc.
        </div>
        <div>
          Developed and Maintained by{" "}
          <a href="https://github.com/chesteralan" target="_blank">
            Alchie
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;

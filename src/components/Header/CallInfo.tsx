import React from "react";
import Image from "next/image";
import PhoneIcon from "../../images/svgs/phone.svg";

type Props = {};

const CallInfo = (props: Props) => {
  return (
    <div className="gap-2 hidden md:flex">
      <div className="bg-purple-100 rounded-full w-12 flex">
        <div className="flex  mx-auto">
          <Image src={PhoneIcon} alt="Envelope" />
        </div>
      </div>
      <div>
        <div className="font-bold">Call Us :</div>
        <div>+63 (82) 285-1524</div>
      </div>
    </div>
  );
};

export default CallInfo;

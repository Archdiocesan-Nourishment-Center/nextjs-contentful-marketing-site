import React from "react";
import EnvelopeIcon from "../../images/svgs/envelope.svg";
import Image from "next/image";

type Props = {};

const MailInfo = (props: Props) => {
  return (
    <div className="flex gap-2 hidden lg:(flex)">
      <div className="bg-purple-100 rounded-full w-12 flex">
        <div className="flex  mx-auto">
          <Image src={EnvelopeIcon} alt="Envelope" />
        </div>
      </div>
      <div>
        <div className="font-bold">Mail :</div>
        <div>anc.archdavao@gmail.com</div>
      </div>
    </div>
  );
};

export default MailInfo;

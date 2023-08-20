import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  bgImage?: StaticImageData;
  breadcrumbs?: Array<{ label: string; url: string }>;
};

const PageHeading = ({
  bgImage,
  label = "Page Title",
  breadcrumbs = [{ label: "Page Title", url: "/" }],
}: Props) => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">
      {bgImage ? (
        <div className="bg-gray-900 absolute">
          <Image src={bgImage} alt="page heading image" className="opacity-50"/>
        </div>
      ) : null}
      <div className="container mx-auto text-center py-10 relative z-index-10 text-white">
        <div className="font-bold text-4xl">{label}</div>

        <ul className="flex mx-auto justify-center gap-5 mt-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
             ›
          </li>
          {breadcrumbs.map(({ label, url }) => (
            <li key={label}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageHeading;

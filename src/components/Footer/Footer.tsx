import React from "react";
import FooterLogoImg from '@/images/webps/footer_logo.webp'
import FooterMapImg from '@/images/webps/footer_map.webp'
import Image from "next/image";
import links from '@/constants/footer-links'
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
    
  return (
    <div className="bg-gray-800 py-1 px-4 sm:py-10 min-h-[300px]" style={{ backgroundImage: `url(${FooterMapImg.src})`}}>
      <div className="container grid grid-cols-1 sm:grid-cols-3 mx-auto gap-10">
        <div className="text-white">
            <Image src={FooterLogoImg} alt="footer logo" />
          The Archdiocesan Nourishment Center aims to provide integral
          nourishment programs and services such as spiritual formation, medical
          assistance especially to the poorest of the poor.
        </div>
        <div className="text-white">
          <ul>
            {links.map(({ label, url }) => (<li key={label}><Link href={url}>{label}</Link></li>))}
          </ul>
        </div>
        <div className="text-white">
          The Archdiocesan Nourishment Center aims to provide integral
          nourishment programs and services such as spiritual formation, medical
          assistance especially to the poorest of the poor.
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

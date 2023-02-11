import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Img from "../../Data/Img";

const Footer = () => {
  return (
    <footer className="bg-[#103178] py-24">
      <div className="container mx-auto text-white gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h5 className="mb-4 md:mb-8 font-semibold text-[18px] md:text-[22px]">
            Məlumat
          </h5>
          <ul className=" text-base md:text-lg">
            <li className="mb-2 leading-8 hover:text-[#ffc056]">
              <Link href="/about">Haqqimizda</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Şöbələrimiz</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Çatdırılma şərtləri</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Gizlilik şərtləri</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Vakansiya</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 md:mb-8 font-semibold text-[18px] md:text-[22px]">
            Hesabım{" "}
          </h5>
          <ul className="text-base md:text-lg">
            <li className="mb-2 leading-8 hover:text-[#ffc056]">
              <Link href="/about">Mənim hesabım</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Sifariş tarixçəsi</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Bəyəndiklərim</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Gizlilik şərtləri</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 md:mb-8 font-semibold text-[18px] md:text-[22px]">
            Müştəri xidməti
          </h5>
          <ul className="text-base md:text-lg">
            <li className="mb-2 leading-8 hover:text-[#ffc056]">
              <Link href="/about">Əlaqə</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Geri qaytar</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Sual - cavab</Link>
            </li>
            <li className="mb-2  leading-8 hover:text-[#ffc056]">
              <Link href="/about">Bloq</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 md:mb-8 font-semibold text-[18px] md:text-[22px]">
            Əlaqə
          </h5>
          <ul className="text-base md:text-lg cursor-pointer">
            <li className="flex items-center mb-3 gap-2  leading-8 hover:text-[#ffc056]">
              <FaEnvelope className="flex-shrink-0 hover:text-[#ffc056]" />
              @infobookshop.az
            </li>
            <li className="flex items-center mb-3 gap-2  leading-8 hover:text-[#ffc056]">
              <FaWhatsapp className="flex-shrink-0 hover:text-[#ffc056]" />
              +994 55 555 55 55
            </li>

            <li className="mb-2 flex items-start gap-2 hover:text-[#ffc056]">
              <FaLocationArrow className="flex-shrink-0 mt-1 " />
              Bakı, Mikayıl Müşfiq küç 1c, Badamdar, Pullman Baku Rezidens,
              Bakı Azərbaycan
            </li>
          </ul>
          <div className="mt-6">
            <span>Bizi sosial şəbəkələrdə izləyin:</span>
            <ul className="text-2xl flex gap-8 mt-4 cursor-pointer ">
              <li className="">
                <FaInstagram className="hover:text-[#ffc056]" />
              </li>
              <li className="">
                <FaFacebook className="hover:text-[#ffc056]" />
              </li>
              <li>
                <FaLinkedin className="hover:text-[#ffc056]" />
              </li>
              <li>
                <FaYoutube className="hover:text-[#ffc056]" />
              </li>
              <li>
                <FaTwitter className="hover:text-[#ffc056]" />
              </li>
            </ul>
          </div>
        </div>
        {/* <div>
          <h5 className="mb-8 font-semibold text-[22px]">Sosial media</h5>
          <ul className="text-xl flex gap-4">
            <li className="">
              <FaInstagram />
            </li>
            <li className="">
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

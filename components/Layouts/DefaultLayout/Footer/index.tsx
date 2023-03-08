import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/public/icons/page1/instagramIcon.png"
import telegramIcon from "@/public/icons/page1/telegramIcon.png"
import linkdinIcon from "@/public/icons/page1/linkdinIcon.png"
import youtubeIcon from "@/public/icons/page1/youtubeIcon.png"
interface FooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<FooterProps> = (): JSX.Element => {
  return (
    <footer className="flex h-[calc(100vh)] items-center justify-center bg-[#eeeeee]">
      <div className="flex flex-col max-w-[66.5rem] h-[32.438rem] justify-center items-center">
         <div className="flex justify-center items-center w-[66.5rem] h-[22.341rem] bg-light-primary">
            <div></div>
            <div></div>
         </div>


         <div className="w-[66.5rem] h-[0.063rem] bg-[#c6c6c6]"></div>

         <div className="w-[21rem] h-[5.69rem] flex justify-center items-center gap-[2.616rem]">
            <Image src={instagramIcon} alt={"instagram"} className="w-[2.5rem] h-[2.5rem]" />
            <Image src={telegramIcon} alt={"telegram"} className="w-[2.5rem] h-[2.5rem]" />
            <Image src={linkdinIcon} alt={"linkdin"} className="w-[2.5rem] h-[2.5rem]" />
            <Image src={youtubeIcon} alt={"youtube"} className="w-[2.5rem] h-[2.5rem]" />
         </div>

         <div className="w-[66.5rem] h-[0.063rem] bg-[#c6c6c6]"></div>

         <div className="w-[21rem] h-[1.313rem] font-display font-light text-[0.75rem] flex justify-center items-center text-light-typeface_b my-[1.5rem]">
            تمامی حقوق این سایت متعلق به شرکت فروغ اندیشه پیشتاز می‌باشد.
         </div>
      </div>
    </footer>
  );
};

export default Footer;

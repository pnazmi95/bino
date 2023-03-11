import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/public/icons/page1/instagramIcon.png"
import telegramIcon from "@/public/icons/page1/telegramIcon.png"
import linkdinIcon from "@/public/icons/page1/linkdinIcon.png"
import youtubeIcon from "@/public/icons/page1/youtubeIcon.png"

interface FooterProps extends React.PropsWithChildren {
}

const Footer: React.FunctionComponent<FooterProps> = (): JSX.Element => {
   return (
      <footer className="flex h-[32.438rem] items-center justify-center bg-[#eeeeee]">
         <div className="flex flex-col max-w-[66.5rem] justify-center items-center">
            <div className="flex justify-between items-stretch w-[66.5rem] h-[22.344rem]">
               <div className="w-[38rem] h-full flex flex-col justify-center gap-[3rem] items-start">
                  <div>
                     <div
                        className="w-[1.875rem] h-[2.063rem] font-display font-semibold text-[1.188rem] leading-normal text-right text-light-typeface_b">
                        بینو
                     </div>
                     <div
                        className="w-[36.438rem] h-[6.813rem] font-display font-light leading-[1.69] text-right text-light-typeface_b text-[1rem]">
                        بینو پلتفرم آنلاین سفارش تولید محتوای بصری‌ست که تولید محتوای بصری را ساده و سریع کرده است. صدها
                        متخصص تولید محتوای بصری در بینو مشغول به‌کارند که می‌توانند محتوای بصری با کیفیت بالا را برای
                        شما خلق کنند. اگر به محتوای بصری شامل لوگو، گرافیک متحرک، رابط کاربری و ... نیاز دارید، بینو
                        اینجاست!
                     </div>
                  </div>
                  <div className="flex justify-start items-center gap-[3.5rem] w-full">
                     <div className="flex flex-col justify-center items-start gap-[1.5rem]">
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[3.625rem] h-[1.75rem]">
                           چرا بینو؟
                        </div>
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[9.125rem] h-[1.75rem]">
                           نمونه محتوای بصری
                        </div>
                     </div>
                     <div className="flex flex-col justify-center items-start gap-[1.5rem]">
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[4.938rem] h-[1.75rem]">
                           درباره بینو
                        </div>
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[6.625rem] h-[1.75rem]">
                           قوانین و مقررات
                        </div>
                     </div>
                     <div className="flex flex-col justify-center items-start gap-[1.5rem]">
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[5.063rem] h-[1.75rem]">
                           تماس با بینو
                        </div>
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[6.313rem] h-[1.75rem]">
                           سؤالات متداول
                        </div>
                     </div>
                     <div className="flex flex-col justify-center items-start gap-[1.5rem]">
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[5.125rem] h-[1.75rem]">
                           وبلاگ بینو
                        </div>
                        <div
                           className="font-display font-regular text-[1rem] text-right text-light-typeface_b w-[6.125rem] h-[1.75rem]">
                           راهنمای بینو
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-[22rem] h-full flex flex-col justify-center items-start gap-[3.065rem]">
                  <div>
                     <div
                        className="w-[10.063rem] h-[2.063rem] font-display font-semibold text-[1.188rem] leading-normal text-right text-light-typeface_b">
                        عضویت در خبرنامه
                     </div>
                     <div
                        className="w-[22rem] h-[1.75rem] font-display font-light text-[1rem] leading-[1.69] text-right text-light-typeface_b mb-[1.5rem]">
                        برای اطلاع از اخبار، ایمیل خود را ثبت کنید.
                     </div>
                     <div className="flex">
                        <input type="text" placeholder="ایمیل"
                               className="w-[16.25rem] h-[3.5rem] p-[1rem_1rem_1rem_1rem] rounded-r-[4px] rounded-[#7b7b7b] bg-none font-display text-right text-[0.875rem] font-medium"/>
                        <button className="w-[5.75rem] h-[3.5rem] p-[1rem_1.5rem] rounded-l-[4px] bg-light-primary
                     shadow-[0_4px_16px_0_rgba(191, 63, 175, 0.3)]
                  ">
                        <span
                           className="w-[2.75rem] h-[1.5rem] font-display text-[0.875rem] font-medium leading-normal text-center text-light-typeface_w">
                           عضویت
                        </span>
                        </button>
                     </div>
                  </div>

                  <div className="flex justify-between items-center w-[22rem]">
                     <div
                        className="w-[5rem] h-[5rem] p-[1.469rem_1.438rem] rounded-[8px] border-[1px] border-b-light-typeface_b flex justify-center items-center font-display text-[1.188rem] font-bold text-light-typeface_b">نماد
                     </div>
                     <div
                        className="w-[5rem] h-[5rem] p-[1.469rem_1.438rem] rounded-[8px] border-[1px] border-b-light-typeface_b flex justify-center items-center font-display text-[1.188rem] font-bold text-light-typeface_b">نماد
                     </div>
                     <div
                        className="w-[5rem] h-[5rem] p-[1.469rem_1.438rem] rounded-[8px] border-[1px] border-b-light-typeface_b flex justify-center items-center font-display text-[1.188rem] font-bold text-light-typeface_b">نماد
                     </div>
                  </div>
               </div>
            </div>


            <div className="w-[66.5rem] h-[0.063rem] bg-[#c6c6c6]"></div>

            <div className="w-[21rem] h-[5.69rem] flex justify-center items-center gap-[2.616rem]">
               <Image src={instagramIcon} alt={"instagram"} className="w-[2.5rem] h-[2.5rem]"/>
               <Image src={telegramIcon} alt={"telegram"} className="w-[2.5rem] h-[2.5rem]"/>
               <Image src={linkdinIcon} alt={"linkdin"} className="w-[2.5rem] h-[2.5rem]"/>
               <Image src={youtubeIcon} alt={"youtube"} className="w-[2.5rem] h-[2.5rem]"/>
            </div>

            <div className="w-[66.5rem] h-[0.063rem] bg-[#c6c6c6]"></div>

            <div
               className="w-[21rem] h-[1.313rem] font-display font-light text-[0.75rem] flex justify-center items-center text-light-typeface_b my-[1.5rem]">
               تمامی حقوق این سایت متعلق به شرکت فروغ اندیشه پیشتاز می‌باشد.
            </div>
         </div>
      </footer>
   );
};

export default Footer;

import cartPngPrimary from "@/public/icons/page1/cartIconNormalPrimary.png"
import leftArrowPrimary from "@/public/icons/page1/leftArrowPngIconPrimary.png"
import Image from "next/image";
interface ISecondHeroProps extends React.PropsWithChildren{}

const SecondHero: React.FunctionComponent<ISecondHeroProps> = (props) => {
   return (
      <section className="bg-light-typeface_w h-[calc(100vh)] flex justify-center items-center">
         <div className="flex max-w-[66.5rem] h-[19.031rem] justify-between items-center gap-[3.5rem]">
            <div className="w-[27.5rem] h-[19.031rem] rounded-[16px] bg-[#f4dff1] p-[4.328rem_8.563rem]"></div>
            <div className="flex flex-col w-[35.5rem] h-[19.031rem] justify-between">
               <div>
                  <div className="font-display font-semibold text-[1.75rem]
                   leading-[1.93] text-light-typeface_b w-full h-[3.563rem] m-[0_0_1rem_3.5rem] text-right">
                     تولید محتوای بصری
                  </div>
                  <div className="font-display font-medium text-[1.5rem] leading-[1.5] w-full h-[2.625rem] m-[0.499rem_0_1rem_1.25rem] text-right">
                     سفارش محتوای بصری به سادگی هر چه تمام‌تر
                  </div>
                  <div className="font-display font-regular text-[1rem] text-light-typeface_b w-full h-[6.844rem] m-[1rem_0_0_3.5rem] text-right leading-[1.69]">
                     اگر به محتوای بصری حرفه‌ای شامل لوگو، گرافیک متحرک، رابط کاربری و ... نیاز دارید، سرویس تولید محتوای بصری بینو می‌تواند در زمان کوتاهی شما را به مقصودتان برساند. هزینه تولید محتوا در بینو مقرون به صرفه است و متناسب با کیفیت محتوا تعریف و تنظیم شده است.
                  </div>
               </div>
               <div className="flex justify-start items-center gap-[1rem]">
                  <button className="w-[11rem] h-[2.5rem] p-[0.5rem_1.5rem] rounded-[8px] bg-light-primary flex justify-center items-center shadow-[0_4px_16px_0px_rgba(191,63,175,0.3)]">
                     <span className="w-[8rem] h-[1.5rem] text-[0.875rem] font-display font-medium text-center text-light-typeface_w align-middle pt-[0.1rem]">
                        سفارش محتوای بصری
                     </span>
                  </button>
                  <button className="w-[9.125rem] h-[2.5rem] p-[0.5rem_1.5rem_0.5rem_0.75rem] rounded-[8px] bg-[#f4dff1] flex justify-center items-center gap-[0.5rem]">
                     <span className="w-[4.875rem] h-[1.5rem] text-[0.875rem] font-display font-medium text-center text-light-primary align-middle pt-[0.1rem]">
                        بیشتر بدانید!
                     </span>
                     <Image src={leftArrowPrimary} alt={"Icon"} className="w-[1.5rem] h-[1.5rem]" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SecondHero;
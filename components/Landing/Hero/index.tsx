import cartPngPrimary from "@/public/icons/page1/cartIconNormalPrimary.png"
import Image from "next/image";
interface IHeroProps extends React.PropsWithChildren{}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
   return (
      <section className="bg-light-primary h-[calc(100vh-6rem)] flex justify-center items-center">
         <div className="flex max-w-[66.5rem] h-[20.625rem] justify-between items-center gap-[3.5rem]">
            <div className="flex flex-col w-[35.5rem] h-[20.625rem] justify-between">
               <div>
                  <div className="font-display font-semibold text-[2rem] text-light-typeface_w w-full h-[3.563rem] m-[0_0_1rem_3.5rem] text-right">
                     تولید محتوای بصری،‌ به سادگی بینو
                  </div>
                  <div className="font-display font-regular text-[1.188rem] text-light-typeface_w w-full h-[11.093rem] m-[1rem_0_0_3.5rem] text-right leading-[1.89]">
                     بینو با همراهی افراد متخصص و متبحر، تولید محتوای بصری را آسان، سریع و مقرون به صرفه کرده است. طراحی محتوای بصری شامل لوگو، گرافیک متحرک،‌رابط کاربری و ... در بینو با کیفیتی ممتاز و با قیمت رقابتی در مدت زمان کوتاهی آماده‌سازی می‌شود.برای آغاز، اولین سفارش محتوای بصری را با تخفیف ویژه ثبت کنید!
                  </div>
               </div>
               <div className="flex justify-start items-center gap-[1rem]">
                  <button className="w-[11.75rem] h-[2.5rem] p-[0.497rem_0.75rem_0.5rem_1rem] rounded-[8px] bg-light-typeface_w flex justify-center items-center gap-[0.5rem]">
                     <Image src={cartPngPrimary} alt={"cartIcon"} className="w-[1.5rem] h-[1.5rem]"/>
                     <span className="w-[8rem] h-[1.5rem] text-[0.875rem] font-display font-medium text-center text-light-primary align-middle pt-[0.1rem]">
                        سفارش محتوای بصری
                     </span>
                  </button>
                  <button className="w-[5.875rem] h-[2.5rem] p-[0.5rem_1.5rem_0.5rem_0.75rem] rounded-[8px] bg-light-typeface_w">
                     <span className="w-[1.625rem] h-[1.5rem] text-[0.875rem] font-display font-medium text-center text-light-primary align-middle pt-[0.1rem]">
                        ورود
                     </span>
                     <span></span>
                  </button>
               </div>
            </div>
            <div className="w-[27.5rem] h-[20.625rem] rounded-[16px] bg-[#c95fbc] "></div>
         </div>
      </section>
   );
};

export default Hero;
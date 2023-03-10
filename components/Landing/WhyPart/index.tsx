import thirdImgBg from "@/public/images/page1/third_image.png";
import Image from "next/image";

interface IWhyPartProps extends React.PropsWithChildren{}

const WhyPart: React.FunctionComponent<IWhyPartProps> = (props): JSX.Element => {
   return (
      <section className="bg-light-typeface_w h-[calc(100vh)] flex justify-center items-center">
         <div className="flex flex-col max-w-[63.5rem] h-[36.47rem] justify-center items-center gap-[4.5rem]">
            <div className="w-[16.125rem] h-[3.063rem] font-display font-semibold leading-[1.93] text-center text-light-typeface_b text-[1.75rem]">
               چرا بینو؟
            </div>

            <div className="flex justify-center w-[58.5rem] gap-[4.75rem]">
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[2rem] flex justify-center items-center">
                     <Image src={thirdImgBg} alt={"img"} className="w-[6.5rem] h-[6.5rem]" />
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     سریع
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     در بینو تولید محتوای بصری توسط متخصصان این حوزه با قیمت رقابتی در مدت زمان کوتاهی تهیه و برای شما آماده‌سازی می‌شود.
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[2rem] flex justify-center items-center">
                     <Image src={thirdImgBg} alt={"img"} className="w-[6.5rem] h-[6.5rem]" />
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     آسان
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     در بینو برای سفارش محتوای بصری کافی‌ست نوع محتوای بصری را انتخاب و سپس فرم سفارش محتوای بصری را تکمیل کنید تا سفارش شما ثبت گردد.
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[2rem] flex justify-center items-center">
                     <Image src={thirdImgBg} alt={"img"} className="w-[6.5rem] h-[6.5rem]" />
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     ضمانت کیفیت
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     بینو کیفیت و اصالت محتوای بصری تولید شده را ضمانت می‌کند و در صورت وجود مغایرت، بر اساس رویه عودت وجه، همه‌ی هزینه‌ها برگردانده خواهد شد.
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyPart;
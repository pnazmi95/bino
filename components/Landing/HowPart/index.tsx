import oneIcon from "@/public/icons/page1/oneIconPngPrimary.png"
import twoIcon from "@/public/icons/page1/twoIconPngPrimary.png"
import threeIcon from "@/public/icons/page1/threeIconPngPrimary.png"
import Image from "next/image";

interface IHowPartProps extends React.PropsWithChildren{}

const HowPart: React.FunctionComponent<IHowPartProps> = (props): JSX.Element => {
   return (
      <section className="bg-light-typeface_w h-[calc(100vh)] flex justify-center items-center">
         <div className="flex flex-col max-w-[63.5rem] h-[36.47rem] justify-center items-center gap-[4.5rem]">
            <div className="w-[16.125rem] h-[3.063rem] font-display font-semibold leading-[1.93] text-center text-light-typeface_b text-[1.75rem]">
               بینو چگونه کار می‌کند؟
            </div>

            {/*<h1 className="text-5xl font-display font-thin">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-extralight">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-light">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-regular">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-medium">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-semibold">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-bold">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-extrabold">سلام بینو</h1>*/}
            {/*<h1 className="text-5xl font-display font-black">سلام بینو</h1>*/}

            <div className="flex justify-center w-[58.5rem] gap-[4.75rem]">
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[1.5rem]"></div>
                  <div className="mb-[2rem]">
                     <Image src={oneIcon} alt={"One"} className="w-[2.5rem] h-[2.5rem]"/>
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     سفارش محتوای بصری
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     کافی‌ست فرم سفارش محتوای بصری را تکمیل کنید. بسته به نوع محتوای بصری مورد نیاز، زمان و هزینه‌ محتوا محاسبه و به شما نمایش داده می‌شود.
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[1.5rem]"></div>
                  <div className="mb-[2rem]">
                     <Image src={twoIcon} alt={"Two"} className="w-[2.5rem] h-[2.5rem]"/>
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     تولید محتوای بصری
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     تولید محتوای بصری شما توسط متخصص تولید محتوای بصری انجام می‌شود و در بازه‌ی زمانی اعلام شده جهت بررسی به شما تحویل می‌گردد.
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="w-[13rem] h-[13rem] p-[3.25rem] rounded-[16px] bg-[#f4dff1] mb-[1.5rem]"></div>
                  <div className="mb-[2rem]">
                     <Image src={threeIcon} alt={"Three"} className="w-[2.5rem] h-[2.5rem]"/>
                  </div>
                  <div className="font-display font-semibold w-[10.875rem] h-[2.063rem] text-[1.188rem] text-light-typeface_b text-center mb-[1rem]">
                     بررسی محتوای بصری
                  </div>
                  <div className="w-[18rem] h-[6.844rem] text-[1rem] text-light-typeface_b text-center font-display font-regular leading-[1.69]">
                     به محض آماده شدن محتوا از طریق ایمیل و پیامک به شما اطلاع داده می‌شود. کافی‌ست آن را بررسی کرده و در صورت نیاز به اصلاح، به متخصص تولید محتوای بصری اطلاع دهید.
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowPart;
import Image from "next/image";
import arrowDownIcon from "@/public/icons/page1/arrowDownPngPrimary.png"
interface IFrequentQuestionsProps extends React.PropsWithChildren{}

const FrequentQuestions: React.FunctionComponent<IFrequentQuestionsProps> = (props): JSX.Element => {
   return (
      <section className="bg-light-typeface_w h-[calc(100vh)] flex justify-center items-center">
         <div className="flex flex-col max-w-[66.5rem] h-[36.47rem] justify-center items-center gap-[4.5rem]">
            <div className="w-[16.125rem] h-[3.063rem] font-display font-semibold leading-[1.93] text-center text-light-typeface_b text-[1.75rem]">
               سوالات متداول
            </div>

            <div className="flex flex-col justify-center w-full">
               <div className="flex justify-between items-center w-[66.5rem] h-[3.5rem] p-[1rem_1rem_1rem_0.75rem] rounded-[4px] border-[1px] border-[#df9fd7]">
                  <span className="h-[1.5rem] font-display font-medium text-[0.875rem] text-right text-light-typeface_b leading-normal pt-[0.05rem]">
                     بینو چیست و چگونه کار می کند؟
                  </span>
                  <Image src={arrowDownIcon} alt="arrowDownIcon" className="w-[1.5rem] h-[1.5rem]" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default FrequentQuestions;
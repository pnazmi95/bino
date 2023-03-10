import {FaSadTear, FaHome} from "react-icons/fa"
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

interface ICustom404Props extends React.PropsWithChildren {}

const Custom404: React.FunctionComponent<ICustom404Props>
   = (): JSX.Element => {
   return (
         <div className={`flex flex-col justify-center items-center h-[calc(100vh)]`}>
            <h1 className={`text-5xl font-bold text-light-content dark:text-dark-content`}>
               <span className={`text-light-hover font-display`}>۴۰۴. </span>
               <span className="font-display">صفحه مورد نظر یافت نشد</span>
            </h1>
            <div className={`py-10`}>
               <span>
                  <FaSadTear className={`text-6xl text-light-hover dark:text-dark-hover`}/>
               </span>
            </div>
            <div>
               <Link className={`w-full h-full rounded rounded-md bg-light-content px-6 py-3 text-dark-primary hover:bg-dark-hover dark:bg-dark-secondary dark:text-light-secondary dark:hover:bg-dark-error flex justify-center items-center`} href={`/`}>
                  <button
                     type="button"
                     className="uppercase font-semibold text-md flex justify-center items-center gap-4 border border-b-light-typeface_w bg-light-primary text-light-typeface_w px-[1rem] py-[0.5rem] rounded-3xl font-display"
                  >
                     <FaHome className={``} size={25}/> <span className={`text-[25px] pt-1.5`}>خانه</span>
                  </button>
               </Link>
            </div>
         </div>
   );
};

export default Custom404;
import NavItem from "./NavItem";
import Image from "next/image";
// import Hamburger from "./Hamburger";
import logo from "@/public/logo/bino-logo.svg"
import arrowDownPng from "@/public/icons/page1/arrowDownPngNormalWhite.png"

interface INavbarProps extends React.PropsWithChildren {
}

const Navbar: React.FunctionComponent<INavbarProps> = (): JSX.Element => {
   return (
      <nav
         className="sticky top-0 z-50 flex h-[96px] items-center justify-center bg-light-secondary dark:bg-dark-secondary shadow-[0_3px_15px_-0_rgba(0,0,0,0.05)]">
         <Image src={logo} alt={"Logo"} height={30} className="ml-[4.5rem]"/>
         <div className=" flex w-full max-w-[66.5rem] items-center justify-between px-4">
            {/* <Hamburger /> */}
            <ul className="hidden items-center justify-evenly gap-4 md:flex md:gap-[2rem]">
               <NavItem title="تولید محتوای بصری" url="/production"/>
               <NavItem title="وبلاگ" url="/weblog"/>
               <NavItem title="درباره بینو" url="/about"/>
               <NavItem title="تماس با بینو" url="/contact"/>
            </ul>

            <div className="flex items-center justify-center gap-0.5">
               <div>
                  <button
                     className="w-[74px] h-[40px] border border-[#7b7b7b] rounded-[8px] text-light-primary font-medium font-display text-[0.875rem]">
                     ورود
                  </button>
               </div>

               <div>
                  <button
                     className="w-[7rem] h-[2.5rem] p-[0.5rem_1.5rem_0.5rem_0.75rem] m-[0.531rem_1rem_0.531rem_0] rounded-[8px] bg-light-primary text-light-typeface_w flex justify-between items-center  font-medium font-display">
                     <span className="w-[2.75rem] text-[0.875rem] font-medium font-display">
                        ثبت نام
                     </span>
                     <Image src={arrowDownPng} alt={"Arrow Down"} className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]"/>
                  </button>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

import Image from "next/image";
import arrowDownIcon from "@/public/icons/page1/arrowDownPngPrimary.png";
import arrowUpIcon from "@/public/icons/page1/arrow_up.png";
import {Collapse} from 'react-collapse';


interface IAccordionItemProps extends React.PropsWithChildren {
   isOpen: boolean,
   handleClose: any,
   handleOpen: any,
   id: number,
   question: string,
   answer: string
}

const AccordionItem: React.FunctionComponent<IAccordionItemProps> = (
   {
      isOpen,
      handleOpen,
      handleClose,
      id,
      question,
      answer
   }
): JSX.Element => {
   return (
      <div
         className="flex flex-col justify-between w-[66.5rem] h-full p-[1rem_1rem_1rem_0.75rem] rounded-[4px] border-[1px] border-[#df9fd7] mb-[1rem]">
         <div
            className="flex justify-between items-center"
         >
            <span
               className="h-[1.5rem] font-display font-medium text-[0.875rem] text-right text-light-typeface_b leading-normal pt-[0.05rem]">
               {question}
            </span>

            {!isOpen ? <Image src={arrowDownIcon} alt="arrowIcon" className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                              onClick={handleOpen}/> :
               <Image src={arrowUpIcon} alt="arrowIcon" className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                      onClick={handleClose}/>}

         </div>
         <Collapse isOpened={isOpen}>
            <div
               className="w-[64.5rem] h-full font-display font-light text-[1rem] leading-[1.69] text-right text-light-typeface_b mt-[1rem]">
               {answer}
            </div>
         </Collapse>
      </div>


   );
};

export default AccordionItem;
import AccordionItem from "@/components/Landing/FrequentQuestions/AccordionItem";
import {useState} from "react";
import {flag} from "arg";

interface IFrequentQuestionsProps extends React.PropsWithChildren {
}

const accordionData = [
   {
      id: 1,
      question: "بینو چیست و چطور کار می‌کند؟",
      answer: "بینو یک پلتفرم آنلاین است که سفارش تولید محتوای بصری را برای کسب‌وکارها ساده می‌کند. با استفاده فرم سفارش محتوای بصری می‌توانید در زمانی کوتاه، محتوای بصری مد نظر خود را سفارش دهید و مطمئن باشید که توسط متخصص کارآزموده و مجرب، تولید خواهد شد. برای آشنایی بیشتر با روند کار بینو، صفحه نحوه کار بینو را مطالعه کنید."
   },
   {
      id: 2,
      question: "بینو چه نوع محتوایی تولید می‌کند؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 3,
      question: "متخصصان تواید محتوای بصری بینو چه کسانی هستند؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 4,
      question: "تولید محتوای بصری چه کاربردی دارد؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 5,
      question: "کیفیت تولید محتوای بصری در بینو چطور است؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 6,
      question: "چگونه از کپی نبودن محتوای بصری و کیفیت آن اطمینان حاصل کنیم؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 7,
      question: "اگر از محتوای بصری تولیدی رضایت نداشتم چه اتفاقی می‌افتد؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 8,
      question: "هزینه تولید محتوای بصری در بینو چگونه محاسبه می‌شود؟",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
   {
      id: 9,
      question: "برای سفارش محتوای بصری به راهنمایی بیشتری نیاز دارم",
      answer: "این قسمت به زودی تکمیل خواهد شد."
   },
]

const FrequentQuestions: React.FunctionComponent<IFrequentQuestionsProps> = (props): JSX.Element => {

   const [currentIndex, setCurrentIndex] = useState(accordionData.length + 1)

   const handleOpen = (index: number): void => {
      setCurrentIndex(prevState => prevState = index)
   }

   const handleClose = (): void => {
      setCurrentIndex(accordionData.length + 1)
   }


   return (
      <section className="bg-light-typeface_w h-[calc(150vh)] flex justify-center items-center">
         <div className="flex flex-col max-w-[66.5rem] h-[36.47rem] justify-center items-center gap-[3.5rem]">
            <div
               className="w-[16.125rem] h-[3.063rem] font-display font-semibold leading-[1.93] text-center text-light-typeface_b text-[1.75rem]">
               سوالات متداول
            </div>
            <div className="flex flex-col justify-center w-full">
               {accordionData.map(
                  (item: any, index: number) => {
                     return (
                        <AccordionItem
                           key={index}
                           isOpen={currentIndex === index ? true: false}
                           handleClose = {handleClose}
                           handleOpen={() => handleOpen(index)}
                           id={item.id}
                           question={item.question}
                           answer={item.answer}/>
                     )
                  }
               )
               }
            </div>
         </div>
      </section>
   );
};

export default FrequentQuestions;
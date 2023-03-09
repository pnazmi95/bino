// import styles from '@/styles/Home.module.css'

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Hero from "@/components/Landing/Hero";
import SecondHero from "@/components/Landing/SecondHero";
import HowPart from "@/components/Landing/HowPart";
import WhyPart from "@/components/Landing/WhyPart";
import FrequentQuestions from "@/components/Landing/FrequentQuestions";

const HomePage = () => {
   return (
      <DefaultLayout title="خانه">
         <Hero />
         <SecondHero />
         <HowPart />
         <WhyPart />
         <FrequentQuestions />
      </DefaultLayout>
   )
};

export default HomePage;

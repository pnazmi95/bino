// import styles from '@/styles/Home.module.css'

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Hero from "@/components/Landing/Hero";
import SecondHero from "@/components/Landing/SecondHero";

const HomePage = () => {
   return (
      <DefaultLayout title="خانه">
         <Hero />
         <SecondHero />
      </DefaultLayout>
   )
};

export default HomePage;

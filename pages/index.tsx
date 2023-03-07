// import styles from '@/styles/Home.module.css'

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Hero from "@/components/Landing/Hero";

const HomePage = () => {
   return (
      <DefaultLayout title="خانه">
         <Hero />
      </DefaultLayout>
   )
};

export default HomePage;

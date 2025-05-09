
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import TransitionCategories from "@/components/TransitionCategories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import LocationSearch from "@/components/LocationSearch";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TransitionCategories />
      <HowItWorks />
      <Testimonials />
      <LocationSearch />
    </Layout>
  );
};

export default Index;

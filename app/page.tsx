import ContainerWrapper from "@/components/common/ContainerWrapper";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceProviders from "@/components/home/ServiceProviders";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-100 to-blue-100">
        <ContainerWrapper>
          <Hero />
        </ContainerWrapper>
        <Categories />
        <ServiceProviders />
        <ContainerWrapper>
          <HowItWorks />
        </ContainerWrapper>
        <Testimonials />
      </div>
    </>
  );
}

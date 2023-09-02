import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Why
        img="Money.jpg"
        title="WHY CHOOSE US"
        subTitle="The Power of Community Lending"
        para=" At our company, we prioritize transparency, convenience, and accessibility. Our online platform makes it easy to apply for and manage loans, and our loan terms are designed to be flexible and inclusive, catering to the unique needs of every borrower. With our focus on community investment and secure transactions, you can trust that your loan will not only help you achieve your financial goals, but also support the growth and development of your local community."
        classes="md:flex-row"
        headColor="text-third text-semibold"
        buttonClass=""
      />
      <Why
        img="peer-to-peer-lending.jpeg"
        title="Social Lending Made Simple"
        subTitle="Empowering Financial Connections"
        para="At our company, we believe that financial opportunities should be accessible to everyone. That's why we offer a wide range of social lending services designed to help individuals and businesses connect and invest in each other. Our platform makes it easy to apply for and manage loans, with clear and flexible terms tailored to your specific needs. And by prioritizing community investment, we aim to create a positive impact in the neighborhoods we serve."
        classes="md:flex-row-reverse"
        headColor="text-third text-semibold"
        buttonClass=""
        class2="lg:pr-24 md:pr-16"
      />
      <Why
        img="social-investment.jpg"
        title="Personalized Lending, Tailored to You"
        subTitle="Connecting Individuals and Communities"
        para="We believe that every individual has unique financial goals and needs. That's why we offer personalized lending services, designed to connect you with the resources you need to achieve your goals. Our team of experts works with you to understand your financial situation and create a customized lending plan that meets your specific requirements. Whether you're looking to start a business, buy a home, or simply manage your finances, we're here to help."
        classes="md:flex-row"
        mainclass="bg-[#FEF5F5]"
        headColor="text-third text-semibold"
        buttonClass=""
        imageClass=""
      />
    </>
  );
}

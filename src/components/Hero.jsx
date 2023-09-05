import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:py-24 py-10 md:flex-row flex-col items-center max-w-7xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font md:text-6xl sm:text-4xl text-3xl mb-4 text-gray-900">
              Connecting{" "}
              <span className="text-primary font-extrabold">Lenders</span> and{" "}
              <span className="text-primary font-extrabold">Borrowers</span>: The
              Power of Social Lending{" "}
            </h1>
            <p className="mb-8 leading-relaxed text-s">
              Social lending services enable people to lend money to each other,
              bypassing traditional financial institutions. By lending to others
              in their social network, people can earn interest on their money
              while also supporting members of their community. These services
              typically have lower fees and more flexible terms than traditional
              lending options, making them an attractive alternative for both
              borrowers and lenders.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-third rounded text-lg">
                Lend Now
              </button>
              <button className="ml-4 inline-flex text-black bg-transparent border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-primary justify-center align-middle items-center  rounded text-lg">
                <BsFillPlayFill className="mr-5 text-[#FDC55E]" />
                Borrow Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-8 rounded-[2rem] border-third">
            <Image
              className="object-cover object-center rounded-[2rem]"
              alt="hero"
              src="/img/Header-image.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}

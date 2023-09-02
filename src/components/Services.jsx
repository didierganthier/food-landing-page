import Image from "next/image";

export default function Services() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#FEF5F5]">
        <div className="container px-5 md:py-24 py-10 mx-auto max-w-7xl">
          <div className="flex flex-col text-center w-full mb-20">
            <span className="text-third text-2xl font-semibold">
              What we Serve
            </span>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
              fruit and vegetable delivered to your home
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-third flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/lending-money.png"
                  alt=""
                  className="rounded-full bg-white p-2"
                  width={80}
                  height={80}
                />
                <h2 className="title-font font-medium text-xl text-secondary pt-2">
                  Invest in your community
                </h2>
                <p className="leading-relaxed mt-5 text-lg text-white">
                  Support local businesses and individuals with your loan
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-third flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/future.png"
                  alt=""
                  className="rounded-full bg-white p-2"
                  width={80}
                  height={80}
                />
                <h2 className="title-font font-medium text-xl text-secondary pt-2">
                  Build Your Financial Future
                </h2>
                <p className="leading-relaxed mt-5 text-lg text-white">
                  Earn competitive interest rates while helping others achieve their financial goals.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-third flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/safe.png"
                  alt=""
                  className="rounded-full bg-white p-2"
                  width={80}
                  height={80}
                />
                <h2 className="title-font font-medium text-xl text-secondary pt-2">
                  Transparent and Secure
                </h2>
                <p className="leading-relaxed mt-5 text-lg text-white">
                  Enjoy clear terms and conditions and secure, encrypted transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

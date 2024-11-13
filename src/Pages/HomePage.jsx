import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Floating from '../Components/Floating'
import HeaderSlide from '../Components/HeaderSlide/HeaderSlide'
import ClientSlide from '../Components/HeaderSlide/ClientSlide'
import { services } from '../Common/constants'
function HomePage() {

  return (

    <>
      {/* ========== HEADER ========== */}
      <Header />
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        {/* Slider */}
        <HeaderSlide />
        {/* End Slider */}
        {/* Clients */}
        <ClientSlide />
        {/* End Clients */}



        {/* Works */}
        <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
          <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h1 className="font-medium text-black text-2xl sm:text-4xl text-black">
              Dịch vụ
            </h1>
          </div>
          {/* Card Grid */}
          <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {services.map(x => (

              <a className="group block" href="#">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl bg-neutral-800">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                    src={"https://placehold.co/600x400/orange/white"}
                    alt="Image Description"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 text-black">
                    eYoga
                  </h3>
                  <p className="mt-1 text-gray-600 text-neutral-400">
                    A revamped and dynamic approach to yoga analytics
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Discovery
                    </span>
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Brand Guidelines
                    </span>
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Yoga
                    </span>
                  </div>
                </div>
              </a>

            ))}

          </div>
          {/* End Card Grid */}
          <div className="mt-10 lg:mt-20 text-center">
            <a
              className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black text-black hover:before:bg-white focus:before:bg-white"
              href="#"
            >
              Xem tất cả dịch vụ
            </a>
          </div>
        </div>
        {/* End Works */}

        {/* Tin tức */}
        <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
          <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h1 className="font-medium text-black text-2xl sm:text-4xl text-black">
              Tin tức nổi bật
            </h1>

          </div>
          {/* Card Grid */}
          <div className=" grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {services.map(x => (

              <a className="group block" href="#">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl bg-neutral-800">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                    src={"https://placehold.co/600x400/orange/white"}
                    alt="Image Description"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 text-black">
                    eYoga
                  </h3>
                  <p className="mt-1 text-gray-600 text-neutral-400">
                    A revamped and dynamic approach to yoga analytics
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Discovery
                    </span>
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Brand Guidelines
                    </span>
                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl bg-neutral-900 border-neutral-700 text-neutral-400">
                      Yoga
                    </span>
                  </div>
                </div>
              </a>

            ))}

          </div>
          {/* End Card Grid */}
        </div>
        {/* End Tin tức */}
        {/* Testimonials */}
       
          {/* Hero */}
          <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl ">
                  Designed for you to get more{" "}
                  <span className="text-blue-600">simple</span>
                </h1>
                <p className="mt-3 text-lg text-gray-800">
                  Build your business here. Take it anywhere.
                </p>
              </div>
              <div className="mt-10 relative max-w-5xl mx-auto">
                <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-no-repeat bg-center bg-cover rounded-xl" />
                <div className="absolute inset-0 size-full">
                  <div className="flex flex-col justify-center items-center size-full">
                    <a
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Play the overview
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
                  <div className="bg-white size-48 rounded-lg " />
                </div>
                <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div className="bg-white size-48 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          {/* End Hero */}
      

        {/* End Testimonials */}

        {/* Contact */}
        <div className="">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
              </h2>
              <p className="mt-1 text-neutral-400">
                Whatever your goal - we will get you there.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Name
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="hs-tac-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Email
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                        placeholder="Company"
                      />
                      <label
                        htmlFor="hs-tac-input-company"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Company
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                        placeholder="Phone"
                      />
                      <label
                        htmlFor="hs-tac-input-phone"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Phone
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Textarea */}
                    <div className="relative">
                      <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                        defaultValue={""}
                      />
                      <label
                        htmlFor="hs-tac-message"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Tell us about your project
                      </label>
                    </div>
                    {/* End Textarea */}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                      All fields are required
                    </p>
                    <p className="mt-5">
                      <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="#"
                      >
                        Submit
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              {/* End Col */}
              <div className="space-y-14">
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  <div className="grow">
                    <h4 className="text-black font-semibold">Our address:</h4>
                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR, United Kingdom
                    </address>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-black font-semibold">Email us:</h4>
                    <a
                      className="mt-1 text-neutral-400 text-sm"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      hello@example.so
                    </a>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-black font-semibold">We're hiring</h4>
                    <p className="mt-1 text-neutral-400">
                      We're thrilled to announce that we're expanding our team and
                      looking for talented individuals like you to join us.
                    </p>
                    <p className="mt-2">
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                      >
                        Job openings
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Item */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Contact */}


      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <Footer />
      {/* ========== END FOOTER ========== */}
      <Floating />
    </>


  )
}

export default HomePage

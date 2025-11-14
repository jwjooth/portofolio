// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Grid, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className="w-full"
      >
        <div className="flex justify-between flex-row-reverse items-center pt-[42px] pb-[42px] pl-[24px] pr-[24x] max-md:!flex-col">
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center h-full">
            <img src="/1.png" alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="text-xl font-semibold">
              Jordan Theovandy Ferdinand
            </h2>
            <h1 className="text-6xl font-semibold hover:scale-110 transition delay-100 duration-300 ease-in">
              Software Developer
            </h1>
            <p className="text-sm">
              Just a student who loves to Gym and Sleep.
            </p>
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center rounded-[100px]">
              Contact
            </button>
          </div>
        </div>
      </motion.section>
      {/* Hero Section End*/}

      {/* Second Section */}
      <section className="w-full">
        <div className="flex justify-between items-start gap-11  pt-[64px] pb-[64px] pl-[24px] pr-[24px] max-md:items-center max-md:justify-center max-md:flex-col">
          <div className="hidden md:flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              src="/9.png"
              alt=""
              className="w-[200px]"
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="text-xl font-semibold text-center"
            >
              Jordan Theovandy Ferdinand
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-7xl font-semibold w-full text-center hover:scale-110 transition delay-100 duration-300 ease-in"
            >
              Software Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.6,
                damping: 20,
              }}
              className="text-sm w-full text-center"
            >
              Independent Software Developer
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center rounded-[100px]"
            >
              Contact
            </motion.button>
          </div>

          <div className="hidden md:flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              src="/3.png"
              alt=""
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
      {/* Second Section End*/}

      {/* Third Section */}
      <section className="w-full">
        <div className="flex justify-between items-center  pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
          <div className="flex  gap-7 max-md:flex-col max-md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="/4.png"
                alt=""
                className="md:block w-35 mb-2.7 hover:scale-120 transition delay-100 duration-300 ease-out"
              />
              <h2 className="text-xl font-semibold text-black">Shiba Inu</h2>
              <p className="text-sm text-gray-500 text-center">
                Shiba Inu is a meme-based cryptocurrency inspired by Dogecoin,
                featuring the Shiba dog breed, and has gained popularity as a
                community-driven token.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="/5.png"
                alt=""
                className="w-30 mb-2.5 hover:scale-120 transition delay-100 duration-300 ease-out"
              />
              <p className="text-xl font-semibold text-black">Dogecoin</p>
              <p className="text-sm text-gray-500 text-center">
                Dogecoin is a cryptocurrency originally created as a joke, but
                it gained popularity for its low fees and active online
                community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="/6.png"
                alt=""
                className="w-30 mb-2.5 hover:scale-120 transition delay-100 duration-300 ease-out"
              />
              <h2 className="text-xl font-semibold text-black">Bitcoin</h2>
              <p className="text-sm text-gray-500 text-center">
                Bitcoin is the first and most well-known cryptocurrency,
                designed as a decentralized digital currency without a central
                authority.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Third Section End*/}

      <section className="w-full">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://tailwindcss.com/">
              <img src="/7.png" alt="" className="w-30 mb-2.5" />
            </a>
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">Tailwindcss</h2>
              <p className="text-sm text-gray-500">
                Tailwind CSS is a utility-first CSS framework that allows you to
                design custom interfaces directly in your HTML using low-level
                utility classes.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://getbootstrap.com/">
              <img src="/10.png" alt="" className="w-30 mb-2.5" />
            </a>
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">Bootstrap</h2>
              <p className="text-sm text-gray-500">
                Bootstrap is an open-source CSS framework that provides
                pre-designed components and responsive grid layouts to quickly
                build user interfaces.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://react.dev/">
              <img src="/8.png" alt="" className="w-30 mb-2.5" />
            </a>
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">React</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://laravel.com/">
              <img src="/2.png" alt="" className="w-30 mb-2.5" />
            </a>
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">Laravel</h2>
              <p className="text-sm text-gray-500">
                Laravel is a PHP web framework designed for building modern web
                applications with an elegant syntax, offering features like
                routing, authentication, and database management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Fourth Section End*/}

      {/* Fifth Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
        >
          Lastest Project
        </motion.h1>

        <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://www.canva.com/design/DAGk3WCSqiE/Ghvxf2r-5j2C5Hat-nVWfw/edit?utm_content=DAGk3WCSqiE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              <img src="/cbc.png" alt="" className="w-full" />
            </a>
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Testoria</h2>
              <p className="text-sm text-gray-500">
                Entered the final and reached the Top 10 in the Canvas Business
                Competition held by University Dian Nuswantoro.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://www.canva.com/design/DAGlI7x7oFg/piWarBYUW9wV4vHlPbN2yQ/edit?utm_content=DAGlI7x7oFg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              <img src="/mahaduit.png" alt="" className="w-full" />
            </a>
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Mahaduit</h2>
              <p className="text-sm text-gray-500">
                As a midterm exam of the Financial Technology course, we made an
                E-wallet Prototype called Mahaduit.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://youtu.be/jNByDOB2_RM?feature=shared">
              <img src="/joyfull.png" alt="" className="w-full" />
            </a>
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">
                Joyfull Plate
              </h2>
              <p className="text-sm text-gray-500">
                As the final exam of the semester of the internet programming
                course, we created a website for a restaurant called Joyfull
                Plate.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <a href="https://www.canva.com/design/DAGY9cgFfwY/7DVZRaBX_bgu0qOcCbaB5Q/edit?utm_content=DAGY9cgFfwY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              <img src="/restoraflow.png" alt="" className="w-full" />
            </a>
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">RestoraFlow</h2>
              <p className="text-sm text-gray-500">
                As the final exam of our Software Engineering course, we created
                a software for restaurant management called RestoraFlow.
              </p>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col hover:scale-110 transition delay-50 duration-300 ease-in-out"
          >
            <img src="/13.jpeg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                reprehenderit sit sequi fugiat rem nobis adipisci placeat
                repellendus soluta corporis fuga voluptates exercitationem
                voluptas, modi laboriosam natus quis iure consequatur.
              </p>
            </div>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/14.jpeg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Art Design</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                reprehenderit sit sequi fugiat rem nobis adipisci placeat
                repellendus soluta corporis fuga voluptates exercitationem
                voluptas, modi laboriosam natus quis iure consequatur.
              </p>
            </div>
          </motion.div> */}
        </div>
      </section>
      {/* Fifth Section End*/}

      {/* Sixth Section */}
      <section className="flex gap-20 items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:!pr-0 max-sm:!pl-0 max-sm:gap-0 max-sm:!justify-between">
        <a href="https://akademicrypto.com/">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            src="/ac.png"
            alt=""
            className="w-15 sm:w-15 md:w-19 lg:w-27 hover:scale-130 transition delay-100 duration-300 ease-out"
          />
        </a>

        <a href="https://unika.ac.id/">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              damping: 20,
            }}
            src="/scu.png"
            alt=""
            className="w-15 sm:w-15 md:w-19 lg:w-27 hover:scale-130 transition delay-100 duration-300 ease-out"
          />
        </a>

        <a href="https://www.instagram.com/hmti.scu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.7,
              damping: 20,
            }}
            src="/hmti.png"
            alt=""
            className="w-15 sm:w-15 md:w-19 lg:w-27 hover:scale-130 transition delay-100 duration-300 ease-out"
          />
        </a>

        <a href="https://vite.dev/">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.9,
              damping: 20,
            }}
            src="/vite.png"
            alt=""
            className="w-15 sm:w-15 md:w-19 lg:w-27 hover:scale-130 transition delay-100 duration-300 ease-out"
          />
        </a>

        <a href="https://chatgpt.com/">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.11,
              damping: 20,
            }}
            src="/chatgpt.png"
            alt=""
            className="w-15 sm:w-15 md:w-19 lg:w-27 hover:scale-130 transition delay-100 duration-300 ease-out"
          />
        </a>
      </section>
      {/* Sixth Section End*/}

      {/* Seventh Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pr-[24px] pl-[24px]"
        >
          Testimonial
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="w-full"
        >
          <Swiper
            modules={[Thumbs, Grid]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            loop={false}
            scrollbar={{
              draggable: true,
            }}
            className="pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
          >
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Working with Jojo was a game-changer for our Software
                  project. His expertise in smart contract development and
                  attention to detail were outstanding."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Thanks to Jojo, we launched a secure and efficient DApp ahead
                  of schedule. His knowledge of decentralized systems is truly
                  impressive."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Jojo brought clarity and innovation to our Web3 strategy. He
                  not only delivered excellent code but also helped us
                  understand the Software landscape."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Professional, reliable, and deeply skilled in Software
                  development — partnering with Jojo was one of the best
                  decisions for our tech team."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Jojo is a highly skilled Software developer who
                  consistently delivers secure and well-structured solutions.
                  His work on our smart contracts exceeded expectations."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Jojo's deep understanding of Software architecture helped
                  us avoid critical pitfalls and launch a reliable product. His
                  contributions were invaluable."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Working with Jojo was seamless — he communicates clearly,
                  meets deadlines, and brings innovative ideas to every stage of
                  development."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff] hover:scale-110 transition delay-50 duration-300 ease-in-out">
                <h2 className="text-md font-semibold">
                  "Jojo played a key role in transforming our concept into a
                  fully functional decentralized app. His technical expertise
                  and professionalism stand out."
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/16.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Timothy Ronald</p>
                      <p className="text-sm text-gray-500">Akademi Crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </section>
      {/* Seventh Section End */}

      {/* Eighth Section */}
      <section className="w-full">
        <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col w-[50%] max-md:w-full"
          >
            <h1 className="text-start text-4xl font-semibold pb-[24px]">
              Let's Work Together
            </h1>
            <p className="mb-7">
              Im always open to discussing product design work or partnership
              opportunities. Lets bring your vision to life.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src="/discord.svg" alt="" />
              <img src="/dribbble.svg" alt="" />
              <img src="/fb.svg" alt="" />
              <img src="/insta.svg" alt="" />
              <img src="/behance.svg" alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col w-[50%] gap-3 items-start justify-start max-md:w-full"
          >
            <input
              type="text"
              placeholder="Name"
              className="p-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center rounded-[100px]">
              Submit
            </button>
          </motion.div>
        </div>
      </section>
      {/* Eighth Section End*/}
    </>
  );
};

export default Body;

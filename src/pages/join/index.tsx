import React from 'react'
import Layout from '../../layouts/Layout.astro'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HeroSlider } from '../../components/hero-slider'
import { getCollection } from 'astro:content';

function index() {
    let events = await getCollection("events");
events.sort((a, b) => (new Date(b.data.date)).getTime() - (new Date(a.data.date)).getTime())
//remove events with slug is in the remove array
const remove =['good-touch-bad-touch','nanhe-parinde','margdarshak','bonding-bash','avtaran','digital-detox','plantation-drive','seva-sahyog']
events = events.filter((event)=>!remove.includes(event.slug))

const eventsImages = [
  {
    image: "/benefits/benefit (1).JPG",
    id: "1",
    alt: "",
  },
  {
    image: "/benefits/benefit (2).JPG",
    id: "2",
    alt: "",
  },
  {
    image: "/benefits/benefit (3).JPG",
    id: "3",
    alt: "",
  },
  {
    image: "/benefits/benefit (4).JPG",
    id: "4",
    alt: "",
  },
  {
    image: "/benefits/benefit (5).JPG",
    id: "5",
    alt: "",
  },
  {
    image: "/benefits/benefit (6).jpg",
    id: "6",
    alt: "",
  },
  {
    image: "/benefits/benefit (7).jpg",
    id: "7",
    alt: "",
  },
  {
    image: "/benefits/benefit (8).jpg",
    id: "8",
    alt: "",
  },
  {
    image: "/benefits/benefit (9).jpg",
    id: "9",
    alt: "",
  },
  {
    image: "/benefits/benefit (10).jpg",
    id: "10",
    alt: "",
  },
  {
    image: "/benefits/benefit (11).jpg",
    id: "11",
    alt: "",
  },
  {
    image: "/benefits/benefit (12).JPG",
    id: "12",
    alt: "",
  },
  {
    image: "/benefits/benefit (13).JPG",
    id: "13",
    alt: "",
  },
];
  return (
    <div>
      <Layout
        title="JOIN - Rotaract Galgotias | A community of young leaders, giving back to the community."
        description="Rotaract Club of Galgotias is a community of young leaders, giving back to the community. We are a part of Rotary International, a global network of 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves."
        ogImage="/og.png"
>
    <main className="flex min-h-screen flex-col items-center gap-10 py-5 xl:px-24">
        <div className={"container grid grid-cols-12 gap-5"}>
            <div className={"lg:hidden col-span-full block"}>
                {/* <!--<HeroSlider sliderImages={sliderImages} client:only="react" />--> */}
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LM9zx4k2kQs?si=J5e4ZAEWFZNYOI7C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={"col-span-12 flex flex-col gap-4 lg:gap-8 lg:col-span-6 xl:pr-5"}>
                <h1
                        className={"font-outfit text-3xl font-extrabold text-slate-800 lg:text-6xl"}
                >
                    Your Gateway to Impactful Leadership
                </h1>
                <p className={"font-dmSans text-sm/relaxed text-slate-600 md:text-lg/relaxed md:w-3/4"}>
                    Embark on a journey of leadership, service, and personal growth with the Rotaract Club at Galgotias
                    Educational Institutions. At Rotaract, we believe in making a difference - <i>not someday, but
                    today</i>.
                </p>
                <div className={"flex gap-4"}>
                    <button className="relative rounded-md bg-slate-700 px-4 py-2 font-dmSans text-sm font-bold text-white transition-all duration-200 hover:bg-rose-500 md:text-lg group">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNZFtEsPdc7kkPohz59DgsgzIqIiY1ze488YpgbfcRIEBHFg/viewform">
                            Get Membership
                        </a>
                    </button>

                    <Menu>
                        <MenuButton>My account</MenuButton>
                        <MenuItems anchor="bottom">
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/settings">
                                    Settings
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/support">
                                    Support
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/license">
                                    License
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>

                    <button
                            className={"rounded-md bg-slate-100 px-4 py-2 font-dmSans text-lg font-bold text-slate-800"}
                    ><a href={"https://chat.whatsapp.com/EB57TBwEsDlAE4kvpEHXuu"}>
                        Join Updates Group
                    </a>
                    </button>
                </div>
            </div>
            <div className={"col-span-12 hidden lg:col-span-6 lg:block"}>
                {/* <!--<HeroSlider sliderImages={sliderImages} client:only="react" />--> */}
                <iframe  className="w-full h-full rounded-lg border-2 border-gray-300 shadow"src="https://www.youtube.com/embed/LM9zx4k2kQs?si=J5e4ZAEWFZNYOI7C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </div>


        <div className={"container flex flex-col gap-8 my-5"}>
            <h1 className={"font-outfit text-4xl font-extrabold text-slate-800 lg:text-5xl"}>
                Your Benefits
            </h1>
            <div className={"container grid grid-cols-12 gap-5"}>
                <div className={"col-span-12 lg:col-span-6"}>
                    <HeroSlider sliderImages={eventsImages} client:only="react"/>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                    <div>
                        <h1 className={"flex flex-row gap-2 items-center font-dmSans text-lg font-bold text-slate-800"}>
                            <svg className="w-5 h-5 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                            </svg>
                            Personal Development
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Joining Rotaract provides a unique platform for personal growth. Engage in workshops and
                            seminars that <strong>enhance your leadership, communication, and organizational
                            skills</strong>. Build confidence, empathy, and resilience through hands-on projects,
                            preparing you for future challenges in both your professional and personal life.
                        </p>
                    </div>

                    <div>
                        <h1 className={"flex flex-row gap-2 items-center font-dmSans text-lg font-bold text-slate-800"}>
                            <svg className="w-5 h-5 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                            </svg>
                            Community Impact
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Rotaract offers the opportunity to <strong>make a real difference in the community</strong>.
                            Participate in impactful social service projects, ranging from education and healthcare
                            initiatives to environmental conservation efforts. Experience the joy of giving back,
                            knowing that your contributions directly improve lives and create positive change.
                        </p>
                    </div>

                    <div>
                        <h1 className={"flex flex-row gap-2 items-center font-dmSans text-lg font-bold text-slate-800"}>
                            <svg className="w-5 h-5 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                            </svg>
                            Global Network and Collaboration
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            As a Rotaract member, <strong>you become part of an extensive international network</strong>.
                            Connect with like-minded individuals not only locally but also globally. Collaborate on
                            projects with Rotaract clubs from different countries, fostering cultural understanding and
                            creating a broader perspective on global issues.
                        </p>
                    </div>

                    <div>
                        <h1 className={"flex flex-row gap-2 items-center font-dmSans text-lg font-bold text-slate-800"}>
                            <svg className="w-5 h-5 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                            </svg>
                            Professional Networking
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Rotaract provides a platform for professional networking and mentorship. Interact with
                            professionals from diverse fields who are often guest speakers at club events. Gain insights
                            into various careers, learn about industry trends, and <strong>create valuable connections
                            that could potentially shape your future career path</strong>.
                        </p>
                    </div>

                    <div>
                        <h1 className={"flex flex-row gap-2 items-center font-dmSans text-lg font-bold text-slate-800"}>
                            <svg className="w-5 h-5 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                            </svg>
                            Recognition and Certificates
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Your involvement in Rotaract is recognized and celebrated. Receive certificates
                            acknowledging your active participation and contributions to club activities. These
                            certificates serve as a testament to your dedication to community service and leadership,
                            <strong>enhancing your resume and showcasing your commitment to social
                                responsibility</strong>.
                        </p>
                    </div>

                </div>
            </div>
        </div>


        <div className={"container flex flex-col gap-8 my-5"}>
            <h1 className={"font-outfit text-4xl font-extrabold text-slate-800 lg:text-5xl"}>
                Events
            </h1>
            <div className={"container grid grid-cols-12 gap-8"}>

                {
                    events
                      .map((event)=>(
                        <a href=`/events/${event.slug}`
                           className="cursor-pointer group col-span-12 lg:col-span-4 rounded flex flex-col justify-between overflow-hidden shadow-lg hover:border-blue-600 border-transparent border-2 transition duration-200">
                            <div>
                                <Image
                                    height="250"
                                    width="500" 
                                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                                    src={event.data.image}
                                    alt={event.data.title}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{event.data.title}</div>
                                    <div className="text-gray-700 text-justify"> {event.data.description} </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center px-6 transition duration-200 ease-in-out translate-y-10 group-hover:-translate-y-0 w-full bg-blue-600 h-10">
                              <span className="text-white font-bold text-center">
                                  {format(event.data.date, 'dd MMM, yyyy')}
                              </span>
                            </div>
                        </a>
                      ))
                }
            </div>
            <div className="flex flex-row w-full items-center justify-center">
                <a href="/events" className="relative rounded-md bg-slate-700 px-4 py-2 font-dmSans text-sm font-bold text-white transition-all duration-200 hover:bg-rose-500 md:text-lg group">
                    View All Events
                </a>
            </div>
        </div>

        <div className={"container flex flex-col gap-8 my-5"}>
            <h1 className={"font-outfit text-4xl font-extrabold text-slate-800 lg:text-5xl"}>
                All Domains
            </h1>
            <div className={"container grid grid-cols-12 gap-5"}>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/community.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Community Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Engage in vital community service projects focusing on education, healthcare, and social welfare.
                        </p>
                        <a
                        href={"/about/domain/community-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/club.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Club Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Contribute to planning events, meetings, and member activities. Develop leadership skills within the club.
                        </p>
                        <a
                        href={"/about/domain/club-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/vocational.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Vocational Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Enhance vocational skills through workshops and seminars. Gain insights related to your future profession.
                        </p>
                        <a
                        href={"/about/domain/vocational-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/literary.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Literary Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Participate in writing contests, poetry readings, and book discussions. Explore and share your passion for words.
                        </p>
                        <a
                        href={"/about/domain/literary-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/international.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            International Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Engage in global projects, cultural exchanges, and collaborations with Rotaract clubs worldwide. Expand your horizons.
                        </p>
                        <a
                        href={"/about/domain/international-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/multimedia.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Multimedia Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Contribute to graphic design, video production, and digital media projects. Showcase creativity and technical skills.
                        </p>
                        <a
                        href={"/about/domain/multimedia-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/public-relations.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Public Relations Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Shape the club's public image through communication strategies and social media management.
                        </p>
                        <a
                        href={"/about/domain/public-relations-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/photography.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Photography Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Capture moments at events and community projects. Develop photography skills and visually enhance the club's narrative.
                        </p>
                        <a
                        href={"/about/domain/photography-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/social-media.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Social Media
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Manage online presence, create content, and run campaigns. Connect with a wider audience.
                        </p>
                        <a
                        href={"/about/domain/social-media-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/management.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Management Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Contribute to event planning and execution. Hone organizational and leadership skills.
                        </p>
                        <a
                        href={"/about/domain/management-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/performance-art.png"}
                            alt={"Think"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Performing Arts
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Showcase talents in music, dance, theater, and more. Contribute creatively to cultural events.
                        </p>
                        <a
                        href={"/about/domain/performing-arts-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
                <!-- New Technical Services Domain -->
                <div className={"col-span-12 sm:col-span-6 grid w-full cursor-pointer grid-cols-5 rounded-lg border-2 border-slate-200 py-4 px-2 hover:border-slate-400 md:col-span-4 lg:col-span-3"}>
                    <div className={"col-span-full md:col-span-1"}>
                        <Image
                            height={32}
                            width={32}
                            src={"/icons/domain/technical.png"}
                            alt={"Technical Services"}
                            className={"md:mx-auto"}
                        />
                    </div>
                    <div className={"col-span-full md:col-span-4"}>
                        <h1 className={"font-dmSans text-lg font-bold text-slate-800"}>
                            Technical Services
                        </h1>
                        <p className={"font-dmSans text-sm text-slate-600"}>
                            Engage in Website Development, IT support, and other tech-related projects, contributing to the club's digital presence.
                        </p>
                        <a
                        href={"/about/domain/technical-services"}
                        className={"text-sm text-rose-500 hover:underline flex flex-row items-center "}
                        >
                            <span className="pb-1">Know More</span>
                            <RiArrowRightSLine client:only="react" classNameName={"inline-block"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</Layout>

    </div>
  )
}

export default index

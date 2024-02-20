import React from "react";
import joinUsImage from "../images/reken-join-us.png";
import rekenLogoLarge from "../images/reken-logo-lg.png";
import deepFakeImage from "../images/deep-fake.png";
import scammerImage from "../images/scammer.png";
import badGoodAI from "../images/bad-good-ai.png";
import homeBg from "../video/reken-home-bg.mp4";
import GlowButton from "../components/glowButton/GlowButton";
import Footer from "../components/footer/Footer";

const Homepage = () => {
    return (
        <>
            <div className="relative h-screen flex flex-col justify-center items-center">
                <video
                    className="object-cover w-screen h-screen absolute top-0 left-0 z-0"
                    autoPlay
                    loop
                    muted
                    playsinline
                >
                    <source src={homeBg} type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
                <section className="text-center items-center p-8 relative z-2">
                    <div className="">
                        <figure className="max-w-lg mx-auto lg:max-w-lg">
                            <img
                                className="h-auto w-full lg:max-w-full rounded-lg"
                                src={rekenLogoLarge}
                                alt="logo-large"
                            />
                        </figure>
                        <div className="text-gradient">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                PROTECTING THE PRESENT
                            </h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 sm:mt-0">
                                SECURING THE FUTURE
                            </h1>
                        </div>
                        <div className="mt-10 sm:mt-16">
                            <GlowButton
                                buttonText="Learn More"
                                sectionId="#defensive-ai-section"
                                ariaLabel="Scroll to Defensive AI Section"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div
                className="min-h-screen flex flex-col justify-center items-center bg-black"
                id="defensive-ai-section"
            >
                <div className="text-white p-4 md:p-8 md:pt-2 text-4xl md:text-7xl text-center">
                    <div className="md:mt-4">Unleashing the Necessity of</div>
                    <div className="mt-1 md:mt-5 font-bold">DEFENSIVE AI</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-black p-8 pb-4 lg:p-32 lg:py-2">
                    <div className="flex items-center aspect-w-1 aspect-h-1 rounded-xl bg-radial-gradient overflow-hidden border">
                        <img
                            className="h-full w-full object-cover"
                            src={scammerImage}
                            alt=""
                        />
                    </div>

                    <div className="items-center aspect-w-1 lg:aspect-w-2 aspect-h-1 rounded-3xl md:col-span-2 lg:col-span-2 sm:col-span-1 border glass">
                        <div className="gradient-border rounded-xl flex flex-col h-full justify-center">
                            <div className="text-white text-xl md:text-2xl p-8 ">
                                <div>
                                    Purpose: We are building a new type of AI
                                    platform and products with the primary
                                    purpose of safeguarding against generative
                                    AI threats.
                                </div>

                                <div className="mt-6">
                                    In the ever-evolving landscape of artificial
                                    intelligence, the need for robust security
                                    measures has become more critical than ever.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center aspect-w-1 aspect-h-1 rounded-xl bg-radial-gradient overflow-hidden border">
                        <img
                            className="h-full w-full object-cover"
                            src={deepFakeImage}
                            alt=""
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black p-8 pt-4 lg:p-32 lg:py-4">
                    <div className="items-center aspect-w-2 aspect-h-1 rounded-3xl border glass">
                        <div className="gradient-border rounded-xl flex flex-col h-full justify-center">
                            <div className="text-white text-lg md:text-2xl p-8">
                                Generative AI scams are on the rise: 22% of
                                companies hit by AI-powered fake accounts,
                                rising to 27% in finance.
                            </div>
                        </div>
                    </div>

                    <div className="items-center aspect-w-1 aspect-h-1 rounded-xl bg-radial-gradient overflow-hidden border">
                        <img
                            className="h-full w-full object-cover"
                            src={badGoodAI}
                            alt=""
                        />
                    </div>

                    <div className="items-center aspect-w-2 aspect-h-1 rounded-3xl border glass">
                        <div className="gradient-border rounded-xl flex flex-col h-full justify-center">
                            <div className="text-white text-lg md:text-2xl p-8">
                                AI scams target individuals with personalized,
                                believable phishing attempts, raising success
                                rates by 40%.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="md:min-h-screen bg-black p-16 flex flex-col md:flex-row justify-center items-center gap-16">
                <div className="flex flex-col items-center text-center max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Be a Pioneer in the Fight for Secure AI
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-8">
                        At Reken, we're revolutionizing the future of AI by
                        building cutting-edge defensive solutions. Join our
                        passionate team of experts to make a real impact and
                        shape the responsible development of AI.
                    </p>
                    <a
                        href="mailto:jobs@reken.ai"
                        className="border hover:bg-white hover:text-black hover:border-black text-white px-8 py-3 rounded-md shadow-md bg-slate-900"
                    >
                        Mail us
                    </a>
                </div>
                <div className="items-center justify-center hidden md:flex p-4 -mt-24">
                    <img
                        src={joinUsImage}
                        alt="Join Us Illustration"
                        className="rounded-xl h-auto w-auto max-w-md max-h-md object-cover"
                    />
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Homepage;

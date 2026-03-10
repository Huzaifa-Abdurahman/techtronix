"use client";

import { useState, useEffect } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Grid,
    Layers,
    Box
} from 'lucide-react';
import Image from 'next/image';

// Custom hook for scroll animation
function useInView(options = { threshold: 0.1 }) {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);
            }
        }, options);
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, options]);

    return [setRef, inView] as const;
}

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
    const [ref, inView] = useInView();
    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

const GeosyntheticsPage = () => {
    return (
        <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col mt-0">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-[0] pointer-events-none opacity-40 mix-blend-multiply">
                <Image src="/i7.jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#1b326b] mix-blend-color opacity-70"></div>
            </div>

            {/* --- HERO SECTION ---  */}
            <div className="relative w-full pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 mx-auto min-h-[60vh] flex flex-col justify-center">
                <div
                    className="absolute inset-0 z-[1] bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: "url('/i6 (1).jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b42]/90 via-[#0a1b42]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto w-full">


                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-serif font-bold leading-[1.05] tracking-tight text-white mb-6 text-left drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            Geosynthetics Solutions
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-[white] font-bold mb-10 max-w-[650px] text-left drop-shadow-sm border-l-4 border-[#4E9CE4] pl-6 transition-colors duration-500">
                            Advanced geosynthetics solutions to enhance soil stability,<br className="hidden md:block" />
                            reinforce infrastructure, and control erosion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                            <a href="/contact" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-transparent hover:border-[#4E9CE4]/30 text-center rounded-sm">
                                Request a Consultation
                            </a>
                            <a href="/about" className="flex-1 py-3 px-6 bg-white/90 hover:bg-white text-[#1b326b] font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-white/40 text-center rounded-sm">
                                Learn More
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* --- SERVICE OVERVIEW SECTION --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full mt-8 group">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-xl opacity-100 transition-opacity duration-1000 z-[-1] shadow-sm border border-[#CED6DE]/50"></div>
                <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
                    <FadeIn delay={100} className="lg:w-1/2">
                        <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-8 hover:text-[#4E9CE4] transition-colors duration-500">
                            Service Overview
                        </h2>
                        <p className="text-[17px] text-[#2d3748] font-medium leading-relaxed mb-6">
                            TechTronix Solutions offers comprehensive geosynthetics solutions designed to strengthen infrastructure, improve soil stability, and optimize construction performance. Our expertise spans <span className="font-bold text-[#1b326b]">Geogrids</span>, <span className="font-bold text-[#1b326b]">Geotextiles</span>, <span className="font-bold text-[#1b326b]">Geocells</span>, and <span className="font-bold text-[#1b326b]">Geotubes</span>, providing innovative and cost effective solutions for highways, industrial sites, embankments, retaining structures, erosion control, and environmental projects.
                        </p>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="relative aspect-[16/9] w-full shadow-xl overflow-hidden rounded-md border border-[#CED6DE]/30">
                            <Image src="/i6 (2).jpg" alt="Service Overview" fill className="object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- OUR GEOSYNTHETICS SERVICES --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-12 text-center md:text-left hover:text-[#4E9CE4] transition-colors duration-500">
                        Our Geosynthetics Services
                    </h2>
                </FadeIn>

                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    {/* Left side: Grid of cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-[65%] w-full">
                        {/* Card 1: Geogrids */}
                        <FadeIn delay={100} className="w-full h-full">
                            <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                                <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                    <Grid size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-6 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Geogrids
                                </h3>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Pavement reinforcement</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Slope stabilltation and retaining structures</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Load distribution for embankments</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Card 2: Geotextles */}
                        <FadeIn delay={200} className="w-full h-full">
                            <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                                <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                    <Layers size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-6 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Geotextles
                                </h3>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Separation layers</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Erosion and sediment control</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Drainage and fiirlation in subsoil</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Reinforcement in retaining walls</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Card 3: Geocells */}
                        <FadeIn delay={300} className="w-full h-full">
                            <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                                <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                    <Box size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-6 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Geocells
                                </h3>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Slope protection and embankment stabiilization</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Retaining walls and channel protection</span>
                                    </li>
                                    <li className="flex gap-3 text-[14px] text-slate-700 font-medium">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1b326b] shrink-0"></div>
                                        <span>Load support for soft soil foundations infrastructure</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right side: images stacked grid */}
                    <div className="lg:w-[35%] flex flex-col gap-4">
                        <FadeIn delay={200} className="w-full h-1/2 min-h-[200px] relative rounded-md overflow-hidden shadow-md">
                            <Image src="/i6 (3).jpg" alt="Project 1" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                        </FadeIn>
                        <FadeIn delay={300} className="w-full h-1/2 min-h-[220px] relative rounded-md overflow-hidden shadow-md">
                            <Image src="/i6 (4).jpg" alt="Project 2" fill className="object-cover object-bottom hover:scale-110 transition-transform duration-700" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE SECTION --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-xl opacity-100 transition-opacity duration-1000 z-[-1] shadow-sm border border-[#CED6DE]/50 mx-6 md:mx-12"></div>
                <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                    <FadeIn delay={100} className="lg:w-1/3">
                        <h2 className="text-[28px] md:text-[34px] font-serif font-black text-[#1b326b] tracking-tight mb-6 leading-snug">
                            Why Choose TechTronix for Geosynthetics
                        </h2>
                        <div className="w-16 h-1 bg-[#4E9CE4] mb-8"></div>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-2/3">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Expertise in design, supply, and installation of advanced geosynthetics",
                                "Solutions tailored to local conditions and project requirements",
                                "Integration of engineering analysis with construction best practices",
                                "Sustainable and cost-effective reinforcement strategies",
                                "Reliable performance for highway, industrial, environmenental, and infrastructure projects."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="mt-1 shrink-0 bg-[#4E9CE4]/10 rounded-full p-0.5 h-6 w-6 flex items-center justify-center">
                                        <CheckCircle2 size={16} strokeWidth={3} className="text-[#4E9CE4]" />
                                    </div>
                                    <span className="text-[15px] font-medium text-[#2d3748] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </section>

            {/* --- CTA BOTTOM SECTIONS --- */}

            {/* CTA 1 */}
            <section className="relative z-10 w-full mt-10">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] via-[#142654] to-[#0a1b42] p-12 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 border-y border-[#4E9CE4]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-[28px] font-serif font-bold text-white tracking-tight drop-shadow-sm max-w-lg leading-tight">
                            Ready to Enhance Your Infrastructure with Geosynthetics?
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 shrink-0">
                        <a href="/contact" className="py-3 px-8 bg-[#0a1b42] hover:bg-[#4E9CE4] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center border border-[#4E9CE4]/50 hover:border-transparent">
                            Contact Our Engineering Team
                        </a>
                        <a href="/services" className="py-3 px-8 bg-white hover:bg-slate-100 text-[#1b326b] font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center">
                            Request Geosynthetics Services
                        </a>
                    </div>
                </FadeIn>
            </section>

            {/* Q&A / Text band */}
            <section className="relative z-10 w-full bg-white/40 backdrop-blur-sm border-b border-[#CED6DE]/50 py-10 px-6 md:px-12 text-center">
                <FadeIn>
                    <p className="max-w-[1200px] mx-auto text-[14px] md:text-[15px] text-[#2d3748] font-medium leading-relaxed">
                        <span className="font-bold text-[#1b326b]">A: TechTronix Solutions,</span> our geosynthetics services deliver strength, stability, and sustainability, ensuring your projects are long-lasting.realient, and compliant with medern engineering standards, nirahnaniix:
                    </p>
                </FadeIn>
            </section>

            {/* CTA 2 (Bottom bar repeated text as per design) */}
            <section className="relative z-10 w-full bg-gradient-to-r from-[#0a1b42] to-[#1b326b] py-12 px-6 md:px-12 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <FadeIn className="relative z-10">
                    <h2 className="text-[20px] md:text-[24px] font-sans font-medium text-white tracking-tight drop-shadow-sm">
                        Ready to Enhance Your Infrestructure with Geosynthetics?
                    </h2>
                </FadeIn>
            </section>

        </div >
    );
};

export default GeosyntheticsPage;

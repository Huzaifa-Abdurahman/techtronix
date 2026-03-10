"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ChevronDown,
    Map,
    Settings,
    Layers,
    Briefcase,
    Check,
    Linkedin,
    Twitter,
    Instagram
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

const ServicesPage = () => {
    return (
        <div className="flex-1 bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative mt-0">

            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
                <Image src="/i7.jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#1b326b] mix-blend-color opacity-70"></div>
            </div>



            {/* --- HERO SECTION ---  */}
            <div className="relative w-full pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 mx-auto min-h-[60vh] flex flex-col justify-center overflow-hidden">

                <div className="max-w-[1500px] mx-auto w-full z-10">
                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-serif font-bold leading-[1.05] tracking-tight text-[#1b326b] mb-6 text-left drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            Engineering Solutions
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-[#2d3748] mb-10 max-w-[650px] text-left drop-shadow-sm border-l-4 border-[#4E9CE4] pl-6 hover:border-[#1b326b] transition-colors duration-500">
                            Modern civil engineering services for efficient planning,<br className="hidden md:block" />
                            precise design & innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                            <a href="/contact" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-transparent hover:border-[#4E9CE4]/30 text-center rounded-sm">
                                Request a Consultation
                            </a>
                            <a href="/services" className="flex-1 py-3 px-6 bg-white hover:bg-slate-50 text-[#1b326b] font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-[#CED6DE]/80 text-center rounded-sm">
                                Get Engineering Support
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* --- SERVICE OVERVIEW SECTION --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full mt-8 group">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-[-1]"></div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <FadeIn delay={100} className="lg:w-1/2">
                        <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-8 hover:text-[#4E9CE4] transition-colors duration-500">
                            Service Overview
                        </h2>
                        <p className="text-[17px] text-[#2d3748] font-medium leading-relaxed mb-6 hover:text-black transition-colors duration-300">
                            TechTronix Solutions delivers comprehensive engineering services to tackle complex civil team infrastructure projects. Ony car emimove rechiical oxpermee, advance designrigh troes, and and innovative solutions to develop efficient, presise, and sustainable outcomes.
                        </p>
                        <p className="text-[17px] text-[#2d3748] font-medium leading-relaxed hover:text-black transition-colors duration-300">
                            From initial planning to construction oversight, we provide taiiored seluctses that ensure sructural integrity, safety, and cost effective results, sre plur.
                        </p>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="relative aspect-[16/9] w-full shadow-xl overflow-hidden rounded-md group-hover:shadow-[#4E9CE4]/20 transition-shadow duration-700">
                            <Image src="/i3.jpg" alt="Service Overview" fill className="object-cover hover:scale-110 transition-transform duration-1000 ease-out" />
                            <div className="absolute inset-0 bg-[#1b326b]/10 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- CORE ENGINEERING SERVICES --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-12 text-center md:text-left hover:text-[#4E9CE4] transition-colors duration-500">
                        Our Core Engineering Services
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1 */}
                    <FadeIn delay={100} className="w-full">
                        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-center rounded-xl border border-transparent hover:border-[#4E9CE4]/30 hover:-translate-y-2 group cursor-default">
                            <div className="mb-6 flex justify-center group-hover:scale-110 group-hover:text-[#4E9CE4] transition-transform duration-500">
                                <Map size={48} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-500">
                                Site Planning<br />& Surveying
                            </h3>
                            <p className="text-[15px] text-slate-600 leading-relaxed font-medium group-hover:text-black transition-colors duration-300">
                                Expert site evaluations, topographic surveys, and land use planning.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 2 */}
                    <FadeIn delay={200} className="w-full">
                        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-center rounded-xl border border-transparent hover:border-[#4E9CE4]/30 hover:-translate-y-2 group cursor-default">
                            <div className="mb-6 flex justify-center group-hover:scale-110 group-hover:text-[#4E9CE4] transition-transform duration-500">
                                <Layers size={48} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-500">
                                Structural Design<br />& Analysis
                            </h3>
                            <p className="text-[15px] text-slate-600 leading-relaxed font-medium group-hover:text-black transition-colors duration-300">
                                Advanced structural design, analyss, and optimizatior bulidings, bridges, and other structures
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 3 */}
                    <FadeIn delay={300} className="w-full">
                        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-center rounded-xl border border-transparent hover:border-[#4E9CE4]/30 hover:-translate-y-2 group cursor-default">
                            <div className="mb-6 flex justify-center group-hover:scale-110 group-hover:text-[#4E9CE4] transition-transform duration-500">
                                <Settings size={48} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-500">
                                Civil Infrastructure<br />Design
                            </h3>
                            <p className="text-[15px] text-slate-600 leading-relaxed font-medium group-hover:text-black transition-colors duration-300">
                                Innovative design of highways, roads, utilties, stormwater systems, and foundations
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 4 */}
                    <FadeIn delay={400} className="w-full">
                        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-center rounded-xl border border-transparent hover:border-[#4E9CE4]/30 hover:-translate-y-2 group cursor-default">
                            <div className="mb-6 flex justify-center group-hover:scale-110 group-hover:text-[#4E9CE4] transition-transform duration-500">
                                <Briefcase size={48} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-500">
                                Construction<br />& Project Management
                            </h3>
                            <p className="text-[15px] text-slate-600 leading-relaxed font-medium group-hover:text-black transition-colors duration-300">
                                Comprehinsive construction oversight s scheduling, budgeting. and quality assurance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- COMPREHENSIVE SOLUTIONS FOR CIVIL ENG --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full group/solutions">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover/solutions:opacity-100 transition-opacity duration-1000 blur-xl z-[-1]"></div>
                <FadeIn>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-8 hover:text-[#4E9CE4] transition-colors duration-500">
                        Comprehensive Solutions for Civil Engineering
                    </h2>
                </FadeIn>

                <div className="flex flex-col lg:flex-row gap-12">
                    <FadeIn delay={100} className="lg:w-1/2">
                        <ul className="flex flex-col gap-6 pt-4">
                            {[
                                "Highways, roads & bridges",
                                "Commercial & industrial sites",
                                "Water resources & storm-water systems",
                                "Foundations & retaining structures",
                                "Sustainable & green infrastructure."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 group/item hover:translate-x-3 transition-transform duration-300 cursor-default">
                                    <div className="bg-[#1b326b]/10 p-2 rounded-full group-hover/item:bg-[#4E9CE4] group-hover/item:text-white transition-colors duration-300">
                                        <Check className="text-[#1b326b] group-hover/item:text-white transition-colors duration-300 shrink-0" size={20} strokeWidth={3} />
                                    </div>
                                    <span className="text-[17px] text-[#4a5568] font-medium group-hover/item:text-black transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 h-[400px]">
                            {/* Tall Left Image */}
                            <div className="relative w-full h-full shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 group">
                                <Image src="/i2.jpg" alt="Commercial Site" fill className="object-cover hover:scale-110 transition-transform duration-1000 ease-out" />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
                            </div>
                            {/* Two Right Images Stacked */}
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full h-[calc(50%-0.5rem)] shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 group">
                                    <Image src="/i4.jpg" alt="Highway Bridge" fill className="object-cover hover:scale-110 transition-transform duration-1000 ease-out" />
                                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700"></div>
                                </div>
                                <div className="relative w-full h-[calc(50%-0.5rem)] shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 group">
                                    <Image src="/i5.jpg" alt="Water Resources" fill className="object-cover hover:scale-110 transition-transform duration-1000 ease-out" />
                                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700"></div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- CTA BANNER --- */}
            <section className="relative z-10 w-full mt-12 mb-0 h-[200px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/blue-i1.jpg" alt="CTA bg" fill className="object-cover brightness-50 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[#1b326b]/80"></div>
                </div>

                <FadeIn className="max-w-[1500px] mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
                    <h2 className="text-2xl md:text-[34px] font-serif font-bold text-white tracking-tight drop-shadow-md text-center md:text-left mb-6 md:mb-0 hover:text-blue-100 transition-colors duration-300">
                        Need Reliable Civil Engineering Solutions?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" className="py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[15px] transition-colors shadow-lg cursor-pointer text-center border border-[#0a1b42]">
                            Contact Our Engineering Team
                        </a>
                        <a href="/services" className="py-3 px-6 bg-gray-100 hover:bg-white text-[#1b326b] font-medium text-[15px] transition-colors shadow-lg cursor-pointer text-center">
                            Request Engineering Services
                        </a>
                    </div>
                </FadeIn>
            </section>


        </div>
    );
};

export default ServicesPage;

"use client";

import { useState, useEffect } from 'react';
import {
    Droplets,
    CheckCircle2,
    Factory,
    Building2,
    Filter,
    PenTool,
    Leaf,
    Activity
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

const WasteWaterTreatmentPage = () => {
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
                    style={{ backgroundImage: "url('/i10 (1).jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b42]/90 via-[#0a1b42]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto w-full">
                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-serif font-bold leading-[1.05] tracking-tight text-white mb-6 text-left drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            Waste Water Treatment Solutions
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-blue-50/90 mb-10 max-w-[650px] text-left drop-shadow-sm border-l-4 border-[#4E9CE4] pl-6 transition-colors duration-500">
                            Smart, Sustainable & Compliant Water<br className="hidden md:block" />
                            Treatment Systems
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                            <a href="/contact" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-transparent hover:border-[#4E9CE4]/30 text-center rounded-sm">
                                Contact Our Engineering Team
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
                            Our Waste Water Treatment services are designed to reduce environmental impact, conserve water resources, and ensure safe discharge or reuse of treated water. We combine advanced engineering, modern technologies, and regulatory expertise to deliver cost-effective and scalable treatment systems.
                        </p>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="relative aspect-[16/9] w-full shadow-xl overflow-hidden rounded-md border border-[#CED6DE]/30 flex flex-col">
                            <Image src="/i10 (2).jpg" alt="Waste Water Treatment Overview" fill className="object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- KEY SERVICES GRID --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-12 text-center md:text-left hover:text-[#4E9CE4] transition-colors duration-500">
                        Our Waste Water Treatment Services
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <FadeIn delay={100} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Factory size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Industrial Wastewater Management
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Customized treatment systems for manufacturing, oil & gas, power plants, and industrial complexes.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Building2 size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Municipal & Commercial Wastewater Solutions
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Turnkey solutions for municipal sewage systems, commercial buildings, housing societies.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Filter size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Advanced Treatment Technologies
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Tailored systems based on site conditions, regulatory standards, and client objectives.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <PenTool size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Customized Design & Engineering
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Tailored systems based on site conditions, regulatory standards, and client objectives.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={500} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Leaf size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Environmental Compliance & Sustainability
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Eco-friendly solutions that meet local and international environmental standards.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={600} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Activity size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[22px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Monitoring & Maintenance Services
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Comprehensive system monitoring, operational support, and maintenance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- WHY CHOOSE SECTION --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-xl opacity-100 transition-opacity duration-1000 z-[-1] shadow-sm border border-[#CED6DE]/50 mx-6 md:mx-12"></div>
                <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                    <FadeIn delay={100} className="lg:w-1/3">
                        <h2 className="text-[28px] md:text-[34px] font-serif font-black text-[#1b326b] tracking-tight mb-6 leading-snug">
                            Why Choose TechTronix for Waste Water Treatment?
                        </h2>
                        <div className="w-16 h-1 bg-[#4E9CE4] mb-8"></div>

                        <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg border border-[#CED6DE]/50 mt-8">
                            <Image src="/i10 (3).jpg" alt="Water Treatment Process" fill className="object-cover" />
                        </div>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-2/3 flex items-center">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {[
                                "Expertise in industrial, municipal & commercial WWT systems",
                                "Advanced and eco-friendly treatment technologies",
                                "Customized engineering solutions",
                                "Compliance with environmental regulations",
                                "Reliable operation & long-term support."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1 shrink-0 bg-[#4E9CE4]/10 rounded-full p-0.5 h-6 w-6 flex items-center justify-center">
                                        <CheckCircle2 size={16} strokeWidth={3} className="text-[#4E9CE4]" />
                                    </div>
                                    <span className="text-[16px] font-medium text-[#2d3748] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </section>

            {/* --- CTA BOTTOM SECTIONS --- */}
            <section className="relative z-10 w-full mt-10">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] via-[#142654] to-[#0a1b42] p-12 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 border-y border-[#4E9CE4]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-[28px] font-serif font-bold text-white tracking-tight drop-shadow-sm max-w-lg leading-tight">
                            Ready to Optimize Your Waste Water Management?
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 shrink-0">
                        <a href="/contact" className="py-3 px-8 bg-[#0a1b42] hover:bg-[#4E9CE4] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center border border-[#4E9CE4]/50 hover:border-transparent">
                            Contact Our Engineering Team
                        </a>
                        <a href="/services" className="py-3 px-8 bg-white hover:bg-slate-100 text-[#1b326b] font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center">
                            Request Waste Water Treatment Services
                        </a>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
};

export default WasteWaterTreatmentPage;

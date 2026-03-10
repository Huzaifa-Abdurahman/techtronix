"use client";

import { useState, useEffect } from 'react';
import {
    CheckCircle2,
    CalendarDays,
    Calculator,
    AlertTriangle,
    Maximize,
    ArrowRight
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

const ContactorPreEngineeringPage = () => {
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
                    style={{ backgroundImage: "url('/i9 (1).jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b42]/90 via-[#0a1b42]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto w-full">
                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-serif font-bold leading-[1.05] tracking-tight text-white mb-6 text-left drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            Contactor Pre-Engineering
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-blue-50/90 mb-10 max-w-[650px] text-left drop-shadow-sm border-l-4 border-[#4E9CE4] pl-6 transition-colors duration-500">
                            Ensuring Well-Structured and Efficient Project Planning<br className="hidden md:block" />
                            Before Execution
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
                            Contactor Pre-Engineering Overview
                        </h2>
                        <p className="text-[17px] text-[#2d3748] font-medium leading-relaxed mb-6">
                            TechTronix Solutions offers Contactor Pre-Engineering services, a systematic approach to planning, designing, and preparing construction projects before execution. This service ensures that projects are well-structured, cost-effective, and efficiently managed, minimizing risks and maximizing resource utilization.
                        </p>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="relative aspect-[16/9] w-full shadow-xl overflow-hidden rounded-md border border-[#CED6DE]/30 flex flex-col">
                            <Image src="/i9 (2).jpg" alt="Contactor Pre-Engineering" fill className="object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- SERVICES CARDS GRID --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn>
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-12 text-center md:text-left hover:text-[#4E9CE4] transition-colors duration-500">
                        Our Contactor Pre-Engineering Services
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1 */}
                    <FadeIn delay={100} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <CalendarDays size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Detailed Planning<br />& Scheduling
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Creating comprehensive plans and schedules for efficient project execution.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 2 */}
                    <FadeIn delay={200} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Calculator size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Cost Estimation<br />& Budgeting
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Accurate cost estimation and budgeting to ensure financial control.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 3 */}
                    <FadeIn delay={300} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <AlertTriangle size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Risk Assessment<br />& Mitigation
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Identifying and mitigating potential risks before construction begins.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 4 */}
                    <FadeIn delay={400} className="w-full h-full">
                        <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#CED6DE]/30 group hover:shadow-2xl hover:border-[#4E9CE4]/40 transition-all duration-500 h-full">
                            <div className="mb-6 mx-auto w-16 h-16 bg-[#4E9CE4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4E9CE4] group-hover:scale-110 transition-all duration-500">
                                <Maximize size={32} strokeWidth={1.5} className="text-[#1b326b] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[20px] text-center font-serif font-bold text-[#1b326b] mb-4 border-b border-[#CED6DE]/40 pb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                Design & Resource<br />Optimization
                            </h3>
                            <p className="text-[15px] text-slate-700 font-medium leading-relaxed text-center">
                                Optimizing design and resource allocation for maximized efficiency and reduced waste.
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
                            Why Choose TechTronix for Pre-Engineering?
                        </h2>
                        <div className="w-16 h-1 bg-[#4E9CE4] mb-8"></div>

                        <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg border border-[#CED6DE]/50 mt-8">
                            <Image src="/i9 (3).jpg" alt="Pre-Engineering Planning" fill className="object-cover" />
                        </div>
                    </FadeIn>
                    <FadeIn delay={200} className="lg:w-2/3 flex flex-col justify-center">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                            {[
                                "Structured Approach",
                                "Experienced Engineering Team",
                                "Advanced Technologies",
                                "Cost-Effective & Timely Execution"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1 shrink-0 bg-[#4E9CE4]/10 rounded-full p-0.5 h-6 w-6 flex items-center justify-center">
                                        <CheckCircle2 size={16} strokeWidth={3} className="text-[#4E9CE4]" />
                                    </div>
                                    <span className="text-[16px] font-medium text-[#2d3748] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-[#1b326b]/5 border-l-4 border-[#4E9CE4] p-6 rounded-r-xl">
                            <p className="text-[16px] font-medium text-[#2d3748] leading-relaxed">
                                <span className="font-bold text-[#1b326b] mr-2">A:</span>
                                Tech Tronix Solutions provides expert pre-engineering services to ensure well-planned and efficiently managed construction projects worldwide. Through advanced platforms insights and precise technological deployments.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- CTA BOTTOM SECTIONS --- */}
            <section className="relative z-10 w-full mt-10">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] via-[#142654] to-[#0a1b42] p-12 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 border-y border-[#4E9CE4]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-[28px] font-serif font-bold text-white tracking-tight drop-shadow-sm max-w-lg leading-tight">
                            Ready to Build Smarter? Start Your Project with Confidence!
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 shrink-0">
                        <a href="/contact" className="py-3 px-8 bg-[#0a1b42] hover:bg-[#4E9CE4] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center border border-[#4E9CE4]/50 hover:border-transparent">
                            Contact Our Engineering Team
                        </a>
                        <a href="/services" className="py-3 px-8 bg-white hover:bg-slate-100 text-[#1b326b] font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center">
                            Request Pre-Engineering Services
                        </a>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
};

export default ContactorPreEngineeringPage;

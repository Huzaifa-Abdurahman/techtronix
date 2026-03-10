"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

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

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const [ref, inView] = useInView();
    return (
        <div ref={ref as any} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

const SuccessStoriesPage = () => {
    return (
        <div className="flex-1 bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative mt-0">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-[0] pointer-events-none opacity-50 mix-blend-multiply">
                <Image src="/i11 (2).jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#eaf2fb] mix-blend-color opacity-90"></div>
                <div className="absolute inset-0 bg-[#1b326b]/20 mix-blend-overlay"></div>
            </div>

            {/* --- HERO SECTION ---  */}
            <div className="relative w-full pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 mx-auto min-h-[50vh] flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-10 border-b border-white/20">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: "url('/i11 (1).jpg')" }}
                >
                    {/* Contrast overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1b326b]/95 via-[#1b326b]/70 to-[#4E9CE4]/40 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto w-full">
                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-sans font-medium leading-[1.05] tracking-tight text-white mb-6 text-left drop-shadow-lg">
                            Success Stories
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-blue-50/90 max-w-[650px] text-left drop-shadow-md">
                            Real projects. Real impact. Proven engineering excellence across<br className="hidden md:block" />
                            infrastructure, industrial, and civil domains
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-20 overflow-hidden pt-12">

                <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4 border-b border-[#1b326b]/20 pb-4">
                        <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#1b326b] tracking-tight drop-shadow-sm">
                            Success Stories
                        </h2>
                        <div className="flex bg-white/70 backdrop-blur-md border border-[#CED6DE] px-4 py-2 rounded-sm shadow-sm cursor-pointer items-center min-w-[200px] justify-between group hover:border-[#4E9CE4]/50 transition-colors">
                            <span className="text-[15px] font-medium text-[#1b326b]">All Projects</span>
                            <ChevronDown size={18} className="text-[#8492a6] group-hover:text-[#4E9CE4] transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 pb-24 flex flex-col gap-6">
                    {/* Story 1 */}
                    <FadeIn delay={100} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md rounded-sm overflow-hidden shadow-lg border border-white/50 flex flex-col md:flex-row h-full group hover:shadow-xl hover:border-[#4E9CE4]/40 transition-all duration-500">
                            {/* Left Image + Date */}
                            <div className="md:w-[400px] lg:w-[450px] h-64 md:h-auto relative shrink-0 overflow-hidden">
                                <Image src="/highway.jpg" alt="Highway Infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 rounded-sm flex flex-col items-center justify-center shadow-lg w-20 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                                    <span className="text-3xl font-bold leading-none">15</span>
                                    <span className="text-[11px] font-medium leading-tight mt-1">MAR</span>
                                    <span className="text-[11px] font-medium leading-none">2024</span>
                                </div>
                            </div>
                            {/* Right Content */}
                            <div className="p-8 md:p-10 lg:p-12 flex flex-col flex-1 justify-center relative bg-gradient-to-r from-white/90 to-transparent">
                                <h3 className="text-2xl md:text-[28px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Highway Infrastructure Strengthening Project
                                </h3>
                                <p className="text-[15px] md:text-[16px] text-slate-700 font-medium leading-relaxed mb-6">
                                    TechTronix Solutions successfully delivered a highway reinforcement project using advanced geosynthetics and BIM-based design solutions. The project improved load distribution, reduced long-term maintenance costs, and enhanced pavement life under heavy traffic conditions.
                                </p>
                                <a href="/geosynthetics-solutions" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors mt-auto w-max">
                                    Read More <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Story 2 */}
                    <FadeIn delay={200} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md rounded-sm overflow-hidden shadow-lg border border-white/50 flex flex-col md:flex-row h-full group hover:shadow-xl hover:border-[#4E9CE4]/40 transition-all duration-500">
                            <div className="md:w-[400px] lg:w-[450px] h-64 md:h-auto relative shrink-0 overflow-hidden">
                                <Image src="/i10 (2).jpg" alt="Wastewater Treatment" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 rounded-sm flex flex-col items-center justify-center shadow-lg w-20 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                                    <span className="text-3xl font-bold leading-none">02</span>
                                    <span className="text-[11px] font-medium leading-tight mt-1">JAN</span>
                                    <span className="text-[11px] font-medium leading-none">2024</span>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 lg:p-12 flex flex-col flex-1 justify-center relative bg-gradient-to-r from-white/90 to-transparent">
                                <h3 className="text-2xl md:text-[28px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Industrial Wastewater Treatment Facility Upgrade
                                </h3>
                                <p className="text-[15px] md:text-[16px] text-slate-700 font-medium leading-relaxed mb-6">
                                    TechTronix engineered and implemented a modern wastewater treatment solution for an industrial client ensuring environmental compliance, water reuse, and operational efficiency while reducing environmental risks.
                                </p>
                                <a href="/waste-water-treatment-solutions" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors mt-auto w-max">
                                    Read More <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Story 3 */}
                    <FadeIn delay={300} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md rounded-sm overflow-hidden shadow-lg border border-white/50 flex flex-col md:flex-row h-full group hover:shadow-xl hover:border-[#4E9CE4]/40 transition-all duration-500">
                            <div className="md:w-[400px] lg:w-[450px] h-64 md:h-auto relative shrink-0 overflow-hidden">
                                <Image src="/i6 (3).jpg" alt="Slope Stabilization" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 rounded-sm flex flex-col items-center justify-center shadow-lg w-20 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                                    <span className="text-3xl font-bold leading-none">18</span>
                                    <span className="text-[11px] font-medium leading-tight mt-1">NOV</span>
                                    <span className="text-[11px] font-medium leading-none">2023</span>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 lg:p-12 flex flex-col flex-1 justify-center relative bg-gradient-to-r from-white/90 to-transparent">
                                <h3 className="text-2xl md:text-[28px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    Slope Stabilization Using Geocells & Geogrids
                                </h3>
                                <p className="text-[15px] md:text-[16px] text-slate-700 font-medium leading-relaxed mb-6">
                                    A complex slope stabilization challenge was resolved through the strategic use of Geocells and geogrids. The solution improved soil confinement, erosion control, and long-term structural stability.
                                </p>
                                <a href="/geosynthetics-solutions" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors mt-auto w-max">
                                    Read More <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Story 4 */}
                    <FadeIn delay={400} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md rounded-sm overflow-hidden shadow-lg border border-white/50 flex flex-col md:flex-row h-full group hover:shadow-xl hover:border-[#4E9CE4]/40 transition-all duration-500">
                            <div className="md:w-[400px] lg:w-[450px] h-64 md:h-auto relative shrink-0 overflow-hidden">
                                <Image src="/i9 (3).jpg" alt="BIM Based Design" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 rounded-sm flex flex-col items-center justify-center shadow-lg w-20 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                                    <span className="text-3xl font-bold leading-none">05</span>
                                    <span className="text-[11px] font-medium leading-tight mt-1">SEP</span>
                                    <span className="text-[11px] font-medium leading-none">2023</span>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 lg:p-12 flex flex-col flex-1 justify-center relative bg-gradient-to-r from-white/90 to-transparent">
                                <h3 className="text-2xl md:text-[28px] font-serif font-bold text-[#1b326b] mb-4 group-hover:text-[#4E9CE4] transition-colors duration-300">
                                    BIM-Based Design & Clash Detection for Commercial Project
                                </h3>
                                <p className="text-[15px] md:text-[16px] text-slate-700 font-medium leading-relaxed mb-6">
                                    TechTronix provided BIM-based architectural, structural, and MEP coordination services, enabling early clash detection, optimized construction workflows, and significant cost savings for the client.
                                </p>
                                <a href="/contactor-pre-engineering" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors mt-auto w-max">
                                    Read More <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* --- CTA BANNER --- */}
                <div className="mb-20 px-6 md:px-12 max-w-[1500px] mx-auto z-20 relative">
                    <FadeIn className="bg-[#1b326b] rounded-sm p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                        {/* Interactive BG element */}
                        <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] mix-blend-overlay opacity-30 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4E9CE4]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                        <h2 className="text-2xl md:text-[34px] font-serif font-bold text-white mb-10 tracking-tight drop-shadow-sm relative z-10">
                            Building Success Through Engineering Excellence
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-[500px] relative z-10">
                            <a href="/services" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center text-decoration-none border border-transparent hover:border-[#4E9CE4]/30">
                                View Our Services
                            </a>
                            <a href="/contact" className="flex-1 py-3 px-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm border border-white/20 flex items-center justify-center gap-2 cursor-pointer text-center">
                                Contact Our Team <ArrowRight size={16} />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesPage;

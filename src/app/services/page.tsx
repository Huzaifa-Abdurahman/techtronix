"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ArrowRight,
    Linkedin,
    Twitter,
    Instagram,
    ChevronDown,
    Activity,
    Map,
    Settings,
    Layers,
    Briefcase,
    Droplets
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

            {/* Global Background Layer for glassmorphism effect (matching the cloudy/blue sky theme) */}
            <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-40">
                <Image src="/blue-i1.jpg" alt="Background" fill className="object-cover" />
            </div>



            {/* --- HERO SECTION ---  */}
            <div className="relative z-10 w-full pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 max-w-[1500px] mx-auto min-h-[50vh] flex flex-col justify-center">
                <div className="absolute inset-0 z-[-1] overflow-hidden rounded-b-[2rem] shadow-2xl mx-4 md:mx-8">
                    <Image src="/highway.jpg" alt="Hero Background" fill className="object-cover opacity-90" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1b326b]/90 via-[#4E9CE4]/70 to-[#4E9CE4]/30 mix-blend-multiply"></div>
                </div>

                <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8 px-4 md:px-8">
                    <h1 className="text-[40px] md:text-[55px] lg:text-[70px] font-sans font-medium leading-[1.1] tracking-tight text-white mb-6 text-left drop-shadow-md">
                        Our Solutions
                    </h1>
                    <p className="text-[16px] md:text-[20px] font-medium leading-relaxed text-blue-50 mb-10 max-w-[650px] text-left drop-shadow-sm">
                        Advanced, precision engineering solutions for<br className="hidden md:block" />
                        infrastructure, construction, and industry
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-[450px]">
                        <a href="/services" className="flex-1 py-3 px-6 bg-[#1b326b] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-colors shadow-lg rounded-sm border border-[#1b326b] text-center">
                            Request a Consultation
                        </a>
                        <a href="/contact" className="flex-1 py-3 px-6 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium text-[14px] md:text-[15px] transition-colors shadow-lg rounded-sm border border-white/40 text-center">
                            Contact Us
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* --- COMPREHENSIVE SERVICES GRID --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn>
                    <h2 className="text-[28px] md:text-[36px] font-sans font-medium text-[#1b326b] tracking-tight mb-12 drop-shadow-sm">
                        Comprehensive Engineering Services
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                    {/* Row 1: Left */}
                    <FadeIn delay={100} className="w-full">
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Activity size={24} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Highway NDT Services</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Non-destructive testing to ensure the safety, integrity, and longevity of highway infrastructure.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Row 1: Right */}
                    <FadeIn delay={200} className="w-full">
                        <a href="/contactor-pre-engineering" className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Map size={24} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Contactor Pre-Engineering</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Detailed pre-engineering structuring, cost-estimation, and mitigation surveys to assess site conditions and inform project design.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </FadeIn>

                    {/* Row 2: Left (Image Card) */}
                    <FadeIn delay={100} className="w-full">
                        <div className="relative w-full h-full min-h-[300px] rounded-sm overflow-hidden shadow-sm border border-white/50 group cursor-pointer">
                            <Image src="/roi.jpg" alt="ROMs Bustin System" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#1b326b]/20 mix-blend-overlay"></div>
                            {/* Date Block */}
                            <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 md:p-4 rounded-sm flex flex-col items-center justify-center shadow-lg w-20">
                                <span className="text-3xl font-bold leading-none">15</span>
                                <span className="text-[11px] font-medium leading-tight mt-1">MAR</span>
                                <span className="text-[11px] font-medium leading-none">2024</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Row 2: Right */}
                    <FadeIn delay={200} className="w-full">
                        <a href="/roms-bustin-system" className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Settings size={22} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">ROM's Bustin System</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Precision structural reinforcement and controlled demolition solutions for complex procurement environments.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </FadeIn>

                    {/* Row 3: Left */}
                    <FadeIn delay={100} className="w-full">
                        <a href="/geosynthetics-solutions" className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Layers size={22} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Geosynthetics Solutions</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Enhance soil stability, erosion control and infrastructure reinforcement using advanced geosynthetics.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </FadeIn>

                    {/* Row 3: Right */}
                    <FadeIn delay={200} className="w-full">
                        <a href="/engineering-solutions" className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Briefcase size={22} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Engineering Solutions</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Modern civil engineering services for efficient planning, precise design & innovative solutions.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </FadeIn>

                    {/* Row 4: Left (Image Card) */}
                    <FadeIn delay={100} className="w-full">
                        <div className="relative w-full h-full min-h-[300px] rounded-sm overflow-hidden shadow-sm border border-white/50 group cursor-pointer">
                            <Image src="/i2.jpg" alt="Environmental Services" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#1b326b]/10 mix-blend-overlay"></div>
                            {/* Date Block */}
                            <div className="absolute bottom-6 left-6 bg-[#d32f2f] text-white p-3 md:p-4 rounded-sm flex flex-col items-center justify-center shadow-lg w-20">
                                <span className="text-3xl font-bold leading-none">05</span>
                                <span className="text-[11px] font-medium leading-tight mt-1">SEP</span>
                                <span className="text-[11px] font-medium leading-none">2023</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Row 4: Right */}
                    <FadeIn delay={200} className="w-full">
                        <a href="/waste-water-treatment-solutions" className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Droplets size={24} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Waste Water Treatment</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Smart, sustainable & compliant water treatment systems to manage wastewater, air quality, and environmental risks.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </FadeIn>

                </div>
            </section>

            {/* --- CTA BANNER --- */}
            <section className="relative z-10 w-full mt-10 mb-20 px-6 md:px-12 max-w-[1500px] mx-auto">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] to-[#4E9CE4] rounded-sm p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-xl border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1b326b]/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                    <h2 className="text-2xl md:text-[34px] font-sans font-medium text-white mb-8 tracking-tight drop-shadow-sm relative z-10">
                        Ready to Advance Your Project with TechTronix?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-[500px] relative z-10">
                        <a href="/services" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center">
                            View Our Services
                        </a>
                        <a href="/contact" className="flex-1 py-3 px-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm border border-white/30 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-center">
                            Get in Touch <ArrowRight size={16} />
                        </a>
                    </div>
                </FadeIn>
            </section>


        </div>
    );
};

export default ServicesPage;

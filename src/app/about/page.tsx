"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ArrowRight,
    Linkedin,
    Twitter,
    Instagram,
    Check,
    ChevronDown,
    Quote
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

const AboutPage = () => {
    return (
        <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col mt-0">


            {/* --- PAGE HEADER HERO --- */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-[#1b326b] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/i1.jpg" alt="About Hero Background" fill className="object-cover opacity-60 mix-blend-overlay" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b42]/90 via-[#0a1b42]/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] w-full mx-auto text-center">
                    <FadeIn>
                        <h1 className="text-[40px] md:text-[65px] lg:text-[80px] font-serif font-bold text-white leading-none tracking-tight mb-6 drop-shadow-lg">
                            About Us
                        </h1>
                        <p className="text-[16px] md:text-[20px] font-medium text-[#4E9CE4] tracking-widest uppercase pb-4">
                            Building Excellence Through Expertise & Innovation
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* --- COMPANY HISTORY & INFO --- */}
            <section className="relative py-24 px-6 md:px-12 bg-white flex-1">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-20">



                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn delay={100} className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group border border-[#CED6DE]/30">
                            <Image src="/i1.jpg" alt="Company Operations" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#4E9CE4]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#CED6DE] rounded-full blur-3xl opacity-50 z-[-1]"></div>
                        </FadeIn>

                        <FadeIn delay={200} className="flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-[#1b1b1b] mb-6 tracking-tight">
                                Established in 2001
                            </h2>
                            <div className="w-16 h-1 bg-[#4E9CE4] mb-8"></div>

                            <div className="space-y-5 text-[15px] md:text-[16px] text-slate-600 leading-relaxed font-medium">
                                <p>
                                    Tech Tronix Solutions (TTS) is a multi-disciplinary engineering and technology company delivering integrated solutions across construction, design, digital infrastructure, and advanced technology services.
                                </p>
                                <p>
                                    We empower comprehensive service delivery providing expertise in engineering systems, precision master planning, infrastructure networks, and core execution management. Our operations encompass structural systems, digital infrastructure, construction management, and rigorous project optimization ensuring seamless technological integration and standard execution methodologies.
                                </p>
                                <p>
                                    Adhering strictly to international standards—ACI, AASHTO, Eurocodes—we establish robust partnerships and precise project records. Tech Tronix Solutions offers specialized capabilities including infrastructure advancement, highways, industrial projects, power sector, oil & gas, rail & transit, and robust commercial developments.
                                </p>
                                <p>
                                    We are driven by science methodologies and committed to excellence, integrity, and operational enhancements. From intricate project management, environmental engineering, geotechnical services, and detailed design, to construction operations—we champion pioneering practices, resilience, and highly-adaptive project technologies.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* --- CEO SECTION --- */}
            <section className="py-24 px-6 md:px-12 bg-[#f8fafc] border-t border-[#CED6DE]/50">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-[35px] md:text-[50px] font-serif font-black text-[#1b326b] tracking-tight">Meet Our CEO</h2>
                            <div className="w-24 h-1.5 bg-[#4E9CE4] mx-auto mt-6"></div>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <FadeIn delay={150} className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="relative bg-white p-8 md:p-10 rounded-br-[40px] shadow-2xl border-l-4 border-[#4E9CE4]">
                                <Quote size={80} className="text-[#4E9CE4]/10 absolute -top-4 -left-4 rotate-180" />
                                <div className="relative z-10">
                                    <p className="text-[17px] md:text-[19px] font-serif text-slate-700 leading-relaxed font-medium italic mb-8">
                                        "With decades of visionary leadership in engineering and infrastructure development, our CEO has been the driving force behind Tech Tronix Solutions' commitment to excellence, innovation, and international standards. Dedicated to building future-ready infrastructure, his strategic insight ensures every project delivers long-term value and unwavering quality."
                                    </p>
                                    <div className="border-t border-slate-100 pt-6">
                                        <h3 className="text-[26px] font-serif font-bold text-[#1b1b1b] tracking-tight"></h3>
                                        <p className="text-[14px] font-bold text-[#4E9CE4] tracking-widest uppercase mt-1">Chief Executive Officer</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={250} className="lg:col-span-7 order-1 lg:order-2 relative">
                            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#4E9CE4]/20 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#1b326b]/10 rounded-full blur-3xl z-0"></div>
                            <div className="relative z-10 w-full aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(27,50,107,0.15)] border-[8px] border-white ring-1 ring-slate-200 group">
                                <Image src="/team.webp" alt="CEO" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b326b]/40 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* --- CTA BANNER --- */}
            <section className="relative z-10 w-full mt-10 mb-20 px-6 md:px-12 max-w-[1500px] mx-auto">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] to-[#4E9CE4] rounded-sm p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-xl border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1b326b]/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                    <h2 className="text-2xl md:text-[34px] font-sans font-medium text-white mb-8 tracking-tight drop-shadow-sm relative z-10">
                        See Our Proven Engineering Excellence
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-[500px] relative z-10">
                        <a href="/success-stories" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap text-center">
                            View Success Stories
                        </a>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
};

export default AboutPage;

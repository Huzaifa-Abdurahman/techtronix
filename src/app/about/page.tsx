"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ArrowRight,
    Linkedin,
    Twitter,
    Instagram,
    Check,
    ChevronDown
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

                    {/* CEO Card */}
                    <FadeIn>
                        <div className="bg-[#1b326b] text-white p-8 md:p-12 rounded-sm shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 border border-[#4E9CE4]/30 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full border-2 border-[#4E9CE4] flex-shrink-0 relative overflow-hidden shadow-[0_0_20px_rgba(78,156,228,0.3)]">
                                {/* Optional CEO Image */}
                                {/* <Image src="/ceo.jpg" alt="CEO" fill className="object-cover" /> */}
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-serif font-black hover:text-[#4E9CE4] transition-colors mb-2">Rehan Qadir</h4>
                                <p className="text-[14px] md:text-[15px] text-[#4E9CE4] font-bold tracking-widest uppercase mb-6 drop-shadow-sm">Chief Executive Officer</p>
                                <div className="text-[15px] md:text-[17px] font-medium leading-relaxed text-blue-50 relative">
                                    <span className="text-5xl text-[#4E9CE4]/30 absolute -top-4 -left-6 font-serif">"</span>
                                    <p className="italic relative z-10 border-l-2 border-[#4E9CE4]/50 pl-4 py-1">
                                        Tech-Tronix Solutions was built on the foundation of delivering precision, innovation, and long-term value to every project. We integrate excellence built over a decade with world-renowned infrastructure expertise to create a legacy of reliability and trust.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

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

            {/* --- TEAM SECTION --- */}
            <section className="py-24 px-6 md:px-12 bg-[#f8fafc] border-t border-[#CED6DE]/50">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-[35px] md:text-[50px] font-serif font-black text-[#1b326b] tracking-tight">Meet the Team</h2>
                            <div className="w-24 h-1.5 bg-[#4E9CE4] mx-auto mt-6"></div>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <FadeIn delay={150} className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-8">
                            <p className="text-[16px] md:text-[18px] font-serif text-slate-800 leading-relaxed font-medium">
                                At Tech Tronix Solutions, our people represent our greatest asset. Our team comprises highly qualified engineers, technical specialists, designers, and project professionals who are driven by a shared commitment to excellence, integrity, and innovation.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    'Experienced Engineering Team',
                                    'BIM-based Accurate Solutions',
                                    'Cost Effective & Time Efficient',
                                    'International Standards (ACI, AASHTO, Eurocodes)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-sm shadow-sm border border-[#CED6DE]/30">
                                        <div className="w-8 h-8 rounded-full bg-[#4E9CE4]/10 flex items-center justify-center shrink-0">
                                            <Check size={16} strokeWidth={3} className="text-[#4E9CE4]" />
                                        </div>
                                        <span className="text-[15px] font-bold text-[#1b1b1b] tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                                With a deep understanding of local operating environments and international engineering standards, we deliver solutions with precision, accountability, and strategic insight. Guided by values of collaboration, professionalism, and continuous advancement, the TechTronix team is constantly innovating, overcoming challenges to build reliable and future-ready infrastructure, and helping our clients deliver long-term value and success.
                            </p>
                        </FadeIn>

                        <FadeIn delay={250} className="lg:col-span-7 order-1 lg:order-2">
                            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-[#CED6DE]/50">
                                <Image src="/team.webp" alt="The TechTronix Team" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b326b]/80 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>
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

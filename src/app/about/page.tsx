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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col">
            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 text-white bg-gradient-to-b from-[#050505]/95 to-[#050505]/60 backdrop-blur-md">
                <div className="flex items-center justify-between w-full">
                    {/* Left Side Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/about" className="text-[13px] font-semibold tracking-[0.1em] text-[#4E9CE4] hover:text-white transition-colors uppercase flex items-center gap-1.5">
                            ABOUT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                        <a href="/contact" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
                            CONTACT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                    </nav>

                    {/* Center Logo */}
                    <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#4E9CE4] px-5 py-2 hover:bg-[#3b82c4] transition-colors cursor-pointer shadow-lg z-[110] gap-3">
                        <div className="w-8 h-8 bg-white flex items-center justify-center relative shadow-sm">
                            <div className="w-6 h-6 border border-[#4E9CE4] relative flex items-center justify-center">
                                <span className="text-[#4E9CE4] font-serif text-lg leading-none pt-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <svg width="3" height="3" viewBox="0 0 10 10" fill="#4E9CE4"><path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" /></svg>
                            </div>
                        </div>
                        <span className="text-white font-bold text-lg tracking-[0.15em] leading-none uppercase hidden sm:block">TECHTRONIX</span>
                    </a>

                    {/* Right Side Navigation */}
                    <div className="flex items-center gap-6 md:gap-8">
                        <div className="hidden md:flex items-center gap-8">
                            <a href="/services" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase">
                                PROJECTS
                            </a>
                            <a href="/services" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase">
                                SERVICES
                            </a>
                        </div>
                        <button className="border border-white/60 p-1.5 rounded-sm hover:bg-[#4E9CE4] hover:border-[#4E9CE4] transition-colors text-white hidden md:block">
                            <Search size={16} strokeWidth={2} />
                        </button>
                        {/* Hamburger for mobile */}
                        <button
                            className="md:hidden flex flex-col gap-[5px] relative z-[110]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#4E9CE4]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a href="/about" className="text-2xl font-bold tracking-widest text-[#CED6DE] uppercase" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
                    <a href="/contact" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
                </div>
            </header>

            {/* --- PAGE HEADER HERO --- */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <Image src="/i1.jpg" alt="About Hero Background" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#4E9CE4]/20 to-transparent"></div>
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
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            {/* --- FOOTER --- */}
            <footer className="relative bg-[#050505] text-white pt-24 pb-8 px-10 overflow-hidden mt-auto">
                <div className="absolute inset-0 z-0">
                    <Image src="/blue-i1.jpg" alt="Footer bg" fill className="object-cover opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#4E9CE4]/30 pointer-events-none"></div>
                </div>
                <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Left Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 cursor-pointer shrink-0 mb-8">
                            <div className="w-12 h-12 bg-[#4E9CE4] flex items-center justify-center relative shadow-sm">
                                <div className="w-9 h-9 border border-white/90 relative flex items-center justify-center">
                                    <span className="text-white font-serif text-2xl pt-1" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                                </div>
                                <div className="absolute bottom-1 right-1">
                                    <svg width="4" height="4" viewBox="0 0 10 10" fill="white"><path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" /></svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[26px] font-bold text-white leading-none tracking-wide">TECHTRONIX</span>
                                <span className="text-[14px] text-[#4E9CE4] leading-none mt-1.5 tracking-widest font-sans font-bold uppercase">Solutions</span>
                            </div>
                        </div>
                        <p className="text-[14px] text-[#CED6DE] leading-relaxed mb-8 pr-4 font-medium">
                            Global headquarters in Lahore. Regional offices in Karachi, Islamabad, and Multan. Leading the world in structural innovation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-sm border border-[#4E9CE4]/50 flex items-center justify-center hover:bg-[#4E9CE4] hover:border-[#4E9CE4] transition-all text-[#CED6DE] hover:text-white group bg-[#050505]/50 backdrop-blur-sm">
                                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-sm border border-[#4E9CE4]/50 flex items-center justify-center hover:bg-[#4E9CE4] hover:border-[#4E9CE4] transition-all text-[#CED6DE] hover:text-white group bg-[#050505]/50 backdrop-blur-sm">
                                <Twitter size={16} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-sm border border-[#4E9CE4]/50 flex items-center justify-center hover:bg-[#4E9CE4] hover:border-[#4E9CE4] transition-all text-[#CED6DE] hover:text-white group bg-[#050505]/50 backdrop-blur-sm">
                                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 lg:ml-auto grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24 pt-4">
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Services</h4>
                            <ul className="flex flex-col gap-4">
                                {[
                                    { name: 'Civil Engineering', url: '/services' },
                                    { name: 'BIM Modeling', url: '/services' },
                                    { name: 'Project Mgmt', url: '/services' },
                                    { name: 'Structural Audit', url: '/services' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <a href={link.url} className="text-[14px] font-medium text-[#CED6DE] hover:text-[#4E9CE4] transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Company</h4>
                            <ul className="flex flex-col gap-4">
                                {[
                                    { name: 'Our Story', url: '/about' },
                                    { name: 'Sustainability', url: '/about' },
                                    { name: 'Safety First', url: '/about' },
                                    { name: 'Newsroom', url: '/about' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <a href={link.url} className="text-[14px] font-medium text-[#CED6DE] hover:text-[#4E9CE4] transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Legal</h4>
                            <ul className="flex flex-col gap-4">
                                {[
                                    { name: 'Privacy Policy', url: '#' },
                                    { name: 'Terms of Service', url: '#' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <a href={link.url} className="text-[14px] font-medium text-[#CED6DE] hover:text-[#4E9CE4] transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] text-[#CED6DE] font-medium tracking-wide">
                        © 2026 Techtronix Infrastructure & Engineering. All rights reserved.
                    </p>
                    <p className="text-[13px] text-[#CED6DE] font-medium tracking-wide">
                        Designed with Precision by Huzaifa
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative">

            {/* Global Background Layer for glassmorphism effect (matching the cloudy/blue sky theme) */}
            <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-40">
                <Image src="/blue-i1.jpg" alt="Background" fill className="object-cover" />
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 text-white bg-gradient-to-b from-[#1b326b]/95 to-transparent backdrop-blur-sm">
                <div className="flex items-center justify-between w-full">
                    {/* Left Side Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/about" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
                            ABOUT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                        <a href="/contact" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
                            CONTACT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                    </nav>

                    {/* Center Logo */}
                    <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#1b326b]/90 backdrop-blur-md px-5 py-2 hover:bg-[#142654] transition-colors cursor-pointer shadow-lg z-[110] gap-3 border border-white/10">
                        <div className="w-8 h-8 bg-white flex items-center justify-center relative shadow-sm">
                            <div className="w-6 h-6 border border-[#1b326b] relative flex items-center justify-center">
                                <span className="text-[#1b326b] font-serif text-lg leading-none md:pt-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <svg width="3" height="3" viewBox="0 0 10 10" fill="#1b326b"><path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" /></svg>
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
                            <a href="/services" className="text-[13px] font-semibold tracking-[0.1em] text-[#4E9CE4] transition-colors uppercase">
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
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1b326b]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a href="/about" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
                    <a href="/contact" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-[#4E9CE4] uppercase" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
                </div>
            </header>

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
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Map size={24} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Pre-Engineering Surveys</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Detailed pre-engineering surveys to assess site conditions and inform project design.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
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
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
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
                        </div>
                    </FadeIn>

                    {/* Row 3: Left */}
                    <FadeIn delay={100} className="w-full">
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
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
                        </div>
                    </FadeIn>

                    {/* Row 3: Right */}
                    <FadeIn delay={200} className="w-full">
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Briefcase size={22} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Engineering Consultancy</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Expert consultancy services, focused on construction, design, and infrastructure development.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
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
                        <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1b326b] flex items-center justify-center shrink-0">
                                    <Droplets size={24} className="text-[#1b326b]" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-medium text-[#1b326b]">Environmental Services</h3>
                            </div>
                            <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                Sustainable engineering solutions to manage wastewater, air quality, and environmental risks.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
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

export default ServicesPage;

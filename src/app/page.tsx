"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ArrowRight,
    Shield,
    Settings,
    Zap,
    Star,
    Bookmark,
    Cpu,
    Car,
    Activity,
    FileText,
    Linkedin,
    Twitter,
    Instagram,
    Check,
    ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

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

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-black text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white">
            {/* Background Video Fixed */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed inset-0 w-full h-full object-cover z-0"
            >
                <source src="/intro-blue.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient for video */}
            <div className="fixed inset-0 bg-black/50 z-0 pointer-events-none"></div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 text-white bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between w-full">
                    {/* Left Side Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/about" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
                            ABOUT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                        <a href="/about" className="text-[13px] font-semibold tracking-[0.1em] text-white hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
                            CONTACT <ChevronDown size={14} strokeWidth={2.5} />
                        </a>
                    </nav>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#4E9CE4]/90 backdrop-blur-md px-5 py-2 cursor-pointer shadow-lg z-[110] gap-3 hover:bg-[#4E9CE4] transition-colors">
                        <div className="w-8 h-8 bg-white flex items-center justify-center relative shadow-sm">
                            <div className="w-6 h-6 border border-[#4E9CE4] relative flex items-center justify-center">
                                <span className="text-[#4E9CE4] font-serif text-lg leading-none pt-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <svg width="3" height="3" viewBox="0 0 10 10" fill="#4E9CE4"><path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" /></svg>
                            </div>
                        </div>
                        <span className="text-white font-bold text-lg tracking-[0.15em] leading-none uppercase hidden sm:block">TECHTRONIX</span>
                    </div>

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
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#4E9CE4]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a href="/about" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
                    <a href="/about" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#CED6DE]" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
                </div>
            </header>

            {/* --- HERO SECTION --- (Fixed behind content) */}
            <div className="fixed inset-0 z-10 w-full h-screen pointer-events-none flex flex-col justify-center px-6 md:px-12 max-w-[1500px] mx-auto pt-20 md:pt-28 lg:pt-32">
                <FadeIn className="max-w-[1000px] w-full pointer-events-auto mt-0 lg:mt-8 pt-0">
                    <h1 className="text-[36px] sm:text-[45px] md:text-[60px] lg:text-[85px] font-serif font-bold leading-[1.05] md:leading-[1.0] tracking-tight text-white mb-4 text-left drop-shadow-lg">
                        Engineering<br />
                        Tomorrow's<br />
                        Infrastructure<br />
                        Today
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[19px] font-medium leading-[1.4] text-[#CED6DE] mb-6 md:mb-8 max-w-[650px] text-left drop-shadow-md">
                        Trusted Civil Engineering & BIM Solutions for Industrial,<br className="hidden md:block" />
                        Commercial & Infrastructure Projects
                    </p>
                    {/* Hero Buttons Aligned with Lower Section */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[450px]">
                        <a href="/services" className="flex-1 py-3 px-4 bg-[#4E9CE4] hover:bg-[#3b82c4] text-white font-bold text-[12px] md:text-[13px] tracking-wider uppercase transition-colors shadow-lg hover:shadow-xl rounded-sm text-center">
                            Our Services
                        </a>
                        <a href="/contact" className="flex-1 py-3 px-4 bg-white hover:bg-[#f0f4f8] text-[#4E9CE4] font-bold text-[12px] md:text-[13px] tracking-wider uppercase transition-colors shadow-lg hover:shadow-xl rounded-sm text-center">
                            Get a Consultation
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Content Wrapper that scrolls over the fixed video & text */}
            <div className="relative z-20 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden mt-[100vh]">
                <AnimatedGridPattern
                    numSquares={40}
                    maxOpacity={0.06}
                    duration={3}
                    repeatDelay={1}
                    className="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] inset-0 h-full w-full skew-y-12"
                />

                {/* --- CORE SERVICES SECTION AS NEWS/INSIGHTS LAYOUT --- */}
                <section className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1b1b1b] tracking-tight">Our Core Engineering Services</h2>
                        <div className="w-24 h-1.5 bg-[#4E9CE4] mt-6"></div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Large Card (Left) */}
                        <FadeIn delay={100} className="lg:col-span-2 group cursor-pointer flex flex-col pr-0 lg:pr-8">
                            <div className="relative w-full aspect-[4/3] min-h-[300px] mb-6 rounded-lg overflow-hidden bg-[#B0C7E3]/20 shadow-sm border border-[#CED6DE]/50">
                                <Image src="/eng.jpg" alt="Engineering Solutions" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[#4E9CE4]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 leading-snug mb-4 group-hover:text-[#4E9CE4] transition-colors">
                                Engineering Solutions for the Modern World
                            </h3>
                            <div className="mt-auto pt-4 flex justify-start">
                                <div className="w-14 h-14 rounded-full bg-[#4E9CE4] flex items-center justify-center text-white shadow-lg group-hover:bg-[#1b326b] group-hover:scale-105 transition-all duration-300">
                                    <ArrowRight size={24} className="-rotate-45" />
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right column 1 */}
                        <FadeIn delay={200} className="flex flex-col gap-10">
                            {/* Card 2 */}
                            <div className="group cursor-pointer flex flex-col h-full">
                                <div className="relative w-full aspect-[16/9] min-h-[160px] mb-4 rounded-lg overflow-hidden bg-[#B0C7E3]/20 shadow-sm border border-[#CED6DE]/50">
                                    <Image src="/highway.jpg" alt="Highway & Transportation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#4E9CE4]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <h3 className="text-[17px] font-bold font-serif text-slate-800 leading-snug mb-3 group-hover:text-[#4E9CE4] transition-colors">
                                    Highway & Transportation Network Design
                                </h3>
                                <div className="mt-auto flex justify-start">
                                    <div className="w-12 h-12 rounded-full bg-[#4E9CE4] flex items-center justify-center text-white shadow-md group-hover:bg-[#1b326b] group-hover:scale-105 transition-all duration-300">
                                        <ArrowRight size={20} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group cursor-pointer flex flex-col h-full">
                                <div className="relative w-full aspect-[16/9] min-h-[160px] mb-4 rounded-lg overflow-hidden bg-[#B0C7E3]/20 shadow-sm border border-[#CED6DE]/50">
                                    <Image src="/ndt.png" alt="Geo Synthetics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#4E9CE4]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <h3 className="text-[17px] font-bold font-serif text-slate-800 leading-snug mb-3 group-hover:text-[#4E9CE4] transition-colors">
                                    Advanced NDT & Geo Synthetics Solutions
                                </h3>
                                <div className="mt-auto flex justify-start">
                                    <div className="w-12 h-12 rounded-full bg-[#4E9CE4] flex items-center justify-center text-white shadow-md group-hover:bg-[#1b326b] group-hover:scale-105 transition-all duration-300">
                                        <ArrowRight size={20} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right column 2 */}
                        <FadeIn delay={300} className="flex flex-col gap-10">
                            {/* Card 4 */}
                            <div className="group cursor-pointer flex flex-col h-full">
                                <div className="relative w-full aspect-[16/9] min-h-[160px] mb-4 rounded-lg overflow-hidden bg-[#B0C7E3]/20 shadow-sm border border-[#CED6DE]/50">
                                    <Image src="/roi.jpg" alt="RoM's & Busting System" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#4E9CE4]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <h3 className="text-[17px] font-bold font-serif text-slate-800 leading-snug mb-3 group-hover:text-[#4E9CE4] transition-colors">
                                    RoM's & Residual Busting System
                                </h3>
                                <div className="mt-auto flex justify-start">
                                    <div className="w-12 h-12 rounded-full bg-[#4E9CE4] flex items-center justify-center text-white shadow-md group-hover:bg-[#1b326b] group-hover:scale-105 transition-all duration-300">
                                        <ArrowRight size={20} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- STATS SECTION (BALLS) --- */}
                <section className="bg-[#f8fafc] py-24 mb-10 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Left side: The Balls */}
                            <FadeIn className="relative h-[450px] w-full flex items-center justify-center">
                                {/* 1. Top Left Blue Shade */}
                                <div className="absolute top-0 right-1/2 w-48 h-48 bg-[#B0C7E3] rounded-[100%] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(78,156,228,0.15)] z-20 hover:scale-105 transition-transform duration-300 text-slate-800">
                                    <span className="text-5xl font-black tracking-tighter">150+</span>
                                    <span className="text-[10px] font-bold text-slate-600 mt-2 tracking-widest uppercase text-center px-4">Projects Delivered</span>
                                </div>

                                {/* 2. Center Dark Blue */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1b326b] rounded-[100%] flex flex-col items-center justify-center shadow-2xl z-30 hover:scale-105 transition-transform duration-300 border-4 border-[#4E9CE4]/20">
                                    <span className="text-6xl font-black text-white tracking-tighter">10+</span>
                                    <span className="text-[10px] font-bold text-[#CED6DE] mt-2 tracking-widest uppercase">Years Experience</span>
                                </div>

                                {/* 3. Bottom Right Primary Blue */}
                                <div className="absolute bottom-4 left-1/2 w-48 h-48 bg-[#4E9CE4] rounded-[100%] flex flex-col items-center justify-center shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                                    <span className="text-5xl font-black text-white tracking-tighter">8+</span>
                                    <span className="text-[10px] font-bold text-blue-100 mt-2 tracking-widest uppercase">Countries Served</span>
                                </div>

                                {/* 4. Top Right Light Gray */}
                                <div className="absolute top-12 left-[70%] w-36 h-36 bg-[#CED6DE] border border-white rounded-[100%] flex flex-col items-center justify-center shadow-lg z-10 hover:scale-105 transition-transform duration-300">
                                    <span className="text-3xl font-black text-slate-800 tracking-tighter">100%</span>
                                    <span className="text-[8px] font-bold text-slate-600 mt-1 tracking-widest uppercase text-center px-2">Client Satisfaction</span>
                                </div>
                            </FadeIn>

                            {/* Right side: Typography */}
                            <FadeIn delay={200} className="lg:pl-10">
                                <h2 className="text-[3.5rem] font-serif font-black text-[#1b1b1b] leading-[1.05] tracking-tight mb-8 max-w-[450px]">
                                    Mastery in Every Square Meter.
                                </h2>
                                <p className="text-[16px] text-slate-600 leading-relaxed mb-10 max-w-md font-medium">
                                    We leverage data-driven construction methodologies to eliminate waste and maximize architectural impact across borders and throughout the life of your infrastructure.
                                </p>
                                <a href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#4E9CE4] hover:text-[#1b326b] transition-colors group">
                                    <span className="border-b-[1.5px] border-[#4E9CE4] group-hover:border-[#1b326b] pb-0.5 transition-colors">Learn about our tech stack</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: FADE TYPOGRAPHY & WHY CHOOSE US --- */}
                <section className="max-w-[1400px] mx-auto px-10 py-24 border-t border-[#CED6DE]/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-[3rem] font-serif font-black text-[#1b1b1b] tracking-tight mb-6 leading-[1.1]">
                                Engineering for the next century.
                            </h2>

                            {/* Adjusted Fade Typography */}
                            <div className="relative mb-14">
                                <p className="text-[2rem] font-bold leading-[1.2] tracking-tight text-[#CED6DE] uppercase select-none">
                                    synthesize advanced materials, digital project management, and veteran craftsmanship to redefine the built environment.
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
                            </div>

                            {/* Why Choose Us Section matched to theme */}
                            <div className="bg-[#f0f4f8] p-8 rounded-[1rem] border border-[#CED6DE] shadow-sm">
                                <h3 className="text-2xl font-serif font-black text-[#1b326b] tracking-tight mb-8">Why Choose Us</h3>
                                <ul className="space-y-5">
                                    {[
                                        'Experienced Engineering Team',
                                        'BIM-based Accurate Solutions',
                                        'Cost Effective & Time Efficient',
                                        'International Standards (ACI, AASHTO, Eurocodes)'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#4E9CE4] flex items-center justify-center shrink-0 shadow-sm">
                                                <Check size={14} strokeWidth={3} className="text-white" />
                                            </div>
                                            <span className="text-[15px] font-semibold text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Right Hand Video */}
                        <FadeIn delay={200} className="relative h-[650px] rounded-[1rem] overflow-hidden shadow-2xl group border border-[#CED6DE]/30">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                            >
                                <source src="/h1.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-[#4E9CE4]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1b326b]/90 via-[#4E9CE4]/30 to-transparent opacity-90"></div>
                        </FadeIn>
                    </div>

                    {/* Contact Banner */}
                    <FadeIn delay={100} className="mt-20 bg-gradient-to-r from-[#4E9CE4] to-[#1b326b] rounded-[1rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#4E9CE4]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B0C7E3]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-3 tracking-tight drop-shadow-sm">Have a Project in Mind?</h3>
                            <p className="text-[#CED6DE] text-lg font-medium">Let&apos;s Build it With Engineering Excellence</p>
                        </div>
                        <a href="/about" className="relative z-10 bg-white text-[#4E9CE4] px-8 py-4 rounded-sm font-bold hover:bg-[#CED6DE] transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-lg uppercase tracking-wider text-sm">
                            Contact Our Team
                        </a>
                    </FadeIn>
                </section>

                {/* --- FOOTER --- */}
                <footer className="relative bg-[#050505] text-white pt-24 pb-8 px-10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src="/blue-i1.jpg" alt="Footer bg" fill className="object-cover opacity-30 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#4E9CE4]/30 pointer-events-none"></div>
                    </div>
                    <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                        {/* Left Brand Column */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 cursor-pointer shrink-0 mb-8">
                                {/* Custom Logo mirroring the header */}
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
        </div>
    );
};

export default App;
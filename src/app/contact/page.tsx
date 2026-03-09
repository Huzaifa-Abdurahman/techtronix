"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    ChevronDown,
    Linkedin,
    Twitter,
    Instagram,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    Building2,
} from 'lucide-react';
import Image from 'next/image';

import { ContactCard } from "@/components/ui/contact-card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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

const ContactPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative">

            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-20">
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
                        <a href="/contact" className="text-[13px] font-semibold tracking-[0.1em] text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5">
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
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1b326b]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a href="/about" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
                    <a href="/contact" className="text-2xl font-bold tracking-widest text-[#4E9CE4] uppercase" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
                    <a href="/services" className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#4E9CE4]" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
                </div>
            </header>

            {/* --- HERO SECTION ---  */}
            <div className="relative z-0 w-full min-h-[45vh] flex flex-col justify-center overflow-hidden">
                {/* Fixed Video Background */}
                <div className="fixed inset-0 z-[-2] h-full w-full bg-[#1b326b]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    >
                        <source src="/contact.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1b326b]/95 via-[#4E9CE4]/70 to-[#1b326b]/50 mix-blend-multiply"></div>
                </div>

                <FadeIn className="max-w-[800px] w-full mt-32 md:mt-40 mb-20 px-4 md:px-8 text-center mx-auto flex flex-col items-center relative z-10">
                    <h1 className="text-[40px] md:text-[55px] lg:text-[65px] font-sans font-medium leading-[1.1] tracking-tight text-white mb-6 drop-shadow-md">
                        Contact TechTronix Solutions
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-blue-50 mb-10 max-w-[650px] drop-shadow-sm">
                        Let's connect for reliable engineering solutions.<br className="hidden md:block" />
                        Reach out to our team for inquiries, consultations, or support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[450px]">
                        <button className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-colors shadow-lg rounded-sm cursor-pointer whitespace-nowrap outline-none flex items-center justify-center gap-2">
                            <MailIcon size={16} /> Request an Email
                        </button>
                        <button className="flex-1 py-3 px-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-medium text-[14px] md:text-[15px] transition-colors shadow-lg rounded-sm border border-white/30 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap outline-none">
                            <PhoneIcon size={16} /> Make a Call
                        </button>
                    </div>
                </FadeIn>
            </div>

            {/* --- CONTACT FORM SECTION --- */}
            <section className="relative z-10 py-12 px-6 md:px-12 max-w-[1500px] mx-auto w-full flex justify-center bg-transparent mt-8">
                <FadeIn delay={100} className="w-full max-w-7xl mx-auto -mt-16 md:-mt-24">
                    <ContactCard
                        title="Contact Information"
                        description="We are here to assist you with all your engineering and infrastructure needs. Send us an email or fill out the form, and we will get back to you shortly."
                        contactInfo={[
                            {
                                icon: MailIcon,
                                label: 'Email Us',
                                value: (
                                    <a href="mailto:info@techtronix.com" className="hover:text-[#4E9CE4] transition-colors underline-offset-4 hover:underline">
                                        info@techtronix.com
                                    </a>
                                )
                            },
                            {
                                icon: PhoneIcon,
                                label: 'UAN',
                                value: '+92 (42) 111-527-527',
                            },
                            {
                                icon: MapPinIcon,
                                label: 'Head Office',
                                value: '123, Main Road, Karachi, Pakistan',
                            }
                        ]}
                    >
                        <form action="" className="w-full space-y-5 bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-sm shadow-md border border-white/60">
                            <div className="mb-4">
                                <h3 className="text-xl font-serif font-black text-[#1b326b] mb-1">Send a Message</h3>
                                <p className="text-sm text-slate-500 font-medium">Please fill in the details below.</p>
                            </div>
                            <div className="flex flex-col gap-2.5 outline-none border-none">
                                <Label htmlFor="name" className="text-[#1b326b] font-bold text-xs uppercase tracking-wider">Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" className="border-[#CED6DE]/60 focus-visible:ring-[#4E9CE4] focus-visible:ring-1 rounded-sm bg-white" />
                            </div>
                            <div className="flex flex-col gap-2.5 outline-none border-none">
                                <Label htmlFor="email" className="text-[#1b326b] font-bold text-xs uppercase tracking-wider">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" className="border-[#CED6DE]/60 focus-visible:ring-[#4E9CE4] focus-visible:ring-1 rounded-sm bg-white" />
                            </div>
                            <div className="flex flex-col gap-2.5 outline-none border-none">
                                <Label htmlFor="phone" className="text-[#1b326b] font-bold text-xs uppercase tracking-wider">Phone</Label>
                                <Input id="phone" type="tel" placeholder="+92 300 0000000" className="border-[#CED6DE]/60 focus-visible:ring-[#4E9CE4] focus-visible:ring-1 rounded-sm bg-white" />
                            </div>
                            <div className="flex flex-col gap-2.5 outline-none border-none">
                                <Label htmlFor="message" className="text-[#1b326b] font-bold text-xs uppercase tracking-wider">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="border-[#CED6DE]/60 focus-visible:ring-[#4E9CE4] focus-visible:ring-1 min-h-[120px] rounded-sm bg-white resize-none" />
                            </div>
                            <Button className="w-full bg-[#1b326b] hover:bg-[#142654] text-white rounded-sm font-bold tracking-widest uppercase text-xs py-5 mt-2 transition-colors shadow-md border-none outline-none" type="button">
                                Submit Request
                            </Button>
                        </form>
                    </ContactCard>
                </FadeIn>
            </section>

            {/* --- VISIT US SECTION --- */}
            <section className="relative z-10 pb-24 px-6 md:px-12 max-w-[1500px] mx-auto w-full">
                <FadeIn delay={200}>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-[28px] md:text-[34px] font-sans font-medium text-[#1b326b] tracking-tight drop-shadow-sm">
                            Visit Us
                        </h2>
                        <span className="text-slate-500 font-medium text-lg border-l-2 border-[#1b326b]/20 pl-4">
                            Head Office and Branch Locations
                        </span>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {/* Karachi Office */}
                    <FadeIn delay={300} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md border border-[#CED6DE]/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-all h-full flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E9CE4]/5 rounded-bl-[100px] z-0 pointer-events-none"></div>

                            <h3 className="text-xl font-bold text-[#1b326b] mb-6 relative z-10">Karachi Head Office</h3>

                            <div className="space-y-4 relative z-10 flex-1">
                                <div className="flex items-start gap-3">
                                    <MapPinIcon size={18} className="text-[#4E9CE4] shrink-0 mt-0.5" />
                                    <p className="text-[14px] text-slate-600 font-medium">123, Main Road, City, Country</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">UAN: +00-000-XXXXXXX</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E9CE4] shrink-0"><path d="M7 22V2h10v20" /><path d="M12 22v-4" /><path d="M7 6h10" /><path d="M7 10h10" /><path d="M7 14h10" /><path d="M7 18h10" /></svg>
                                    <p className="text-[14px] text-slate-600 font-medium">Fax: +92 (01) 2347-9876</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Lahore Office */}
                    <FadeIn delay={400} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md border border-[#CED6DE]/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-all h-full flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E9CE4]/5 rounded-bl-[100px] z-0 pointer-events-none"></div>

                            <h3 className="text-xl font-bold text-[#1b326b] mb-6 relative z-10">Lahore</h3>

                            <div className="space-y-4 relative z-10 flex-1">
                                <div className="flex items-start gap-3">
                                    <MapPinIcon size={18} className="text-[#4E9CE4] shrink-0 mt-0.5" />
                                    <p className="text-[14px] text-slate-600 font-medium">Block F, Street 01<br />Gulberg Il, Lahore, Pakistan</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">UAN: +92 (42) 111-527-527</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E9CE4] shrink-0"><path d="M7 22V2h10v20" /><path d="M12 22v-4" /><path d="M7 6h10" /><path d="M7 10h10" /><path d="M7 14h10" /><path d="M7 18h10" /></svg>
                                    <p className="text-[14px] text-slate-600 font-medium">Fax: +92 (42) 9877-8599</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Islamabad Office */}
                    <FadeIn delay={500} className="w-full">
                        <div className="bg-white/80 backdrop-blur-md border border-[#CED6DE]/50 p-8 rounded-sm shadow-sm hover:shadow-md transition-all h-full flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E9CE4]/5 rounded-bl-[100px] z-0 pointer-events-none"></div>

                            <h3 className="text-xl font-bold text-[#1b326b] mb-6 relative z-10">Islamabad</h3>

                            <div className="space-y-4 relative z-10 flex-1">
                                <div className="flex items-start gap-3">
                                    <MapPinIcon size={18} className="text-[#4E9CE4] shrink-0 mt-0.5" />
                                    <p className="text-[14px] text-slate-600 font-medium">Preet Building, Park Road,<br />Islamabad, Pakistan</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">UAN: +92 (22) 111-527-527</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E9CE4] shrink-0"><path d="M7 22V2h10v20" /><path d="M12 22v-4" /><path d="M7 6h10" /><path d="M7 10h10" /><path d="M7 14h10" /><path d="M7 18h10" /></svg>
                                    <p className="text-[14px] text-slate-600 font-medium">Fax: +92 (51) 9877-6701</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

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

export default ContactPage;

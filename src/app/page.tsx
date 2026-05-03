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

const coreServices = [
    {
        title: "HIGH-WAYS",
        description: "Highways Advanced Non-Destructive Testing Equipment Services and ITS Solutions, including Intelligent Traffic Management.",
        icon: Car,
        items: [
            "Profilometer",
            "Toll system",
            "GPR",
            "UBIT",
            "AI based road conditions survey equipment",
            "Lab testing equipment",
            "Laser Crack Measurement Survey",
            "ITS intelligent transportation systems."
        ]
    },
    {
        title: "GEO-SYNTHETICS",
        description: "Specialized in geosynthetics, especially for MSE walls, landfill capping, and slope stabilization solutions.",
        icon: Shield,
        items: [
            "Geogrids",
            "Geotextiles",
            "Geocells",
            "Geotubes",
            "Geobags",
            "Geomembrane"
        ]
    },
    {
        title: "WASTE WATER",
        description: "We provide specialized equipment and products for solid waste land treatment and liquid wastewater treatment.",
        icon: Activity,
        items: [
            "Landfill Design & Engineering",
            "Leachate Treatment Systems",
            "Flare Systems for Gas Management",
            "Containerized Waste Water Treatment",
            "Leachate Pumping & Collection"
        ]
    },
    {
        title: "GENERAL",
        description: "We provide specialized engineering solutions along with a range of advanced equipment.",
        icon: FileText,
        items: [
            "Special Engineering Services solutions",
            "Including different equipment"
        ]
    },
    {
        title: "ENGINEERING SERVICES",
        description: "We provide BIM design, project planning, EPC services, infrastructure design, and construction management solutions.",
        icon: Settings,
        items: [
            "BIM Design",
            "Project planning services",
            "Construction management service",
            "Infrastructure design",
            "EPC services"
        ]
    }
];

interface ServiceCardProps {
    title: string;
    description: string;
    items: string[];
    icon: any;
}

const ServiceCard = ({ title, description, items, icon: Icon }: ServiceCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#CED6DE]/30 overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-fit cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-8 flex flex-col items-center text-center">
                <div className="w-[75px] h-[75px] rounded-[18px] bg-[#1b326b] flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    {Icon && <Icon size={34} strokeWidth={1.5} />}
                </div>
                <h3 className="text-[20px] font-bold text-[#1b1b1b] mb-3 leading-[1.3] px-2">{title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{description}</p>
                <div className="mt-6 text-[#4E9CE4]">
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>

            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 bg-white">
                    <div className="h-[1px] w-full bg-[#CED6DE]/30 mb-4"></div>
                    <ul className="space-y-3">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <ArrowRight size={16} className="text-[#4E9CE4] mt-1 shrink-0" />
                                <span className="text-[14px] text-slate-600 font-medium leading-snug text-left">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="flex-1 bg-black text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white pb-0">
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

            {/* --- HERO SECTION --- */}
            <div className="fixed inset-0 z-10 w-full h-[100vh] pointer-events-none flex flex-col justify-center px-6 md:px-12 max-w-[1500px] mx-auto pt-10 md:pt-16 lg:pt-20">
                <FadeIn className="max-w-[1000px] w-full pointer-events-auto mt-0 pt-0">
                    <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-serif font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white mb-4 text-left drop-shadow-lg">
                        Cutting-Edge Technologies. Research-Based <br />
                        Solutions. Professional Engineering Team. — <br />
                        Digitally Planned. Expertly Executed
                    </h1>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.4] text-[#CED6DE] mb-6 max-w-[700px] text-left drop-shadow-md">
                        We bring the latest research-backed engineering products and a team of dedicated professionals to solve your toughest problems — we digitally plan and execute with modern techniques. From concept to completion, we deliver.
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

                {/* --- CORE SERVICES SECTION --- */}
                <section className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-[#f8fafc] relative z-10">
                    <FadeIn className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1b1b1b] tracking-tight inline-block relative pb-4">
                            Our Core Engineering Services
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#1b326b] rounded-full"></span>
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8 items-start">
                        {coreServices.map((service, index) => (
                            <FadeIn key={index} delay={index * 100} className="w-full">
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    items={service.items}
                                    icon={service.icon}
                                />
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* --- WHY CHOOSE US & STATS SECTION --- */}
                <section className="bg-white pt-16 md:pt-24 relative z-10">
                    <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-end">

                        {/* Left: Why Choose Us */}
                        <FadeIn className="lg:pr-20 pb-16 lg:pb-24">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1b326b] mb-10 tracking-tight">Why Choose Us</h2>
                            <ul className="space-y-6">
                                {[
                                    'Cutting-Edge Products',
                                    'Research-Based Solutions',
                                    'Professional Engineering Team',
                                    'Digital Planning & Modern Execution'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#e6f4ea] flex items-center justify-center shrink-0">
                                            <Check size={14} strokeWidth={4} className="text-[#34a853]" />
                                        </div>
                                        <span className="text-[16px] md:text-[18px] font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        {/* Right: Image */}
                        <FadeIn delay={200} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-t-xl overflow-hidden lg:translate-y-[1px]">
                            <Image src="/w1.png" alt="Why Choose Us" fill className="object-cover object-center" />
                        </FadeIn>
                    </div>

                    {/* --- BLUE STATS BANNER --- */}
                    <div className="bg-[#1b326b] w-full py-16 relative z-20">
                        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left">
                                <FadeIn delay={100} className="flex flex-col gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">150+</span>
                                    <span className="text-[14px] md:text-[15px] font-medium text-[#B0C7E3]">Projects Delivered</span>
                                </FadeIn>
                                <FadeIn delay={200} className="flex flex-col gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">10+</span>
                                    <span className="text-[14px] md:text-[15px] font-medium text-[#B0C7E3]">Years Experience</span>
                                </FadeIn>
                                <FadeIn delay={300} className="flex flex-col gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">8+</span>
                                    <span className="text-[14px] md:text-[15px] font-medium text-[#B0C7E3]">Countries Served</span>
                                </FadeIn>
                                <FadeIn delay={400} className="flex flex-col gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">100%</span>
                                    <span className="text-[14px] md:text-[15px] font-medium text-[#B0C7E3]">Client Satisfaction</span>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CONTACT BANNER WRAPPER --- */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 pt-12">

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


            </div>
        </div>
    );
};

export default App;
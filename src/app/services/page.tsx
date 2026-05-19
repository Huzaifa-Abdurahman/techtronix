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
import { products } from '@/data/products';

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
                        Our Services
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
                    {products.filter(p => ["new-5", "new-6", "new-7", "new-8"].includes(p.id)).map((service, index) => (
                        <FadeIn delay={100 * (index + 1)} className="w-full" key={service.id}>
                            <a href={`/services/${service.slug}`} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer group block overflow-hidden hover:-translate-y-1">
                                <div className="relative w-full h-[240px] overflow-hidden">
                                    <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#1b326b]/10 mix-blend-overlay"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-xl font-medium text-[#1b326b] mb-4">{service.name}</h3>
                                    <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                        {service.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1b326b] group-hover:text-[#4E9CE4] transition-colors mt-auto">
                                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
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

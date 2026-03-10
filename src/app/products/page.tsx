"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Settings } from 'lucide-react';
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

const ProductsPage = () => {
    return (
        <div className="flex-1 bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative mt-0">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
                <Image src="/i7.jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#1b326b] mix-blend-color opacity-70"></div>
            </div>

            {/* --- HERO SECTION ---  */}
            <div className="relative w-full pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 mx-auto min-h-[50vh] flex flex-col justify-center">
                <div
                    className="absolute inset-0 z-[1] bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: "url('/eng.jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b42]/90 via-[#0a1b42]/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto w-full">
                    <FadeIn className="max-w-[800px] w-full mt-4 md:mt-8">
                        <h1 className="text-[40px] md:text-[55px] lg:text-[75px] font-serif font-bold leading-[1.05] tracking-tight text-white mb-6 text-left drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            Our Products
                        </h1>
                        <p className="text-[17px] md:text-[22px] font-medium leading-relaxed text-blue-50/90 mb-10 max-w-[650px] text-left drop-shadow-sm border-l-4 border-[#4E9CE4] pl-6 transition-colors duration-500">
                            High-performance machines and equipment for precise<br className="hidden md:block" />
                            engineering, construction, and geosynthetic applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                            <a href="/contact" className="flex-1 py-3 px-6 bg-[#0a1b42] hover:bg-[#142654] text-white font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-transparent hover:border-[#4E9CE4]/30 text-center rounded-sm">
                                Request a Quote
                            </a>
                            <a href="/contact" className="flex-1 py-3 px-6 bg-white/90 hover:bg-white text-[#1b326b] font-medium text-[14px] md:text-[15px] transition-all hover:-translate-y-1 shadow-xl border border-white/40 text-center rounded-sm">
                                Contact Us
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* --- PRODUCTS GRID SECTION --- */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1500px] mx-auto w-full group">
                <FadeIn delay={100} className="mb-12">
                    <h2 className="text-[32px] md:text-[42px] font-serif font-bold text-[#1b326b] tracking-tight mb-2 hover:text-[#4E9CE4] transition-colors duration-500">
                        Advanced Engineering Equipment for Sale
                    </h2>
                    <p className="text-[17px] text-[#2d3748] font-medium leading-relaxed max-w-4xl">
                        Explore our range of specialized equipment designed to deliver top-tier performance in construction, geosynthetics, concrete work, and ground engineering.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <FadeIn key={product.id} delay={100 + (idx * 50)} className="w-full">
                            <Link href={`/products/${product.slug}`} className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/50 flex flex-col h-full group/card hover:shadow-2xl hover:border-[#4E9CE4]/40 hover:-translate-y-2 transition-all duration-500">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-[#1b326b]/5 group-hover/card:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-[#1b326b]/10 flex items-center justify-center shrink-0 group-hover/card:bg-[#4E9CE4] group-hover/card:text-white transition-colors duration-300">
                                            <Settings size={16} strokeWidth={2} className="text-[#1b326b] group-hover/card:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-[19px] font-sans font-bold text-[#1b326b] leading-tight group-hover/card:text-[#4E9CE4] transition-colors duration-300 line-clamp-2">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#1b326b] group-hover/card:text-[#4E9CE4] transition-colors uppercase tracking-wider">
                                        View Details <ArrowRight size={16} className="group-hover/card:translate-x-1.5 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* --- CTA BANNER --- */}
            <section className="relative z-10 w-full mt-10 mb-20 px-6 md:px-12 max-w-[1500px] mx-auto">
                <FadeIn className="bg-gradient-to-r from-[#1b326b] to-[#4E9CE4] rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-2xl border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <h2 className="text-2xl md:text-[32px] font-serif font-bold text-white tracking-tight drop-shadow-sm relative z-10 lg:max-w-xl">
                        Interested in Our Products? Contact TechTronix Solutions
                    </h2>

                    <div className="mt-8 md:mt-0 relative z-10 shrink-0">
                        <a href="/contact" className="inline-flex py-4 px-10 bg-white hover:bg-slate-100 text-[#1b326b] font-bold text-[15px] transition-all shadow-xl rounded-sm group overflow-hidden">
                            <span className="relative z-10 group-hover:pr-2 transition-all">Get in Touch</span>
                            <ArrowRight size={20} className="relative z-10 ml-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                        </a>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
};

export default ProductsPage;

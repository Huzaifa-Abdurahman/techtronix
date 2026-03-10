"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
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

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();

    // Find product based on slug
    const product = products.find((p) => p.slug === params.slug);

    // If product not found, route to 404
    if (!product) {
        notFound();
    }

    return (
        <div className="flex-1 bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative mt-0 pb-24">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
                <Image src="/i7.jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#1b326b] mix-blend-color opacity-70"></div>
            </div>

            {/* --- TOP SPACING FOR NAVBAR --- */}
            <div className="pt-28 md:pt-36"></div>

            {/* --- PRODUCT DETAILS CONTAINER --- */}
            <div className="relative z-10 max-w-[1300px] mx-auto w-full px-6 md:px-12">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-[#1b326b] font-bold text-sm tracking-widest uppercase hover:text-[#4E9CE4] transition-colors mb-10 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-sm border border-[#CED6DE]"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Products
                </button>

                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden flex flex-col lg:flex-row">

                    {/* Left: Product Image */}
                    <div className="lg:w-1/2 relative bg-slate-100 min-h-[400px] lg:min-h-[auto] flex items-center justify-center p-8 lg:p-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-[#1b326b]/5 group-hover:bg-[#1b326b]/0 transition-colors duration-500 z-10"></div>
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-white z-20">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <FadeIn delay={100}>
                            <div className="inline-block bg-[#4E9CE4]/10 text-[#4E9CE4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                                Industrial Equipment
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1b326b] leading-tight mb-6">
                                {product.name}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-[#4E9CE4] pl-5">
                                {product.description}
                            </p>

                            <div className="prose prose-slate prose-lg text-slate-600 mb-10 font-medium text-[15px] leading-relaxed">
                                <p>{product.fullDescription}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1b326b]/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} className="text-[#1b326b]" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1b326b]">High Performance</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1b326b]/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} className="text-[#1b326b]" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1b326b]">Industrial Grade</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1b326b]/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} className="text-[#1b326b]" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1b326b]">Expert Supply</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1b326b]/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} className="text-[#1b326b]" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1b326b]">TechTronix Warranty</span>
                                </div>
                            </div>

                            <a href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 py-4 px-8 bg-[#1b326b] hover:bg-[#4E9CE4] text-white font-bold text-[15px] tracking-wider transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-sm uppercase">
                                Request Quote for this Item <Send size={18} />
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}

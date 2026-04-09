"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Landmark,
    Sparkles,
    TrendingUp,
} from "lucide-react";

function useInView(options = { threshold: 0.12 }) {
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

    const attachRef = (element: HTMLElement | null) => {
        setRef(element);
    };

    return [attachRef, inView] as const;
}

const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const logos = [
    { src: "/logos/crystaline.JPG", alt: "Crystaline" },
    { src: "/logos/dcision.JPG", alt: "Decision" },
    { src: "/logos/escp.JPG", alt: "ESCP" },
    { src: "/logos/fatima-group.JPG", alt: "Fatima Group" },
    
    { src: "/logos/fesco.JPG", alt: "FESCO Alternate" },
    { src: "/logos/fwo.JPG", alt: "FWO" },
    { src: "/logos/i1.JPG", alt: "Industry Partner 1" },
    { src: "/logos/i2.JPG", alt: "Industry Partner 2" },
    { src: "/logos/i3.JPG", alt: "Industry Partner 3" },
    { src: "/logos/lda.JPG", alt: "LDA" },
    { src: "/logos/lesco.JPG", alt: "LESCO" },
    { src: "/logos/new-metro-city.JPG", alt: "New Metro City" },
    { src: "/logos/nha.JPG", alt: "NHA" },
    { src: "/logos/ruda.JPG", alt: "RUDA" },
    { src: "/logos/sgm.JPG", alt: "SGM" },
    { src: "/logos/sui-northern.JPG", alt: "Sui Northern" },
];

const marqueeLogos = [...logos, ...logos];

const stories = [
    {
        title: "Infrastructure delivery for high-impact public works",
        description:
            "From transport corridors to utility-focused engineering support, our teams have delivered practical, durable solutions that align design precision with field realities.",
        image: "/highway.jpg",
        href: "/engineering-solutions",
    },
    {
        title: "Industrial and commercial partnerships built on trust",
        description:
            "We support private-sector clients with design coordination, geosynthetics expertise, BIM workflows, and execution-focused planning that reduces risk and speeds decision-making.",
        image: "/i10 (2).jpg",
        href: "/services",
    },
    {
        title: "Specialized solutions across civil and environmental scopes",
        description:
            "Our portfolio spans pre-engineering, treatment systems, stabilization works, and integrated technical support for projects where performance and compliance both matter.",
        image: "/i6 (3).jpg",
        href: "/waste-water-treatment-solutions",
    },
];

export default function SuccessStoriesPage() {
    return (
        <div className="relative flex flex-1 flex-col overflow-hidden bg-[#edf4fb] text-slate-900 selection:bg-[#4E9CE4] selection:text-white">
            <style jsx>{`
                .logo-track {
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }

                .logo-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(78,156,228,0.22),_transparent_35%),radial-gradient(circle_at_85%_15%,_rgba(27,50,107,0.18),_transparent_30%),linear-gradient(180deg,_#f5f9fe_0%,_#eaf2fb_48%,_#edf4fb_100%)]" />
                <div className="absolute left-[-10%] top-28 h-72 w-72 rounded-full bg-[#4E9CE4]/10 blur-3xl" />
                <div className="absolute right-[-5%] top-56 h-96 w-96 rounded-full bg-[#1b326b]/10 blur-3xl" />
            </div>

            <section className="relative z-10 border-b border-white/30 px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
                <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <FadeIn className="max-w-[820px]">
                        

                        <h1 className="max-w-[900px] text-[40px] font-semibold leading-[1.02] tracking-tight text-[#10234d] sm:text-[52px] md:text-[68px] lg:text-[84px]">
                            Proven partnerships.
                            <span className="block text-[#4E9CE4]">Measured engineering impact.</span>
                        </h1>

                        <p className="mt-6 max-w-[700px] text-[17px] font-medium leading-8 text-slate-600 md:text-[19px]">
                            We have worked with many companies across private industry, developers,
                            utilities, and government sectors, delivering dependable engineering
                            solutions that turn technical challenges into long-term project value.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#1b326b] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_50px_rgba(27,50,107,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25458d]"
                            >
                                Explore Services
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#1b326b]/12 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b326b] shadow-[0_12px_40px_rgba(78,156,228,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4E9CE4]/40 hover:text-[#4E9CE4]"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={150} className="lg:justify-self-end">
                        <div className="relative overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-5 shadow-[0_25px_80px_rgba(16,35,77,0.12)] backdrop-blur-xl">
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(78,156,228,0.12),transparent_38%,rgba(27,50,107,0.12))]" />
                            <div className="relative rounded-[22px] border border-white/40 bg-[#10234d] p-6 text-white shadow-inner shadow-black/10">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[20px] border border-white/10 bg-white/8 p-5">
                                        <p className="text-xs uppercase tracking-[0.22em] text-blue-100/70">
                                            Trusted Across
                                        </p>
                                        <p className="mt-3 text-4xl font-semibold">Public</p>
                                        <p className="mt-2 text-sm leading-6 text-blue-50/80">
                                            Government entities, infrastructure authorities, and utility-linked stakeholders.
                                        </p>
                                    </div>
                                    <div className="rounded-[20px] border border-white/10 bg-[#4E9CE4]/90 p-5 text-white">
                                        <p className="text-xs uppercase tracking-[0.22em] text-white/80">
                                            Performance For
                                        </p>
                                        <p className="mt-3 text-4xl font-semibold">Private</p>
                                        <p className="mt-2 text-sm leading-6 text-white/85">
                                            Industrial groups, commercial developers, and large-scale enterprise projects.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-[18px] border border-white/10 bg-white/8 p-4">
                                        <p className="text-3xl font-semibold">100+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-100/70">
                                            Projects Delivered
                                        </p>
                                    </div>
                                    <div className="rounded-[18px] border border-white/10 bg-white/8 p-4">
                                        <p className="text-3xl font-semibold">Multi</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-100/70">
                                            Sectors Served
                                        </p>
                                    </div>
                                    <div className="rounded-[18px] border border-white/10 bg-white/8 p-4">
                                        <p className="text-3xl font-semibold">End-to-End</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-100/70">
                                            Technical Support
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="relative z-10 px-6 py-8 md:px-12">
                <div className="mx-auto max-w-[1500px] rounded-[28px] border border-white/50 bg-white/75 p-6 shadow-[0_20px_70px_rgba(19,40,84,0.08)] backdrop-blur-xl md:p-8">
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#4E9CE4]">
                                Clients & Institutions
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#10234d] md:text-4xl">
                                Organizations that trusted TechTronix
                            </h2>
                        </div>
                        <p className="max-w-[520px] text-sm leading-7 text-slate-600">
A showcase of customer stories from our portfolio, highlighting our work with developers, industrial groups, utilities, and government-related organizations.</p>
                    </div>

                    <div className="relative overflow-hidden rounded-[24px] border border-[#d9e6f5] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(233,242,251,0.92))] py-6">
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

                        <div className="logo-track flex items-center gap-5 px-5">
                            {marqueeLogos.map((logo, index) => (
                                <div
                                    key={`${logo.src}-${index}`}
                                    className="flex h-28 w-[180px] shrink-0 items-center justify-center rounded-[20px] border border-white/70 bg-white/95 px-5 shadow-[0_10px_30px_rgba(29,55,103,0.08)] transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative h-16 w-full">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill
                                            className="object-contain"
                                            sizes="180px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-16 md:px-12 md:py-20">
                <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <FadeIn className="rounded-[28px] border border-white/50 bg-[#10234d] p-8 text-white shadow-[0_25px_80px_rgba(16,35,77,0.18)] md:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100/70">
                            Why These Stories Matter
                        </p>
                        <h2 className="mt-4 max-w-[440px] text-3xl font-semibold leading-tight tracking-tight md:text-[42px]">
                            We build credibility through delivery, not claims.
                        </h2>
                        <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-blue-50/82">
                            Our success stories reflect consistent execution across complex project environments.
                            Whether the requirement comes from a public authority, a utility network,
                            or a fast-moving commercial client, our focus remains the same: technical
                            clarity, dependable collaboration, and outcomes that perform in the real world.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-white/8 p-4">
                                <Landmark className="mt-1 text-[#7fc2ff]" size={22} />
                                <div>
                                    <h3 className="font-semibold">Government and public-sector experience</h3>
                                    <p className="mt-1 text-sm leading-7 text-blue-50/75">
                                        Support for institutions and infrastructure-linked bodies where compliance,
                                        coordination, and durability are essential.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-white/8 p-4">
                                <Building2 className="mt-1 text-[#7fc2ff]" size={22} />
                                <div>
                                    <h3 className="font-semibold">Commercial and industrial collaboration</h3>
                                    <p className="mt-1 text-sm leading-7 text-blue-50/75">
                                        Solutions tailored for developers, manufacturers, and private enterprises
                                        seeking speed, technical depth, and reduced project risk.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-white/8 p-4">
                                <BadgeCheck className="mt-1 text-[#7fc2ff]" size={22} />
                                <div>
                                    <h3 className="font-semibold">Engineering confidence at every stage</h3>
                                    <p className="mt-1 text-sm leading-7 text-blue-50/75">
                                        From design reviews to field-ready strategies, our work is shaped to be
                                        actionable, scalable, and aligned with project realities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid gap-6">
                        {stories.map((story, index) => (
                            <FadeIn key={story.title} delay={120 * (index + 1)}>
                                <div className="group grid overflow-hidden rounded-[28px] border border-white/50 bg-white/80 shadow-[0_20px_60px_rgba(29,55,103,0.09)] backdrop-blur-xl md:grid-cols-[280px_1fr]">
                                    <div className="relative min-h-[260px] overflow-hidden">
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#10234d]/50 via-transparent to-transparent" />
                                    </div>
                                    <div className="flex flex-col justify-between p-7 md:p-9">
                                        <div>
                                            <div className="mb-4 inline-flex rounded-full border border-[#4E9CE4]/20 bg-[#4E9CE4]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4E9CE4]">
                                                Featured Story
                                            </div>
                                            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#10234d]">
                                                {story.title}
                                            </h3>
                                            <p className="mt-4 text-[15px] leading-8 text-slate-600">
                                                {story.description}
                                            </p>
                                        </div>

                                        <Link
                                            href={story.href}
                                            className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b326b] transition-colors hover:text-[#4E9CE4]"
                                        >
                                            Explore Related Service
                                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-24 pt-4 md:px-12">
                <FadeIn className="mx-auto max-w-[1500px] overflow-hidden rounded-[32px] border border-white/50 bg-[linear-gradient(135deg,#15306a_0%,#1b326b_42%,#4E9CE4_100%)] p-8 text-white shadow-[0_30px_90px_rgba(16,35,77,0.2)] md:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-100/75">
                                Built With Confidence
                            </p>
                            <h2 className="mt-4 max-w-[780px] text-3xl font-semibold leading-tight tracking-tight md:text-[46px]">
                                More than logos on a page, these partnerships represent trust earned through delivery.
                            </h2>
                            <p className="mt-5 max-w-[760px] text-[15px] leading-8 text-blue-50/85">
                                We continue to support many companies, institutions, and government sectors with
                                engineering-driven problem solving, collaborative execution, and solutions that
                                are designed to perform long after project handover.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <TrendingUp size={20} className="text-white" />
                                <p className="mt-4 text-lg font-semibold">Long-term technical value</p>
                                <p className="mt-2 text-sm leading-7 text-blue-50/80">
                                    Design choices and support strategies focused on performance, efficiency, and resilience.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-white px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#15306a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#edf4fb]"
                            >
                                Talk to Our Team
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}

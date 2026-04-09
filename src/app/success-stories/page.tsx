"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, ChevronDown, Landmark } from "lucide-react";

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
    className?: string;
    delay?: number;
}) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const companies = [
    { src: "/logos/crystaline.JPG", alt: "Crystaline" },
    { src: "/logos/dcision.JPG", alt: "Decision" },
    { src: "/logos/escp.JPG", alt: "ESCP" },
    { src: "/logos/fatima-group.JPG", alt: "Fatima Group" },
    { src: "/logos/fesco-1.JPG", alt: "FESCO" },
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

const marqueeCompanies = [...companies, ...companies];

export default function SuccessStoriesPage() {
    return (
        <div className="relative mt-0 flex flex-1 flex-col bg-[#eaf2fb] font-sans text-slate-900 selection:bg-[#4E9CE4] selection:text-white">
            <style jsx>{`
                .company-track {
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }

                .company-track:hover {
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

            <div className="pointer-events-none fixed inset-0 z-[0] opacity-50 mix-blend-multiply">
                <Image src="/i11 (2).jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#eaf2fb] opacity-90 mix-blend-color" />
                <div className="absolute inset-0 bg-[#1b326b]/20 mix-blend-overlay" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[50vh] w-full flex-col justify-center border-b border-white/20 px-6 pb-24 pt-32 shadow-[0_10px_30px_rgba(0,0,0,0.15)] md:px-12 md:pb-32 md:pt-44">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/i11 (1).jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1b326b]/95 via-[#1b326b]/70 to-[#4E9CE4]/40 mix-blend-multiply" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px]">
                    <FadeIn className="mt-4 w-full max-w-[800px] md:mt-8">
                        <h1 className="mb-6 text-left text-[40px] font-medium leading-[1.05] tracking-tight text-white drop-shadow-lg md:text-[55px] lg:text-[75px]">
                            Success Stories
                        </h1>
                        <p className="max-w-[650px] text-left text-[17px] font-medium leading-relaxed text-blue-50/90 drop-shadow-md md:text-[22px]">
                            Real projects. Real impact. Proven engineering excellence across
                            <br className="hidden md:block" />
                            infrastructure, industrial, and civil domains
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="relative z-20 overflow-hidden pt-12">
                <div className="mx-auto mb-8 w-full max-w-[1500px] px-6 md:px-12">
                    <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[#1b326b]/20 pb-4 md:flex-row md:items-end">
                        <h2 className="text-[28px] font-bold tracking-tight text-[#1b326b] drop-shadow-sm md:text-[36px]">
                            Success Stories
                        </h2>
                        <div className="group flex min-w-[200px] cursor-pointer items-center justify-between rounded-sm border border-[#CED6DE] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md transition-colors hover:border-[#4E9CE4]/50">
                            <span className="text-[15px] font-medium text-[#1b326b]">All Projects</span>
                            <ChevronDown
                                size={18}
                                className="text-[#8492a6] transition-colors group-hover:text-[#4E9CE4]"
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto mb-10 w-full max-w-[1500px] px-6 md:px-12">
                    <FadeIn delay={80}>
                        <div className="overflow-hidden rounded-[18px] border border-white/70 bg-white/80 shadow-[0_22px_60px_rgba(18,44,92,0.14)] backdrop-blur-md">
                            <div className="border-b border-[#d6e0ea] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(237,245,252,0.92))] px-6 py-6 md:px-8">
                                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#4E9CE4]">
                                            Companies & Clients
                                        </p>
                                        <h3 className="mt-2 text-[28px] font-bold tracking-tight text-[#1b326b] md:text-[32px]">
                                            Organizations that have worked with TechTronix
                                        </h3>
                                    </div>
                                    <p className="max-w-[700px] text-[15px] leading-7 text-slate-600">
                                        A corporate showcase of companies and clients from our portfolio,
                                        highlighting our delivery record across developers, industrial groups,
                                        utility providers, and government-sector organizations where execution,
                                        quality control, and operational discipline matter most.
                                    </p>
                                </div>
                            </div>

                            <div className="border-b border-[#d6e0ea] bg-[#10234d] px-6 py-5 md:px-8">
                                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div className="rounded-[16px] border border-white/10 bg-white/8 px-5 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/65">
                                            Government Sector
                                        </p>
                                        <p className="mt-2 text-[24px] font-bold text-white">Trusted Delivery</p>
                                        <p className="mt-2 text-[13px] leading-6 text-blue-50/80">
                                            We have worked with public-sector and utility-linked organizations on demanding engineering assignments that require accountability, coordination, and dependable execution.
                                        </p>
                                    </div>
                                    <div className="rounded-[16px] border border-white/10 bg-white/8 px-5 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/65">
                                            Project Record
                                        </p>
                                        <p className="mt-2 text-[24px] font-bold text-white">100+ Projects</p>
                                        <p className="mt-2 text-[13px] leading-6 text-blue-50/80">
                                            Our team has delivered more than 100 projects across civil, industrial, environmental, and infrastructure scopes with a focus on practical, field-ready results.
                                        </p>
                                    </div>
                                    <div className="rounded-[16px] border border-white/10 bg-white/8 px-5 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/65">
                                            Quality Standard
                                        </p>
                                        <p className="mt-2 text-[24px] font-bold text-white">High Quality</p>
                                        <p className="mt-2 text-[13px] leading-6 text-blue-50/80">
                                            We maintain a high-quality working approach through technical precision, disciplined review processes, and solutions designed for long-term performance.
                                        </p>
                                    </div>
                                    <div className="rounded-[16px] border border-white/10 bg-white/8 px-5 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/65">
                                            Safety Record
                                        </p>
                                        <p className="mt-2 text-[24px] font-bold text-white">0 Accident Ratio</p>
                                        <p className="mt-2 text-[13px] leading-6 text-blue-50/80">
                                            Our working history reflects a zero-accident record, supported by careful planning, responsible site practices, and a strong culture of safety at every stage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,242,251,0.92))] py-8">
                                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(78,156,228,0.55),transparent)]" />

                                <div className="company-track flex items-center gap-6 px-6">
                                    {marqueeCompanies.map((company, index) => (
                                        <div
                                            key={`${company.src}-${index}`}
                                            className="flex h-[150px] w-[240px] shrink-0 items-center justify-center rounded-[18px] border border-[#d9e6f3] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-7 shadow-[0_16px_40px_rgba(24,51,97,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4E9CE4]/35 hover:shadow-[0_22px_48px_rgba(24,51,97,0.16)]"
                                        >
                                            <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(78,156,228,0.45),transparent)]" />
                                            <div className="relative h-20 w-full">
                                                <Image
                                                    src={company.src}
                                                    alt={company.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="240px"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 border-t border-[#d6e0ea] bg-[#fbfdff] px-6 py-6 md:grid-cols-3 md:px-8">
                                <div className="rounded-[16px] border border-[#dbe7f2] bg-[#f7fbff] p-5 shadow-[0_10px_24px_rgba(26,55,103,0.05)]">
                                    <div className="flex items-start gap-3">
                                        <Landmark size={20} className="mt-1 text-[#1b326b]" />
                                        <div>
                                            <h4 className="text-[17px] font-semibold text-[#1b326b]">
                                                Government and institutional experience
                                            </h4>
                                            <p className="mt-2 text-[14px] leading-7 text-slate-600">
                                                Our experience includes work delivered for authorities,
                                                utility organizations, and other public-sector clients where
                                                compliance, reporting, and technical reliability are essential.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[16px] border border-[#dbe7f2] bg-[#f7fbff] p-5 shadow-[0_10px_24px_rgba(26,55,103,0.05)]">
                                    <div className="flex items-start gap-3">
                                        <Building2 size={20} className="mt-1 text-[#1b326b]" />
                                        <div>
                                            <h4 className="text-[17px] font-semibold text-[#1b326b]">
                                                100+ project delivery capability
                                            </h4>
                                            <p className="mt-2 text-[14px] leading-7 text-slate-600">
                                                With more than 100 projects delivered, TechTronix has built
                                                the operational depth to support multiple sectors while
                                                maintaining consistency in coordination, scheduling, and execution.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[16px] border border-[#dbe7f2] bg-[#f7fbff] p-5 shadow-[0_10px_24px_rgba(26,55,103,0.05)]">
                                    <div className="flex items-start gap-3">
                                        <BadgeCheck size={20} className="mt-1 text-[#1b326b]" />
                                        <div>
                                            <h4 className="text-[17px] font-semibold text-[#1b326b]">
                                                Quality and safety performance
                                            </h4>
                                            <p className="mt-2 text-[14px] leading-7 text-slate-600">
                                                We pair high-quality engineering output with a zero-accident
                                                working history, reflecting disciplined project controls,
                                                careful supervision, and a strong commitment to safe delivery.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-6 px-6 pb-24 md:px-12">
                    <FadeIn delay={100} className="w-full">
                        <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/50 bg-white/80 shadow-lg transition-all duration-500 hover:border-[#4E9CE4]/40 hover:shadow-xl md:flex-row">
                            <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-[400px] lg:w-[450px]">
                                <Image
                                    src="/highway.jpg"
                                    alt="Highway Infrastructure"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 z-10 flex w-20 translate-y-0 transform flex-col items-center justify-center rounded-sm bg-[#d32f2f] p-3 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="text-3xl font-bold leading-none">15</span>
                                    <span className="mt-1 text-[11px] font-medium leading-tight">MAR</span>
                                    <span className="text-[11px] font-medium leading-none">2024</span>
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col justify-center bg-gradient-to-r from-white/90 to-transparent p-8 md:p-10 lg:p-12">
                                <h3 className="mb-4 font-serif text-2xl font-bold text-[#1b326b] transition-colors duration-300 group-hover:text-[#4E9CE4] md:text-[28px]">
                                    Highway Infrastructure Strengthening Project
                                </h3>
                                <p className="mb-6 text-[15px] font-medium leading-relaxed text-slate-700 md:text-[16px]">
                                    TechTronix Solutions successfully delivered a highway reinforcement
                                    project using advanced geosynthetics and BIM-based design solutions.
                                    The project improved load distribution, reduced long-term maintenance
                                    costs, and enhanced pavement life under heavy traffic conditions.
                                </p>
                                <a
                                    href="/geosynthetics-solutions"
                                    className="mt-auto inline-flex w-max items-center gap-2 text-[15px] font-bold text-[#1b326b] transition-colors group-hover:text-[#4E9CE4]"
                                >
                                    Read More{" "}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} className="w-full">
                        <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/50 bg-white/80 shadow-lg transition-all duration-500 hover:border-[#4E9CE4]/40 hover:shadow-xl md:flex-row">
                            <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-[400px] lg:w-[450px]">
                                <Image
                                    src="/i10 (2).jpg"
                                    alt="Wastewater Treatment"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 z-10 flex w-20 translate-y-0 transform flex-col items-center justify-center rounded-sm bg-[#d32f2f] p-3 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="text-3xl font-bold leading-none">02</span>
                                    <span className="mt-1 text-[11px] font-medium leading-tight">JAN</span>
                                    <span className="text-[11px] font-medium leading-none">2024</span>
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col justify-center bg-gradient-to-r from-white/90 to-transparent p-8 md:p-10 lg:p-12">
                                <h3 className="mb-4 font-serif text-2xl font-bold text-[#1b326b] transition-colors duration-300 group-hover:text-[#4E9CE4] md:text-[28px]">
                                    Industrial Wastewater Treatment Facility Upgrade
                                </h3>
                                <p className="mb-6 text-[15px] font-medium leading-relaxed text-slate-700 md:text-[16px]">
                                    TechTronix engineered and implemented a modern wastewater treatment
                                    solution for an industrial client, ensuring environmental compliance,
                                    water reuse, and operational efficiency while reducing environmental risks.
                                </p>
                                <a
                                    href="/waste-water-treatment-solutions"
                                    className="mt-auto inline-flex w-max items-center gap-2 text-[15px] font-bold text-[#1b326b] transition-colors group-hover:text-[#4E9CE4]"
                                >
                                    Read More{" "}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} className="w-full">
                        <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/50 bg-white/80 shadow-lg transition-all duration-500 hover:border-[#4E9CE4]/40 hover:shadow-xl md:flex-row">
                            <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-[400px] lg:w-[450px]">
                                <Image
                                    src="/i6 (3).jpg"
                                    alt="Slope Stabilization"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 z-10 flex w-20 translate-y-0 transform flex-col items-center justify-center rounded-sm bg-[#d32f2f] p-3 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="text-3xl font-bold leading-none">18</span>
                                    <span className="mt-1 text-[11px] font-medium leading-tight">NOV</span>
                                    <span className="text-[11px] font-medium leading-none">2023</span>
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col justify-center bg-gradient-to-r from-white/90 to-transparent p-8 md:p-10 lg:p-12">
                                <h3 className="mb-4 font-serif text-2xl font-bold text-[#1b326b] transition-colors duration-300 group-hover:text-[#4E9CE4] md:text-[28px]">
                                    Slope Stabilization Using Geocells & Geogrids
                                </h3>
                                <p className="mb-6 text-[15px] font-medium leading-relaxed text-slate-700 md:text-[16px]">
                                    A complex slope stabilization challenge was resolved through the
                                    strategic use of Geocells and geogrids. The solution improved soil
                                    confinement, erosion control, and long-term structural stability.
                                </p>
                                <a
                                    href="/geosynthetics-solutions"
                                    className="mt-auto inline-flex w-max items-center gap-2 text-[15px] font-bold text-[#1b326b] transition-colors group-hover:text-[#4E9CE4]"
                                >
                                    Read More{" "}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className="w-full">
                        <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/50 bg-white/80 shadow-lg transition-all duration-500 hover:border-[#4E9CE4]/40 hover:shadow-xl md:flex-row">
                            <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-[400px] lg:w-[450px]">
                                <Image
                                    src="/i9 (3).jpg"
                                    alt="BIM Based Design"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 z-10 flex w-20 translate-y-0 transform flex-col items-center justify-center rounded-sm bg-[#d32f2f] p-3 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="text-3xl font-bold leading-none">05</span>
                                    <span className="mt-1 text-[11px] font-medium leading-tight">SEP</span>
                                    <span className="text-[11px] font-medium leading-none">2023</span>
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col justify-center bg-gradient-to-r from-white/90 to-transparent p-8 md:p-10 lg:p-12">
                                <h3 className="mb-4 font-serif text-2xl font-bold text-[#1b326b] transition-colors duration-300 group-hover:text-[#4E9CE4] md:text-[28px]">
                                    BIM-Based Design & Clash Detection for Commercial Project
                                </h3>
                                <p className="mb-6 text-[15px] font-medium leading-relaxed text-slate-700 md:text-[16px]">
                                    TechTronix provided BIM-based architectural, structural, and MEP
                                    coordination services, enabling early clash detection, optimized
                                    construction workflows, and significant cost savings for the client.
                                </p>
                                <a
                                    href="/contactor-pre-engineering"
                                    className="mt-auto inline-flex w-max items-center gap-2 text-[15px] font-bold text-[#1b326b] transition-colors group-hover:text-[#4E9CE4]"
                                >
                                    Read More{" "}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative z-20 mx-auto mb-20 max-w-[1500px] px-6 md:px-12">
                    <FadeIn className="group relative overflow-hidden rounded-sm bg-[#1b326b] p-12 text-center shadow-2xl md:p-16">
                        <div className="absolute inset-0 bg-[url('/blue-i1.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40" />
                        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-[#4E9CE4]/20 blur-3xl" />

                        <h2 className="relative z-10 mb-10 font-serif text-2xl font-bold tracking-tight text-white drop-shadow-sm md:text-[34px]">
                            Building Success Through Engineering Excellence
                        </h2>

                        <div className="relative z-10 flex w-full max-w-[500px] flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="/services"
                                className="flex-1 whitespace-nowrap rounded-sm border border-transparent bg-[#0a1b42] px-6 py-3 text-center text-[15px] font-medium text-white shadow-lg transition-colors hover:border-[#4E9CE4]/30 hover:bg-[#142654]"
                            >
                                View Our Services
                            </a>
                            <a
                                href="/contact"
                                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/10 px-6 py-3 text-center text-[15px] font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20"
                            >
                                Contact Our Team <ArrowRight size={16} />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

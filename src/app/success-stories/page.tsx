"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, ChevronDown, Landmark, ChevronLeft, ChevronRight, CheckCircle2, Factory, Zap, ShieldAlert, Target } from "lucide-react";

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
            className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const next = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    if (images.length === 0) return null;

    return (
        <div className="relative h-64 md:h-[400px] w-full overflow-hidden shrink-0 group bg-slate-100">
            <div
                className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div key={i} className="min-w-full h-full relative">
                        <Image
                            src={img}
                            alt={`${title} - image ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur-md">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
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

const publicClients = [
    "National Highway Authority",
    "Punjab Highway Department",
    "Water and Power Development Authority",
    "National Transmission and Power Dispatch Company",
    "GENCOS (Thermal Power Generation Companies)",
    "Power Distribution Companies (DISCOs)",
    "Punjab Irrigation Department",
    "Road Assets Management System Punjab",
    "Road Assets Management System KPK",
    "Engineering Consultancy Services Punjab",
    "FWO (Frontier Works Organization)"
];

const privateClients = [
    "Bahria Town Islamabad",
    "DHA Islamabad",
    "Crystalline Chemical Industry",
    "Dewan Sugar Mills & Distilleries",
    "Fatima Sugar Mills Ltd",
    "Ghotki Sugar Mills Ltd",
    "Punjab Sugar Mills",
    "National Sugar Mills",
    "United Ethanol Industries",
    "Unicol Industries",
    "Descon Engineering Limited",
    "Industrial Enterprises",
    "Rahim Yaar Khan Sugar Mills Ltd",
    "National Logistics Corporation",
    "Toll Accu Tec.(Pvt) Ltd",
    "Crescent Group of Industries",
    "Al-moiz Industries",
    "Zeeruk International",
    "Premier Industries",
    "Alliance Sugar Mills",
    "Finite Engineering Private Limited"
];

const majorProjects = [
    {
        category: "Highway Sector Projects",
        icon: <Target className="text-blue-500 w-6 h-6" />,
        items: [
            "Supply installation and training of NU-METRICS NS-60 DMI Units",
            "Supply Installation and Testing of BI Unit and Z-250 Roughness Profiler",
            "Supply of BI unit for Survey To Zeeruk International",
            "Supply and Training of Road Profilometer to National Highway Authority",
            "System Design and Technical Support for Manual Toll Collection System of M-9 for Standard Construction Company.",
            "Supply and Training of Windows Based Back Calculation Software for FWD Data and also the up gradation of Equipment of KUAB FWD",
            "Supply Installation and Training of NU-14 Asphalt Testing Equipment for Highway Research and Training Center",
            "Supply Installation and Training of Bolin Viscometer DSR II for Bitumen Testing to HRTC",
            "Technical Support and Maintenance of SSWIM Operated by M/S Sarfraz Associates.",
            "Supply Installation and Operation of SSWIM Supplied to CWE for Provincial Highway Department",
            "Supply and Training of Road Profilometer with 9 Lasers to Frontier Highway Authority",
            "Technical Support and Training of TIRTL (The Infra Red Traffic Logger) to Pakhtunkhwa Highway Authority.",
            "Technical Support and Services for ETTM to Afridi Operators for National Highway Authority Toll Systems.",
            "Maintenance of FWD Machine by KUAB Sweden.",
            "Supply of KUAB FWD and GPR to KPK Highway Authority",
            "Maintenance of NHA profilometer",
            "Supply installation and Commissioning of ETTM system at Kahna Flyover.",
            "Supply & Installation of Ground Penetrating Radar",
            "Supply & Training of HDM4 Software and PAVERTM Software"
        ]
    },
    {
        category: "Geosynthetics",
        icon: <Building2 className="text-blue-500 w-6 h-6" />,
        items: [
            "Supply Installation of Soil Reinforcement Project For Bahria Town",
            "Supply Installation of Soil Reinforcement Project for Azad Kashmir Road Project.",
            "Supply Installation of Soil Reinforcement with Uni-Axial for Bhaloki Power Project",
            "Supply of GeoGrid and Superviosn of MSE Wall constructed at Kahna Flyover",
            "Supply of GeoGrid and Geotextile for Shah-Pur Kanjra Motorway Connection",
            "Supply of GeoGrid and Geotextile with Construction Supervision for Cheel Chowk Flyover",
            "Supply of GeoGrid and Geotextile with Construction Supervision for Packages Mall Flyover",
            "Supply of Geogrid with Construction & Supervision of Gujjar Khan New Metro City Underpass."
        ]
    },
    {
        category: "Pavement Microsurfacing",
        icon: <Landmark className="text-blue-500 w-6 h-6" />,
        items: [
            "Polymer micro overlay burgundy color on Metro Bus System Corridor"
        ]
    },
    {
        category: "Combustion Projects",
        icon: <Factory className="text-blue-500 w-6 h-6" />,
        items: [
            "Supply Installation and Operation Training of Dual Fired Burner Oil/ Bio Gas For 20 TPH Boiler, Complete System Burner BMS with Trains ( Crystalline Chemical Industries)",
            "Supply Installation and Operation Training Oil Firing Equipment with Oil Heating Pumping Unit For 60 TPH Bagasse Fired Boiler ( Fatima Sugar)",
            "Supply Installation and Operation Training of Oil Firing with Oil Heating Pumping Unit 20 TPH Boiler ( United Ethanol Industries)",
            "Supply Installation and Operation Training of Biogas Flare System Dewan Distilleries 7000 Nm3/Hr Firing Stack Flare",
            "Supply Installation and Operation Training of Bio Gas Flare System Crystalline Chemical Industries 6000 Nm3/Hr Firing",
            "Supply Installation and Operation Training of BIOGAS Burner For 25 TPH Package Bi- Drum Boiler ( Unicol Industries)",
            "Supply Installation and Operation Training of Dual Firing HFO/Natural Gas For 200 TPH Boiler , Complete System with BMS and Fuel trains.( Packages Plant Buley Shah)",
            "Supply Installation Training and Operation Training of Dual Firing Combustion System for 30 TPH Boiler ( Oil and Gas Development corporation Pakistan)",
            "Conversion of Existing Gas firing Burner System to Dual System ( Light Oil/Gas) for 10 TPH Boiler ( Three Star Textile Mills)",
            "Supply Installation and Commissioning of Burners for Boilers to Sui Northern Gas Limited to burn Sweet Gases",
            "Supply Installation of Bio Gas Flare System and Bio Gas Burner ( Boiler )for Premier Chemical Industries"
        ]
    },
    {
        category: "Valve and Pipeline Material",
        icon: <ShieldAlert className="text-blue-500 w-6 h-6" />,
        items: [
            "Supply and Installation of Mechanical Valves for New Plant including Ball and Butterfly Valves in SS 304 Material for United Ethanol ( Alcohol Distillery of 100,000 Liter/Day Capacity)",
            "Supply and Installation of Mechanical Valves for Crystalline Chemical Industries ( Alcohol Distillery Plant of 100,000 Liter/Day Capacity)",
            "Supply and installation of Mechanical Valves with Counter Flanges For Ghotki Sugar Mills 10,000 MT /Day",
            "Supply Installation of High Pressure Mechanical Valves for Muree Bewrey Boiler Fittings.",
            "Supply and Installation of High Pressure Mechanical Valves for ICI boiler Project.",
            "Supply and Installation of Complete Pipeline and Fittings for Ghotki Sugar Mills 10,000 MT/day",
            "Supply and Installation of Mechanical Valves for Extension Project of Ghotki Sugar Mills",
            "Supply and installation of Mechanical Valves and Complete Pipeline Fittings for Rahim Yaar Khan Sugar Mills 8000 MT/Day.",
            "Supply and Installation of Mechanical Valves for Fertil Project through Descon Engineering Limited.",
            "Supply of Seamless Stainless Steel Tubes SS 304 and SS 316 for Heat Exchangers to Descon Engineering Limited",
            "Supply of U-Tubes Seamless Stainless Tubes SS 304 for Heat Exchangers to Descon Engineering Limited",
            "Supply Boiler Valves for Oxy Chem Chemical Plant",
            "Spares for Mechanical Valves to Descon Engineering Limited.",
            "Supply of Mechanical and Motorized valves for Byco Refiner Boiler Project",
            "Supply of Mechanical and Motorized Valves for Bhiki Power Plant Project",
            "Supply of Boiler Feed Water Pumps for Byco Refinery Boiler Project",
            "Supply of Diesel Dosing Pumps to Engro Foods for Rice Plant power project.",
            "Supply Installation of Mechanical and Safety Valves for RYK Mills Limited Extension Project",
            "Supply installation of Mechanical valves, pipeline material for Alliance Sugar Mills Limited"
        ]
    },
    {
        category: "Power Sector Projects",
        icon: <Zap className="text-blue-500 w-6 h-6" />,
        items: [
            "Supply of Essential Spares of AV-6 HP/LP By pass System for Unit 5 & 6 Thermal Power Station, Muzaffargarh.",
            "Supply of Spares for Instrument Section for Unit 1-4, Thermal Power Station, Ramshorn.",
            "Supply of Filter Elements for Governor Pilot Valves for Power Station Ghazi Brotha.",
            "Supply of Hydraulic Oil Filters for 415MW Combined Cycle Power Plant, Guddu.",
            "Supply of Lube Oil Filters for Generator of Gas Turbine Combined Cycle Power Plant Guddu.",
            "Supply of Turbine Spares for 150MW FBC Power Station Lakhra.",
            "Supply of Spares for Turbine Supervisory System for Unit No.4 Thermal Power Station Guddu.",
            "Supply of Air Inlet Filter for 600MW Combined Cycle Power Plant, Guddu.",
            "Supply of Spares for Mechanical Section of 415MW Combined Cycle Power Plant Guddu.",
            "Supply of Spares for Upgraded LCN OF TDC-3000 System, Unit No.7 of 44MW Combined Cycle Power Plant, Kotri.",
            "Supply for Limit Switch 2LS-J14 for Gas Turbine Power Station Kotri.",
            "Supply of spares for Sampling SKID for Steam Turbine G-13, 415MW Combined Cycle Power Plant, Guddu.",
            "Supply of Spares for YEWPACK-II Regulation System, Seal Oil System, Generator Inner Cooling System Unit No. 5&6 Thermal Power Station, Muzaffargarh.",
            "Supply of 132kv Current Transformer to Lahore Electric Supply Co. (LESCO).",
            "Supply of 132 Kv Current and Voltage Transformers to FESCO (Faisal Abad Electric Supply Co.)",
            "Supply of 132 Kv Current and Voltage Transformers to MEPCO (Multan Electric Supply Co.)",
            "Supply of Cation and Anion Resin to Guddu Power Plant GENCO –II",
            "Supply Installation and Commissioning of 230 KV Power Transformer to Managla Cantt",
            "Supply, Installation and Commissioning of 640 KV Power Transformers to Mangla Cantt."
        ]
    }
];

const infrastructureProjects = [
    {
        title: "Kahna Flyover Project",
        images: ["/kahana-flyover-1.JPG", "/khana-flyover.JPG"],
        details: [
            { label: "Wall Type", value: "Mechanically Stabilized Earth Wall" },
            { label: "Area of Wall", value: "12,000 m2" },
            { label: "Height of Abutment Wall", value: "10.1 m" },
            { label: "Project Completion", value: "2015 – 2016" },
            { label: "Internal angle of friction (φ)", value: "32°" }
        ]
    },
    {
        title: "Shahpur Kanjran Flyover Project",
        images: ["/shahpur-underpss-1.JPG"],
        details: [
            { label: "Wall Type", value: "Mechanically Stabilized Earth Wall" },
            { label: "Area of Wall", value: "10,000 m2" },
            { label: "Height of Abutment Wall", value: "9.8 m" },
            { label: "Project Completion", value: "2014 – 2015" },
            { label: "Internal angle of friction (φ)", value: "32°" }
        ]
    },
    {
        title: "NMC-Underpass New Metro City Gujjar Khan Project",
        images: ["/Gujjar Khan NMC Underpass.JPG", "/nmc-underpass-1.JPG", "/nmc-underpass-2.JPG", "/nmc-underpass-3.JPG", "/nmc-underpass-4.JPG"],
        details: [
            { label: "Wall Type", value: "Mechanically Stabilized Earth Wall" },
            { label: "Area of Wall", value: "2914 m2" },
            { label: "Height of Abutment Wall", value: "8 m" },
            { label: "Project Completion", value: "March 2025 – May 2025" },
            { label: "Internal angle of friction (φ)", value: "31° (fine sand)" }
        ]
    },
    {
        title: "Ghora Chowk Flyover Project",
        images: ["/ghora-chowk-flyover-=1.JPG", "/ghora-chowk-flyover-2.JPG", "/ghora-chowk-flyover-3.JPG", "/ghora-chowk-flyover-4.JPG", "/ghora-chowk-flyover-5.JPG"],
        details: [
            { label: "Wall Type", value: "Mechanically Stabilized Earth Wall" },
            { label: "Height of Abutment Wall", value: "8.4 m" },
            { label: "Project Completion", value: "2023 – 2024" },
            { label: "Internal angle of friction (φ)", value: "35°" }
        ]
    }
];

export default function SuccessStoriesPage() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="relative mt-0 flex flex-1 flex-col bg-[#f0f5fa] font-sans text-slate-900 selection:bg-[#4E9CE4] selection:text-white">
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

            {/* Hero Section */}
            <div className="relative z-10 mx-auto flex min-h-[40vh] w-full flex-col justify-center border-b border-white/20 px-6 pb-24 pt-32 shadow-sm md:px-12 md:pb-24 md:pt-40 bg-[#1b326b] overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed mix-blend-overlay opacity-100" style={{ backgroundImage: "url('/success-page.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1b326b] via-[#1b326b]/80 to-[#4E9CE4]/40 z-0" />
                <div className="relative z-10 mx-auto w-full max-w-[1500px]">
                    <FadeIn className="w-full max-w-[800px]">
                        <h1 className="mb-6 text-[40px] font-bold leading-tight tracking-tight text-white drop-shadow-md md:text-[55px] lg:text-[70px]">
                            Our Success Stories
                        </h1>
                        <p className="max-w-[700px] text-[18px] font-medium leading-relaxed text-blue-50/90 drop-shadow-sm md:text-[22px]">
                            Turning engineering challenges into milestones. Discover our track record of high-quality infrastructure, power, and industrial projects.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 py-16 md:px-12 md:py-20 lg:py-24 space-y-24">

                {/* Companies We Have Worked With - Marquee Section */}
                <section>
                    <FadeIn>
                        <div className="mb-12 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                <div>
                                    <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-red-500 mb-2">OUR PARTNERS</p>
                                    <h2 className="text-[42px] md:text-[56px] font-bold tracking-tight text-[#1b326b] leading-tight">Companies</h2>
                                    <h3 className="text-[24px] md:text-[32px] font-medium text-slate-500">We Have Worked With</h3>
                                </div>
                                <div className="hidden md:block">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full bg-[#1b326b] px-8 py-4 text-[16px] font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#4E9CE4] hover:-translate-y-1"
                                    >
                                        Work With Us <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-[#e5edf5] bg-white py-14 shadow-[0_10px_40px_rgba(27,50,107,0.05)]">
                            <div className="company-track flex items-center gap-16 px-12">
                                {marqueeCompanies.map((company, index) => (
                                    <div
                                        key={`${company.src}-${index}`}
                                        className="relative h-20 w-44 shrink-0 flex items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
                                    >
                                        <Image
                                            src={company.src}
                                            alt={company.alt}
                                            fill
                                            className="object-contain"
                                            sizes="200px"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#1b326b] px-8 py-4 text-[15px] font-bold text-white shadow-lg transition-all"
                            >
                                Work With Us <ArrowRight size={18} />
                            </a>
                        </div>
                    </FadeIn>
                </section>

                {/* Infrastructure Projects using Image Carousel Cards */}
                <section>
                    <FadeIn delay={100}>
                        <div className="mb-12 border-b border-[#d6e0ea] pb-6">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#4E9CE4]">Featured</span>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1b326b] md:text-4xl">Infrastructure Projects</h2>
                            <p className="mt-4 text-slate-600 max-w-3xl text-lg">Detailed insights into our major infrastructure and flyover developments using mechanically stabilized earth walls and world-class structural engineering.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {infrastructureProjects.map((project, idx) => (
                                <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(27,50,107,0.08)] border border-[#e5edf5] hover:shadow-[0_20px_60px_rgba(27,50,107,0.12)] transition-all duration-500 hover:-translate-y-1">
                                    <ImageCarousel images={project.images} title={project.title} />
                                    <div className="p-8 md:p-10 bg-gradient-to-b from-white to-[#fcfdfe]">
                                        <h3 className="text-[26px] font-bold text-[#1b326b] mb-8">{project.title}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                            {project.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="border-l-2 border-[#4E9CE4] pl-4">
                                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{detail.label}</p>
                                                    <p className="mt-1 text-sm font-semibold text-slate-800">{detail.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </section>

                {/* Major Projects Completed (Tabs/List) */}
                <section>
                    <FadeIn delay={200}>
                        <div className="mb-12 border-b border-[#d6e0ea] pb-6 text-center md:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-[#1b326b] md:text-4xl">Major Projects Completed</h2>
                            <p className="mt-4 text-slate-600 text-lg md:max-w-2xl">A comprehensive showcase of our successfully completed assignments across various critical sectors.</p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(27,50,107,0.06)] border border-[#e5edf5] overflow-hidden flex flex-col md:flex-row min-h-[600px] xl:min-h-[700px]">
                            {/* Tabs sidebar */}
                            <div className="w-full md:w-[320px] shrink-0 bg-gradient-to-b from-[#f8fbff] to-[#f0f6fc] border-b md:border-b-0 md:border-r border-[#e5edf5] p-5 flex flex-col gap-3 overflow-y-auto">
                                {majorProjects.map((group, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 ${activeTab === idx ? "bg-white shadow-[0_5px_15px_rgba(27,50,107,0.06)] border border-[#d6e0ea] text-[#1b326b] font-bold scale-[1.02]" : "text-slate-600 hover:bg-white/60 hover:text-[#1b326b] font-medium"}`}
                                    >
                                        <span className={`${activeTab === idx ? 'bg-blue-50 text-blue-600' : 'bg-transparent text-slate-400'} p-2 rounded-xl transition-colors`}>{group.icon}</span>
                                        {group.category}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="flex-1 p-6 md:p-10 lg:p-12 bg-white overflow-y-auto max-h-[600px] xl:max-h-[700px] custom-scrollbar">
                                <div className="mb-10 border-b border-slate-100 pb-6 sticky top-0 bg-white/90 backdrop-blur-md z-10 pt-2">
                                    <h3 className="text-3xl font-bold text-[#1b326b] flex items-center gap-4">
                                        <span className="p-3 bg-blue-50 text-blue-600 rounded-2xl hidden sm:block">
                                            {majorProjects[activeTab].icon}
                                        </span>
                                        {majorProjects[activeTab].category}
                                    </h3>
                                    <p className="text-slate-500 mt-2 sm:ml-[72px]">Showing {majorProjects[activeTab].items.length} completed projects</p>
                                </div>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    {majorProjects[activeTab].items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafcff] border border-[#f0f4f8] hover:border-blue-200 hover:shadow-sm transition-all group">
                                            <div className="mt-1 shrink-0 bg-blue-50 p-1.5 rounded-full text-blue-500 group-hover:bg-[#4E9CE4] group-hover:text-white transition-colors duration-300 shadow-sm">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="text-[15px] font-medium leading-relaxed text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Client Rosters */}
                <section>
                    <FadeIn delay={300}>
                        <div className="mb-12 text-center border-b border-[#d6e0ea] pb-6 max-w-4xl mx-auto">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#4E9CE4]">Trusted By</span>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1b326b] md:text-4xl">Our Satisfied Clients</h2>
                            <p className="mt-4 text-slate-600 text-lg">We are proud to serve some of the most esteemed organizations and companies across both the public and private sectors.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                            {/* Public Sector Clients */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(27,50,107,0.05)] border-t-[6px] border-t-[#1b326b]">
                                <h3 className="text-[26px] font-bold text-[#1b326b] mb-10 flex items-center gap-4">
                                    <div className="bg-[#1b326b]/10 p-3 rounded-2xl">
                                        <Landmark className="text-[#1b326b] w-8 h-8" />
                                    </div>
                                    Public Sector Clients
                                </h3>
                                <div className="grid grid-cols-1 gap-5">
                                    {publicClients.map((client, idx) => (
                                        <div key={idx} className="flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0 hover:-translate-y-0.5 transition-transform cursor-default">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1b326b]/10">
                                                <div className="h-2.5 w-2.5 rounded-full bg-[#1b326b]" />
                                            </div>
                                            <span className="text-slate-700 font-semibold text-[15px]">{client}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Private Sector Clients */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(27,50,107,0.05)] border-t-[6px] border-t-[#4E9CE4]">
                                <h3 className="text-[26px] font-bold text-[#1b326b] mb-10 flex items-center gap-4">
                                    <div className="bg-[#4E9CE4]/10 p-3 rounded-2xl">
                                        <Building2 className="text-[#4E9CE4] w-8 h-8" />
                                    </div>
                                    Private Sector Clients
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                    {privateClients.map((client, idx) => (
                                        <div key={idx} className="flex items-center gap-4 border-b border-slate-100 pb-5 md:last:border-0 hover:-translate-y-0.5 transition-transform cursor-default">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4E9CE4]/10">
                                                <div className="h-2.5 w-2.5 rounded-full bg-[#4E9CE4]" />
                                            </div>
                                            <span className="text-slate-700 font-semibold text-[15px] leading-tight">{client}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* CTA */}
                <div className="relative z-20 mx-auto mt-24 max-w-[1500px]">
                    <FadeIn className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b326b] to-[#0a183d] p-12 text-center shadow-[0_20px_50px_rgba(27,50,107,0.3)] md:p-20">
                        <div className="absolute inset-0 bg-[url('/highway.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-20" />
                        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#4E9CE4]/20 blur-[100px]" />

                        <h2 className="relative z-10 mb-10 text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-5xl leading-tight">
                            Ready to Start Your Next Big Project?
                        </h2>

                        <div className="relative z-10 flex w-full max-w-[600px] mx-auto flex-col justify-center gap-6 sm:flex-row">
                            <a
                                href="/services"
                                className="flex-1 whitespace-nowrap rounded-xl border border-transparent bg-white px-8 py-5 text-center text-[17px] font-bold text-[#1b326b] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]"
                            >
                                View Our Services
                            </a>
                            <a
                                href="/contact"
                                className="flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-center text-[17px] font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                            >
                                Contact Our Team <ArrowRight size={20} />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 10px;
                    border: 2px solid white;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background-color: #94a3b8;
                }
            `}</style>
        </div>
    );
}

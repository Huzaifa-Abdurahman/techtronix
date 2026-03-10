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
    CheckCircle2,
    UserIcon,
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
    return (
        <div className="flex-1 bg-[#eaf2fb] text-slate-900 font-sans selection:bg-[#4E9CE4] selection:text-white flex flex-col relative mt-0">

            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-20">
                <Image src="/blue-i1.jpg" alt="Background" fill className="object-cover" />
            </div>



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
                                    <a href="mailto:info@tech-tronix.com" className="hover:text-[#4E9CE4] transition-colors underline-offset-4 hover:underline">
                                        sales.techtronix@outlook.com
                                    </a>
                                )
                            },
                            {
                                icon: PhoneIcon,
                                label: 'Phone',
                                value: '+92311-0757620',
                            },
                            {
                                icon: MapPinIcon,
                                label: 'Head Office',
                                value: '102 B OPF, Khayaban e Jinnah, Lahore, Pakistan.',
                            }
                        ]}
                    >
                        {/* Form Container */}
                        <div className="flex flex-col gap-8 w-full">
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
                        </div>
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

                            <h3 className="text-xl font-bold text-[#1b326b] mb-6 relative z-10">Lahore Head Office</h3>

                            <div className="space-y-4 relative z-10 flex-1">
                                <div className="flex items-start gap-3">
                                    <MapPinIcon size={18} className="text-[#4E9CE4] shrink-0 mt-0.5" />
                                    <p className="text-[14px] text-slate-600 font-medium">102 B OPF, Khayaban e Jinnah, Lahore, Pakistan.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <UserIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">Engr.Ahmad Hassan  (BIM structure Engineer)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">Phone: +92311-0757620</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MailIcon size={18} className="text-[#4E9CE4] shrink-0" />
                                    <p className="text-[14px] text-slate-600 font-medium">Email: sales.techtronix@outlook.com</p>
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

            {/* Application Popups */}
            <CookiesPopup />
            <NewsletterPopup />
        </div>
    );
};

const CookiesPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-[400px] bg-white border border-[#CED6DE] shadow-2xl p-6 rounded-md z-[120]">
            <h3 className="font-bold text-[#1b326b] mb-2 text-lg">We value your privacy</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 py-2 text-sm font-bold text-[#1b326b] border border-[#1b326b]/20 hover:bg-slate-50 transition-colors rounded-sm"
                >
                    Decline
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 py-2 text-sm font-bold text-white bg-[#1b326b] hover:bg-[#4E9CE4] transition-colors rounded-sm shadow-sm"
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        // Show after 3 seconds on the contact page
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity duration-300">
            <div className="bg-white max-w-md w-full rounded-md shadow-2xl overflow-hidden relative border border-[#CED6DE]">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-transparent hover:bg-slate-200 text-white hover:text-slate-700 rounded-full transition-colors z-10"
                >
                    ✕
                </button>

                <div className="bg-gradient-to-r from-[#1b326b] to-[#4E9CE4] p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                    <MailIcon size={40} className="mx-auto text-white mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-blue-50/90 text-[15px] font-medium leading-relaxed max-w-sm mx-auto">
                        Get the latest updates on engineering solutions, projects, and exclusive insights from TechTronix.
                    </p>
                </div>

                <div className="p-8">
                    {subscribed ? (
                        <div className="text-center py-4">
                            <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
                            <h4 className="text-lg font-bold text-[#1b326b] mb-2">Thank You!</h4>
                            <p className="text-slate-600 font-medium">You have successfully subscribed to our newsletter.</p>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="mt-6 w-full py-3 bg-[#1b326b] text-white font-bold rounded-sm text-sm uppercase tracking-wider hover:bg-[#4E9CE4] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="newsletter-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</Label>
                                <Input
                                    id="newsletter-email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-slate-300 focus-visible:ring-[#4E9CE4] text-base py-3 rounded-sm"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[#1b326b] hover:bg-[#4E9CE4] text-white py-6 rounded-sm font-bold text-sm tracking-widest uppercase mt-2 shadow-md transition-all hover:shadow-lg">
                                Subscribe Now
                            </Button>
                            <p className="text-xs text-center text-slate-400 font-medium mt-2">
                                We respect your privacy. No spam ever.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

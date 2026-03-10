"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative bg-[#050505] text-white pt-24 pb-8 px-10 overflow-hidden mt-auto">
            <div className="absolute inset-0 z-0">
                <Image src="/blue-i1.jpg" alt="Footer bg" fill className="object-cover opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#4E9CE4]/30 pointer-events-none"></div>
            </div>
            <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                {/* Left Brand Column */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-3 md:p-4 rounded-sm inline-block mb-8 shadow-sm">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="relative w-[38px] h-[38px] md:w-[46px] md:h-[46px] bg-[#1b326b] flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                                <span className="absolute left-[1px] top-[-3px] md:left-[2px] md:top-[-4px] text-white font-serif text-[32px] md:text-[40px] leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                                <span className="absolute left-[12px] top-[7px] md:left-[16px] md:top-[8px] text-white font-serif text-[32px] md:text-[40px] leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                            </div>
                            <div className="flex flex-col items-start leading-[1.1] md:leading-[1.15]">
                                <span className="text-[#1b326b] font-bold text-[18px] md:text-[20px] tracking-tight">Tech-Tronix</span>
                                <span className="text-[#1b326b] font-bold text-[18px] md:text-[20px] tracking-tight">Solutions</span>
                                <span className="text-[#1b326b] font-medium text-[10px] md:text-[11px] tracking-widest mt-0.5">(SMC-Pvt.Ltd.)</span>
                            </div>
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
                                { name: 'Civil Engineering', url: '/engineering-solutions' },
                                { name: 'BIM Modeling', url: '/services' },
                                { name: 'Project Mgmt', url: '/services' },
                                { name: 'Structural Audit', url: '/services' },
                                { name: 'Our Products', url: '/products' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.url} className="text-[14px] font-medium text-[#CED6DE] hover:text-[#4E9CE4] transition-colors">{link.name}</Link>
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
                                { name: 'Success Stories', url: '/success-stories' },
                                { name: 'Newsroom', url: '/about' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.url} className="text-[14px] font-medium text-[#CED6DE] hover:text-[#4E9CE4] transition-colors">{link.name}</Link>
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
                    © 2026 Tech-Tronix Solutions(SMC-Pvt.LTD). All rights reserved.
                </p>
                <p className="text-[13px] text-[#CED6DE] font-medium tracking-wide">
                    Designed with Precision by Huzaifa
                </p>
            </div>
        </footer>
    );
}

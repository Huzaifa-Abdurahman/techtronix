"use client";

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'ABOUT', url: '/about' },
        { name: 'CONTACT', url: '/contact' },
        { name: 'SERVICES', url: '/services' },
        { name: 'PRODUCTS', url: '/products' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 text-white bg-[#1b326b]/95 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full">
                {/* Left Side Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/about' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5`}>
                        ABOUT <ChevronDown size={14} strokeWidth={2.5} />
                    </Link>
                    <Link href="/contact" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/contact' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase flex items-center gap-1.5`}>
                        CONTACT <ChevronDown size={14} strokeWidth={2.5} />
                    </Link>
                </nav>

                {/* Center Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-white px-3 py-1.5 transition-colors shadow-lg z-[110] rounded-sm gap-3 border border-[#1b326b]/10">
                    <div className="relative w-[36px] h-[36px] bg-[#1b326b] flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                        <span className="absolute left-[1px] top-[-3px] text-white font-serif text-[32px] leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                        <span className="absolute left-[12px] top-[7px] text-white font-serif text-[32px] leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>T</span>
                    </div>
                    <div className="flex flex-col items-start leading-[1.1]">
                        <span className="text-[#1b326b] font-bold text-[16px] tracking-tight">Tech-Tronix</span>
                        <span className="text-[#1b326b] font-bold text-[16px] tracking-tight">Solutions</span>
                        <span className="text-[#1b326b] font-medium text-[9px] tracking-widest">(SMC-Pvt.Ltd.)</span>
                    </div>
                </Link>

                {/* Right Side Navigation */}
                <div className="flex items-center gap-6 md:gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/services" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/services' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            SERVICES
                        </Link>
                        <Link href="/products" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname.startsWith('/products') ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            PRODUCTS
                        </Link>
                    </div>
                    <button className="border border-white/60 p-1.5 rounded-sm hover:bg-[#4E9CE4] hover:border-[#4E9CE4] transition-colors text-white hidden md:block">
                        <Search size={16} strokeWidth={2} />
                    </button>
                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] relative z-[110]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-[#4E9CE4] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#4E9CE4] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#4E9CE4] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1b326b]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        className={`text-2xl font-bold tracking-widest ${pathname === link.url || (link.url === '/products' && pathname.startsWith('/products')) ? 'text-[#4E9CE4]' : 'text-white'} uppercase hover:text-[#4E9CE4]`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}

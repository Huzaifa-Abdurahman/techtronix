"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Products', url: '/products' },
        { name: 'Success Stories', url: '/success-stories' },
        { name: 'Contact', url: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-2 md:py-3 bg-white shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between w-full max-w-[1500px] mx-auto">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center z-[110] overflow-hidden" style={{ margin: '-2px 0' }}>
                    <Image
                        src="/l3.png"
                        alt="Tech-Tronix Solutions"
                        width={240}
                        height={90}
                        className="h-[60px] md:h-[80px] w-auto object-contain scale-110"
                        priority
                    />
                </Link>

                {/* Right: Nav links + Button */}
                <div className="flex items-center gap-6 md:gap-8">
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.url || (link.url !== '/' && pathname.startsWith(link.url));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    className={`text-[14px] lg:text-[15px] font-medium transition-colors relative pb-1 ${isActive ? 'text-[#1b326b]' : 'text-slate-700 hover:text-[#1b326b]'}`}
                                >
                                    {link.name}
                                    {isActive && <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1b326b] rounded-full"></span>}
                                </Link>
                            );
                        })}
                    </nav>



                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] relative z-[110]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-[#1b326b] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#1b326b] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#1b326b] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 z-[90] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.url || (link.url !== '/' && pathname.startsWith(link.url));
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className={`text-2xl font-bold tracking-wide relative pb-2 ${isActive ? 'text-[#1b326b]' : 'text-slate-800'} hover:text-[#1b326b]`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                            {isActive && <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#1b326b] rounded-full"></span>}
                        </Link>
                    )
                })}

            </div>
        </header>
    );
}

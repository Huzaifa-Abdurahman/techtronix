"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'ABOUT', url: '/about' },
        { name: 'CONTACT', url: '/contact' },
        { name: 'SERVICES', url: '/services' },
        { name: 'PRODUCTS', url: '/products' },
        { name: 'SUCCESS STORIES', url: '/success-stories' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-2 text-white bg-[#1b326b]/95 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center z-[110] overflow-hidden" style={{ margin: '-2px 0' }}>
                    <Image
                        src="/l2.png"
                        alt="Tech-Tronix Solutions"
                        width={240}
                        height={90}
                        className="h-[90px] w-auto object-contain scale-110"
                        priority
                    />
                </Link>

                {/* Right: Nav links + Search */}
                <div className="flex items-center gap-6 md:gap-8">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/about" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/about' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            ABOUT
                        </Link>
                        <Link href="/contact" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/contact' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            CONTACT
                        </Link>
                        <Link href="/services" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/services' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            SERVICES
                        </Link>
                        <Link href="/products" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname.startsWith('/products') ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            PRODUCTS
                        </Link>
                        <Link href="/success-stories" className={`text-[13px] font-semibold tracking-[0.1em] ${pathname === '/success-stories' ? 'text-[#4E9CE4]' : 'text-white'} hover:text-[#4E9CE4] transition-colors uppercase`}>
                            SUCCESS STORIES
                        </Link>
                    </nav>
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

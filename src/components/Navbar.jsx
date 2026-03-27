import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Highlights', href: '#highlights' },
        { name: 'Price List', href: '#price-list' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Location', href: '#location' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 px-2 md:px-4 ${isScrolled ? 'top-0 py-4' : 'top-6 py-0'}`}>
            <div className={`container-custom transition-all duration-700 rounded-full px-3 py-4 flex justify-between items-center ${isScrolled ? 'bg-white/80 backdrop-blur-2xl shadow-premium border border-white/50' : 'bg-transparent border border-white/10'}`}>

                {/* Logo */}
                <a href="#" className="flex flex-col items-start group">
                    <span className={`text-2xl font-bold tracking-[0.15em] font-serif transition-colors duration-500 ${isScrolled ? 'text-primary-950' : 'text-white'}`}>
                        SOBHA RIVANA
                    </span>
                    <span className={`text-[9px] tracking-[0.4em] font-black uppercase transition-colors duration-500 ${isScrolled ? 'text-primary-600' : 'text-primary-200 opacity-80'}`}>
                        Greater Noida West
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-12">
                    <ul className="flex space-x-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold relative group ${isScrolled ? 'text-primary-900' : 'text-white'}`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-8 border-l pl-10 border-primary-200/20">
                        <a href="tel:+917303975006" className={`flex items-center gap-2.5 font-bold text-sm tracking-tight transition-colors duration-500 ${isScrolled ? 'text-primary-950' : 'text-white'}`}>
                            <Phone size={16} className="text-gold" /> +91-7303975006
                        </a>
                        <button
                            onClick={onOpenModal}
                            className={`btn-gold px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.25em] transition-all hover:shadow-gold/20 shadow-lg ${isScrolled ? '' : 'border border-white/20'}`}
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-3 rounded-full transition-all duration-500 ${isScrolled ? 'bg-primary-50 text-primary-900' : 'bg-white/10 text-white border border-white/10'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`lg:hidden absolute top-[calc(100%+1.5rem)] left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-premium transition-all duration-500 origin-top overflow-hidden border border-white/50 ${isMobileMenuOpen ? 'max-h-[600px] py-10 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col px-10 space-y-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-primary-950 font-bold uppercase tracking-[0.3em] text-xs block hover:text-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-6 flex flex-col gap-5">
                        <a href="tel:+917011797010" className="flex justify-center items-center gap-4 w-full py-5 bg-primary-50 rounded-2xl text-primary-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-primary-100 transition-colors">
                            <Phone size={18} /> Call Specialist
                        </a>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenModal();
                            }}
                            className="w-full btn-gold py-5 rounded-2xl font-bold uppercase text-[10px] tracking-[0.25em] shadow-xl"
                        >
                            Request callback
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 text-white relative overflow-hidden border-t border-white/5">
            {/* Top decorative bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold via-gold-dark to-gold animate-pulse" />

            <div className="container-custom pt-32 pb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-24 border-b border-white/5 pb-24">

                    <div className="space-y-12 text-center md:text-left">
                        <div className="group cursor-pointer">
                            <span className="text-4xl font-black tracking-[0.2em] text-white font-serif block mb-2">SOBHA RIVANA</span>
                            <span className="text-[10px] tracking-[0.5em] font-black uppercase text-gold block">Greater Noida West</span>
                            <div className="w-16 h-1 bg-gold mt-8 rounded-full group-hover:w-28 transition-all duration-700" />
                        </div>
                        <p className="text-primary-200/50 leading-relaxed font-serif italic text-base">
                            Elegantly designed residential community by Sobha Limited, setting a global benchmark for luxury craftsmanship.
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-12 text-white font-serif tracking-tight flex items-center gap-4 justify-center md:justify-start">
                            <span className="w-8 h-px bg-gold" /> Quick Links
                        </h4>
                        <ul className="space-y-6 text-primary-300 font-black uppercase tracking-[0.3em] text-[10px]">
                            <li><a href="#overview" className="hover:text-gold transition-all duration-300 flex items-center gap-4 justify-center md:justify-start group"><span className="w-0 h-px bg-gold group-hover:w-6 transition-all" /> Overview</a></li>
                            <li><a href="#highlights" className="hover:text-gold transition-all duration-300 flex items-center gap-4 justify-center md:justify-start group"><span className="w-0 h-px bg-gold group-hover:w-6 transition-all" /> Highlights</a></li>
                            <li><a href="#price-list" className="hover:text-gold transition-all duration-300 flex items-center gap-4 justify-center md:justify-start group"><span className="w-0 h-px bg-gold group-hover:w-6 transition-all" /> Floor Plans</a></li>
                            <li><a href="#amenities" className="hover:text-gold transition-all duration-300 flex items-center gap-4 justify-center md:justify-start group"><span className="w-0 h-px bg-gold group-hover:w-6 transition-all" /> Amenities</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-12 text-white font-serif tracking-tight flex items-center gap-4 justify-center md:justify-start">
                            <span className="w-8 h-px bg-gold" /> Certification
                        </h4>
                        <div className="space-y-10">
                            <div>
                                <p className="text-[10px] text-primary-500 font-black uppercase tracking-widest mb-3">RERA Registration</p>
                                <p className="text-white font-bold text-sm tracking-[0.1em] border-b border-white/5 pb-4">UPRERAPRJ313638/03/2026</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-primary-500 font-black uppercase tracking-widest mb-3">Project Status</p>
                                <p className="text-white font-bold text-sm tracking-[0.1em] border-b border-white/5 pb-4">Under Construction (Phase 1)</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between py-2">
                        <div className="mb-12">
                            <h4 className="text-xl font-bold mb-10 text-white font-serif tracking-tight border-r-4 border-gold pr-6 py-2 inline-block">Connect Now</h4>
                            <p className="text-4xl font-black text-white mb-3 font-serif hover:text-gold transition-colors cursor-pointer">7303975006</p>
                            <p className="text-gold italic text-sm font-medium tracking-wide">info@trustbridgegroup.in</p>
                        </div>

                        <div className="flex gap-8 items-center bg-white/5 p-6 rounded-[2rem] border border-white/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                             <div className="text-center">
                                 <p className="text-2xl font-black text-white italic tracking-tighter">RERA</p>
                                 <p className="text-[8px] font-black text-gold uppercase tracking-[0.3em]">Authorized</p>
                             </div>
                             <div className="w-px h-8 bg-white/20" />
                             <div className="text-center">
                                 <p className="text-2xl font-black text-white uppercase tracking-tighter">ISO</p>
                                 <p className="text-[8px] font-black text-gold uppercase tracking-[0.3em]">Certified</p>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-primary-500">
                    <div className="flex flex-col items-center gap-12">
                        <p className="text-[10px] leading-[2.5] max-w-5xl mx-auto uppercase tracking-[0.2em] font-black font-sans opacity-60">
                            Disclaimer: <span className="text-primary-400">The imagery and visuals on this portal are indicative only. This project is marketed by an authorized advisory firm. All dimensions and specifications are subject to final architectural approval. Official updates should be verified from the RERA website.</span>
                        </p>

                        <div className="flex justify-center flex-wrap gap-12 text-[9px] font-black uppercase tracking-[0.4em] opacity-80">
                            <a href="#" className="hover:text-gold transition-colors border-b border-white/5 pb-3">Terms of Use</a>
                            <a href="#" className="hover:text-gold transition-colors border-b border-white/5 pb-3">Secure Privacy</a>
                            <a href="#" className="hover:text-gold transition-colors border-b border-white/5 pb-3">Data Protection</a>
                        </div>

                        <p className="text-[10px] font-black text-primary-800 tracking-[0.8em] uppercase mt-6">
                            © {currentYear} Sobha Rivana • Signature Living
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


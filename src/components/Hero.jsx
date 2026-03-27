import { Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenModal }) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with slow zoom */}
            <div className="absolute inset-0 bg-primary-950/60 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slow-zoom_20s_infinite_alternate] ease-in-out"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dkgo71mgz/image/upload/v1774266466/Untitled_design_yxyshl.webp")'}}
            />

            {/* Content */}
            <div className="relative z-20 container-custom text-center pt-20">
                <div className="flex flex-col items-center justify-center mb-8 animate-reveal">
                    <span className="py-2.5 px-8 rounded-full glass-morphism text-white uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold shadow-2xl border border-white/20 mb-10 inline-block">
                        Launching the Downtown of Greater Noida
                    </span>
                    <h1 className="heading-xl text-white mb-10">
                        Sobha Rivana <br />
                        <span className="text-gold italic font-serif">Iconic Living</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-14 max-w-2xl mx-auto flex items-center justify-center gap-3 font-medium tracking-wide">
                        <MapPin size={22} className="text-gold" /> Sector 1, Greater Noida West
                    </p>
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-reveal [animation-delay:200ms]">
                    <button
                        onClick={onOpenModal}
                        className="btn-premium btn-gold w-full sm:w-auto shadow-2xl shadow-gold/20"
                    >
                        Get Expert Assistance
                    </button>
                    <a
                        href="tel:+917011797010"
                        className="btn-premium glass-morphism text-white w-full sm:w-auto border-white/30 hover:bg-white/20"
                    >
                        <Phone size={18} />
                        +91-7011797010
                    </a>
                </div> */}
            </div>

            {/* Floating Bottom Bar */}
            <div className="absolute bottom-12 inset-x-4 md:inset-x-10 hidden md:block z-30 animate-reveal [animation-delay:400ms]">
                <div className="container-custom">
                    <div className="glass-dark rounded-3xl md:rounded-full px-12 py-10 md:py-8 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full md:w-auto">
                            <div className="text-center md:text-left">
                                <p className="text-[10px] text-primary-300 uppercase tracking-[0.25em] font-bold mb-2 opacity-70">Initial Investment</p>
                                <p className="text-4xl font-extrabold text-white font-serif">₹ 1.99 Cr* <span className="text-sm font-normal text-white/40 font-sans ml-1 tracking-normal uppercase">Onwards</span></p>
                            </div>
                            <div className="hidden lg:block h-12 w-px bg-white/10" />
                            <div className="text-center md:text-left">
                                <p className="text-[10px] text-primary-300 uppercase tracking-[0.25em] font-bold mb-2 opacity-70">Configurations</p>
                                <p className="text-2xl font-bold text-white tracking-wide font-serif italic">2, 3 & 4 BHK Luxury Suites</p>
                            </div>
                        </div>

                        <div className="w-full md:w-auto flex flex-col items-center md:items-end">
                            <p className="text-[10px] text-primary-300 uppercase tracking-[0.25em] font-bold mb-2 opacity-70">RERA Approved</p>
                            <p className="text-xs md:text-sm font-bold text-white border-b border-gold/50 pb-1 tracking-widest uppercase">UPRERAPRJ313638/03/2026</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-60">
                <ChevronDown size={28} className="text-white" />
            </div>

            <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>
        </section>
    );
}

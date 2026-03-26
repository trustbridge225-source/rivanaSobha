import { Award, Zap, ShieldCheck, Factory, Globe2, Sparkles, Building2, Target } from 'lucide-react';

export default function Highlights() {
    const points = [
        { title: "Backward-Integrated", desc: "India's only fully backward-integrated real estate company.", icon: Factory },
        { title: "560+ Projects", desc: "Proven track record of landmark projects delivered across India.", icon: Globe2 },
        { title: "In-house Expertise", desc: "Concrete, Interiors, Glazing & Metal Works handled internally.", icon: Zap },
        { title: "Maximum Privacy", desc: "All standalone towers designed for zero-interference living.", icon: ShieldCheck },
        { title: "German Quality", desc: "All technicians trained by German experts for perfection.", icon: Award },
        { title: "1,456 Quality Checks", desc: "Highest industry standard quality control before handover.", icon: Target },
        { title: "230+ Awards", desc: "Recognized globally for excellence in design and quality.", icon: Sparkles },
        { title: "Luxury Clubhouse", desc: "Segment's most premium clubhouse for social indulgence.", icon: Building2 }
    ];

    return (
        <section id="highlights" className="section-padding bg-primary-100/30 relative">
            <div className="container-custom">
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Unrivaled Standards</span>
                    <h2 className="heading-lg text-primary-950 mb-8">Project Highlights</h2>
                    <div className="w-20 h-1.5 bg-primary-950 rounded-full mb-10"></div>
                    <p className="text-xl text-primary-900/70 max-w-2xl mx-auto font-medium font-serif italic text-center">
                        Beyond mere construction, we build architectural legacies. Discover what makes Sobha Sector 1 the most anticipated project in NCR.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, idx) => {
                        const Icon = point.icon;
                        return (
                            <div
                                key={idx}
                                className="group bg-white p-12 rounded-[3rem] shadow-premium hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col items-center text-center border border-white"
                            >
                                <div className="w-20 h-20 bg-primary-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary-950 transition-colors duration-700 shadow-inner group-hover:rotate-12 transform">
                                    <Icon className="text-primary-600 group-hover:text-gold transition-colors duration-700" size={36} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold text-primary-950 mb-6 font-serif">{point.title}</h3>
                                <div className="w-8 h-1 bg-gold/30 mb-6 group-hover:w-16 transition-all duration-700" />
                                <p className="text-primary-800/60 text-sm leading-relaxed font-sans italic font-medium">
                                    {point.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-32 p-16 glass-morphism rounded-[4rem] bg-white border border-white shadow-premium overflow-hidden relative">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="lg:max-w-3xl">
                            <h4 className="text-4xl font-black text-primary-950 mb-6 font-serif italic">Making Realty Dreams a Reality</h4>
                            <p className="text-lg text-primary-900/60 font-medium leading-relaxed italic">
                                With over 25 years of experience, Sobha continues to redefine urban living. Every square foot is a testament to our commitment to environmental sustainability and innovative design.
                            </p>
                        </div>
                        <div className="flex gap-20 items-center flex-wrap justify-center">
                            <div className="text-center">
                                <p className="text-6xl font-black text-gold mb-3 font-serif">560+</p>
                                <p className="text-[11px] font-black text-primary-400 uppercase tracking-[0.4em]">Delivered</p>
                            </div>
                            <div className="w-px h-16 bg-primary-100 hidden lg:block" />
                            <div className="text-center">
                                <p className="text-6xl font-black text-gold mb-3 font-serif">230+</p>
                                <p className="text-[11px] font-black text-primary-400 uppercase tracking-[0.4em]">Awards</p>
                            </div>
                        </div>
                    </div>

                    {/* Gradient highlight */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent -z-10" />
                </div>
            </div>
        </section>
    )
}

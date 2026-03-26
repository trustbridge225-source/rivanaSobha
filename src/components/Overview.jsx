import { useState } from 'react'

export default function Overview() {
    const [activeStat, setActiveStat] = useState(0);

    const stats = [
        { label: 'Acres of Area', value: '12', description: 'Expansive lush green landscaping' },
        { label: 'High-Rise Towers', value: '8', description: 'Phase 1 & 2 premium infrastructure' },
        { label: 'Units Per Floor', value: '4', description: 'Maximum privacy and ventilation' },
        { label: 'High-Speed Lifts', value: '4', description: 'Per tower for swift transit' },
    ];

    return (
        <section id="overview" className="section-padding bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 opacity-30" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10 opacity-40" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-100 rounded-3xl -z-10 animate-pulse transition-transform group-hover:scale-110" />
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
                                alt="Sobha Architectural View"
                                className="w-full h-[650px] object-cover rounded-[3rem] shadow-premium border-8 border-white transition-transform duration-1000 group-hover:scale-[1.02]"
                            />

                            {/* Floating badge over image */}
                            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-premium border border-primary-50 max-w-[300px] animate-float">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <p className="font-bold text-primary-950 font-serif italic text-lg">A Legacy of Trust</p>
                                </div>
                                <p className="text-primary-800/70 text-sm leading-relaxed font-medium">
                                    Backed by Sobha's renowned legacy of superior craftsmanship and construction quality.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <div className="max-w-xl">
                            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Real Estate Excellence</span>
                            <h2 className="heading-lg text-primary-950 mb-10">
                                Iconic Design. <br />
                                <span className="italic text-gold">Unmatched Quality.</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-gold rounded-full mb-12" />
                            <p className="text-xl text-primary-900/80 leading-relaxed mb-16 font-medium font-serif italic">
                                Sobha Limited proudly presents Sector 1, a premium residential community in Noida Extension,
                                blending luxury, comfort, and convenience.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setActiveStat(idx)}
                                        className={`p-10 rounded-[2.5rem] transition-all duration-700 border ${activeStat === idx ? 'bg-primary-950 text-white shadow-premium -translate-y-3 border-primary-950' : 'bg-white text-primary-950 hover:border-gold/30 border-primary-50'}`}
                                    >
                                        <h3 className={`text-5xl font-serif font-black mb-2 ${activeStat === idx ? 'text-gold' : 'text-primary-900'}`}>{stat.value}</h3>
                                        <p className={`font-bold text-[10px] uppercase tracking-[0.2em] mb-4 ${activeStat === idx ? 'text-primary-200' : 'text-primary-400'}`}>{stat.label}</p>
                                        <p className={`text-xs leading-relaxed transition-opacity ${activeStat === idx ? 'opacity-70' : 'opacity-0 h-0 overflow-hidden'}`}>{stat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

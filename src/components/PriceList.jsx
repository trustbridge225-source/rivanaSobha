export default function PriceList({ onOpenModal }) {
    const plans = [
        { type: 'Luxury 2 BHK', size: '1,300 Sq.Ft.', price: '₹ 1.9 Cr.*', highlights: ['Spacious Balcony', 'Premium Master Suite', 'Ventilated Living'] },
        { type: 'Imperial 3 BHK', size: '1,600 Sq.Ft.', price: '₹ 2.39 Cr.*', highlights: ['Private Foyer', 'Exclusive Wardrobe Space', 'Modular Layout'] },
        { type: 'Elite 3 BHK + 3T', size: '1,900 Sq.Ft.', price: '₹ 2.75 Cr.*', highlights: ['Servant Quarter', 'Study / Pooja Room', 'Panoramic Views'] },
        { type: 'Royal 4 BHK', size: '2,300 - 2,600 Sq.Ft.', price: '₹ 3.3 Cr.*', highlights: ['Double Living Room', 'Vastu Compliant', 'Ultra-Luxury Finishes'] },
    ];

    return (
        <section id="price-list" className="section-padding bg-primary-950 text-white relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden mask-gradient-to-t">
                <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 -left-20 w-[800px] h-[800px] bg-primary-600 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-3xl text-center md:text-left">
                        <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block animate-pulse">Investment Opportunities</span>
                        <h2 className="heading-lg text-white mb-8">Masterfully <br /><span className="italic text-gold">Crafted Floor Plans</span></h2>
                        <div className="w-20 h-1.5 bg-gold rounded-full mb-8 mx-auto md:mx-0"></div>
                    </div>
                    <div className="text-center md:text-right hidden sm:block">
                        <p className="text-primary-200/60 text-xl font-medium max-w-sm ml-auto leading-relaxed italic font-serif">
                            Select a residence that resonates with your vision of luxury and sophistication.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, idx) => (
                        <div key={idx} className="group glass-dark rounded-[3.5rem] p-12 border border-white/5 transition-all duration-700 hover:-translate-y-5 hover:bg-white/[0.08] shadow-2xl flex flex-col h-full relative overflow-hidden">
                            {/* Popular choice badge */}
                            {idx === 2 && (
                                <div className="absolute top-0 right-0 bg-gold text-primary-950 py-2.5 px-8 rounded-bl-[2rem] font-black text-[9px] uppercase tracking-[0.3em] shadow-xl">
                                    Preferred
                                </div>
                            )}

                            <h3 className="text-3xl font-bold text-white mb-3 font-serif group-hover:text-gold transition-colors">{plan.type}</h3>
                            <p className="text-primary-300 mb-10 font-bold text-lg tracking-tight font-sans italic opacity-80">{plan.size}</p>

                            <div className="w-full h-px bg-white/10 mb-10" />

                            <ul className="space-y-5 mb-14">
                                {plan.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-medium text-white/70">
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_#d4af37]" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className="text-[10px] text-primary-400 uppercase tracking-[0.25em] mb-3 font-black">Starts From</p>
                                <p className="text-5xl font-black text-white mb-12 font-serif tracking-tight">{plan.price}</p>
                                <button
                                    onClick={onOpenModal}
                                    className="w-full btn-premium btn-gold py-5 rounded-2xl text-[10px] tracking-[0.3em] font-black uppercase shadow-2xl"
                                >
                                    Get Pricing
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

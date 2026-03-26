import { Droplets, Trophy, Baby, Waves, MonitorPlay, Dumbbell, BookOpen, TreePine, Sun, PartyPopper, Flower2, Heart, Music, Coffee, Wind } from 'lucide-react';

const amenities = [
    { name: 'Water Feature', icon: Droplets, color: 'text-blue-500' },
    { name: 'Multipurpose Court', icon: Trophy, color: 'text-orange-500' },
    { name: 'Toddlers Play Area', icon: Baby, color: 'text-pink-400' },
    { name: 'Swimming Pool', icon: Waves, color: 'text-cyan-500' },
    { name: 'Billiard Room', icon: MonitorPlay, color: 'text-indigo-500' },
    { name: 'Basketball Court', icon: Trophy, color: 'text-orange-600' },
    { name: 'Yoga, Aerobics', icon: Heart, color: 'text-rose-400' },
    { name: 'Senior Citizen Garden', icon: TreePine, color: 'text-emerald-600' },
    { name: 'Banquet Hall', icon: PartyPopper, color: 'text-amber-500' },
    { name: 'Gymnasium', icon: Dumbbell, color: 'text-slate-700' },
    { name: 'Aroma Garden', icon: Flower2, color: 'text-purple-400' },
    { name: 'Library / Lounge', icon: BookOpen, color: 'text-amber-800' },
    { name: 'Roof Top Lounge', icon: Sun, color: 'text-yellow-600' },
    { name: 'Music Room', icon: Music, color: 'text-violet-500' },
    { name: 'Coffee Shop', icon: Coffee, color: 'text-amber-900' },
    { name: 'Aerodynamics', icon: Wind, color: 'text-teal-400' },
];

export default function Amenities() {
    return (
        <section id="amenities" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative vertical lines */}
            <div className="absolute top-0 left-10 md:left-24 h-full w-px bg-primary-100 hidden lg:block opacity-50" />
            <div className="absolute top-0 right-10 md:right-24 h-full w-px bg-primary-100 hidden lg:block opacity-50" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center text-center mb-28">
                    <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Curated Lifestyle</span>
                    <h2 className="heading-lg text-primary-950 mb-10 italic">
                        Iconic <span className="text-gold not-italic">Amenities</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary-950 rounded-full mb-10"></div>
                    <p className="text-xl text-primary-900/60 max-w-2xl mx-auto font-medium font-serif italic text-center">
                        A sanctuary of wellness and entertainment, designed for the most discerning residents.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {amenities.map((amenity, idx) => {
                        const Icon = amenity.icon;
                        return (
                            <div
                                key={idx}
                                className="group bg-primary-50 p-12 rounded-[3.5rem] text-center transition-all duration-700 hover:bg-primary-950 cursor-pointer shadow-premium hover:shadow-2xl hover:-translate-y-4 border border-transparent hover:border-gold/20"
                            >
                                <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] flex items-center justify-center mb-8 shadow-premium group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                                    <Icon className={`${amenity.color} w-10 h-10 transition-transform duration-700 group-hover:scale-110`} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-primary-950 text-xl group-hover:text-gold transition-colors duration-700 font-serif italic mb-4">{amenity.name}</h3>
                                <div className="w-10 h-1 bg-gold/20 mx-auto group-hover:bg-gold group-hover:w-16 transition-all duration-700 rounded-full" />
                            </div>
                        )
                    })}
                </div>

                <div className="mt-28 text-center">
                    <button
                        onClick={() => document.getElementById('price-list').scrollIntoView()}
                        className="text-gold font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-5 mx-auto group"
                    >
                        Explore Project Plan
                        <span className="w-16 h-px bg-gold group-hover:w-24 transition-all duration-700" />
                    </button>
                </div>
            </div>
        </section>
    )
}

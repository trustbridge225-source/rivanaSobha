import { MapPin, Building2, School, Hospital, TrainFront, Car, Navigation, Globe } from 'lucide-react';

export default function Location() {
    const landmarks = [
        { name: 'FNG Expressway', distance: '1 km', icon: Car, type: 'Connectivity' },
        { name: 'Yatharth Hospital', distance: '1 km', icon: Hospital, type: 'Healthcare' },
        { name: 'Lotus Valley School', distance: '3 km', icon: School, type: 'Education' },
        { name: 'Gaur Chowk', distance: '3.5 km', icon: MapPin, type: 'Major Landmark' },
        { name: 'GD Goenka School', distance: '4.5 km', icon: School, type: 'Education' },
        { name: 'Nearest Metro Station', distance: '6 km', icon: TrainFront, type: 'Connectivity' },
        { name: 'Noida Golf Course', distance: '11 km', icon: Building2, type: 'Leisure' },
        { name: 'Fortis Hospital', distance: '12 km', icon: Hospital, type: 'Healthcare' },
    ];

    return (
        <section id="location" className="section-padding bg-primary-100/20 relative overflow-hidden">
            {/* Background radial highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary-200/50 rounded-full blur-[150px] -z-10" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-16">
                    <div className="order-2 lg:order-1">
                        <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block animate-pulse">Prime Connectivity</span>
                        <h2 className="heading-lg text-primary-950 mb-10">The Comfort <br /><span className="italic text-gold">of a great location.</span></h2>
                        <div className="w-20 h-1.5 bg-gold rounded-full mb-14"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {landmarks.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-premium flex items-center gap-6 hover:bg-primary-950 group transition-all duration-700 hover:-translate-y-3 border border-white">
                                        <div className="bg-primary-50 p-5 rounded-2xl group-hover:bg-primary-900 transition-colors duration-700 shadow-inner">
                                            <Icon className="text-primary-600 group-hover:text-gold transition-colors duration-700" size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-[10px] uppercase tracking-widest text-primary-400 font-black group-hover:text-primary-500 transition-colors mb-2">{item.type}</p>
                                            <p className="font-bold text-primary-950 leading-tight group-hover:text-white transition-colors truncate mb-2 italic font-serif text-lg">{item.name}</p>
                                            <p className="text-gold font-black text-xs tracking-widest uppercase">{item.distance}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-16 p-10 bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white flex flex-col sm:flex-row items-center gap-8 shadow-premium">
                            <div className="w-16 h-16 bg-primary-950 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform">
                                <Navigation size={28} className="text-gold" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <p className="text-primary-900/80 font-medium leading-relaxed italic font-serif">
                                    Perfectly situated at Sector 1, Greater Noida West, offering rapid access to Noida & Greater Noida Expressways.
                                </p>
                            </div>
                            <button className="whitespace-nowrap btn-premium btn-gold px-10 py-4 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
                                View site
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-[700px] bg-white rounded-[4rem] shadow-premium overflow-hidden border-8 border-white relative group order-1 lg:order-2">
                        <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-transparent transition-all duration-1000 z-10 pointer-events-none" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11860.679614024875!2d77.42284808397307!3d28.577310869424522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef32213980d5%3A0xd250f82d12a9cc79!2sSobha%20Rivana!5e1!3m2!1sen!2sin!4v1774269083983!5m2!1sen!2sin"
                            className="w-full h-full border-0 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sobha Rivana Location"
                        ></iframe>

                        {/* <div className="absolute top-12 left-12 flex gap-4 z-20 pointer-events-none">
                            <div className="glass-morphism px-10 py-5 rounded-[2rem] flex items-center gap-4 shadow-2xl border border-white/40 group-hover:bg-white group-hover:text-primary-950 transition-all duration-700">
                                <Globe className="text-gold animate-spin-slow" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Global Standards</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
        </section>
    )
}

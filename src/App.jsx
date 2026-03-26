import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Highlights from './components/Highlights'
import Amenities from './components/Amenities'
import PriceList from './components/PriceList'
import Location from './components/Location'
import Footer from './components/Footer'
import InterestModal from './components/InterestModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsModalOpen(true)
    },3000)
  },[])

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-primary-50 selection:bg-primary-200">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-100 bg-primary-100/30 overflow-hidden shadow-sm">
        <div
          className="h-full bg-gold transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <Overview />
        <Highlights />
        <PriceList onOpenModal={openModal} />
        <Amenities />
        <Location />
      </main>

      <Footer />

      {/* Fixed Call Button (Mobile Only) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <a
          href="tel:+917011797010"
          className="bg-primary-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+919654619021&text=Hello, Looking for Sobha Rivana at Greater Noida West. Get in touch with me my name is"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 flex items-center justify-center group"
        aria-label="WhatsApp Us"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold mr-0 group-hover:mr-2">Chat with us</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.161.453-.834.831-1.17.859-.275.024-.606.059-1.398-.24-1.354-.51-2.228-1.527-3.078-2.544-.813-.974-1.096-1.52-1.087-2.128.009-.59.278-.891.442-1.076.128-.145.334-.234.542-.234.116 0 .23.003.327.009.139.009.288-.046.425.293.16.395.542 1.341.587 1.436.046.096.088.225.018.36-.07.135-.121.218-.236.353-.111.131-.24.288-.337.387-.111.111-.23.238-.106.453.124.215.547.915 1.187 1.493.826.745 1.504.975 1.716 1.076.212.101.332.083.457-.055.125-.138.544-.633.688-.85.144-.22.288-.184.481-.111.193.074 1.222.584 1.432.693.21.109.351.164.402.253.053.089.053.513-.109.965z" />
        </svg>
      </a>

      <InterestModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App

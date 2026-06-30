import { useState, useEffect } from 'react'
import { Phone, MapPin, Car, Truck, Package, Wrench, Globe, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const heroSlides = [
  {
    url: 'https://res.cloudinary.com/dnovlrekd/image/upload/v1782806217/WhatsApp_Image_2026-06-30_at_08.43.52_u6e3b3.jpg',
    caption: 'Quality vehicles at great prices',
  },
  {
    url: 'https://res.cloudinary.com/dnovlrekd/image/upload/v1782806220/WhatsApp_Image_2026-06-30_at_08.43.53_iawakl.jpg',
    caption: 'Wide selection on our Durham lot',
  },
]

const services = [
  { num: '01', label: 'Auto Advisory Service',                  desc: 'Expert guidance to help you make smart, informed vehicle purchasing decisions.',       icon: Globe,        accent: '#CC0000' },
  { num: '02', label: 'Auto Buying / Selling',                  desc: 'Buy or sell in Naira, Dollars, or Euros — seamless local and international deals.',   icon: ShoppingCart, accent: '#F59E0B' },
  { num: '03', label: 'Auto Transport / Shipment',              desc: 'Rail and container shipping for vehicles across borders, fast and reliable.',          icon: Truck,        accent: '#1B3A8F' },
  { num: '04', label: 'Shipment of Boxes / Barrels',            desc: 'Dependable cargo shipping for boxes and barrels to destinations nationwide.',          icon: Package,      accent: '#F59E0B' },
  { num: '05', label: 'Auto Clearing / Storage / Distribution', desc: 'Full-service nationwide clearing, secure storage, and vehicle distribution.',         icon: Car,          accent: '#CC0000' },
  { num: '06', label: 'Auto Body Work / Mechanical',            desc: 'Professional auto body repairs and mechanical services to keep you on the road.',     icon: Wrench,       accent: '#9CA3AF' },
]

const aboutDetails = [
  { label: 'Address',     value: '2821 N Roxboro St, Durham, NC 27704', icon: MapPin },
  { label: 'Phone',       value: '+1 919-475-4541',                     icon: Phone },
  { label: 'Established', value: 'November 2017',                       icon: Car },
  { label: 'Category',    value: 'Vehicle, Aircraft & Boat',            icon: Globe },
]

function StatItem({ label, suffix = '', target, inView }) {
  const count = useCounter(target, inView)
  return (
    <div className={`text-center ${inView ? 'anim-slide-up' : 'opacity-0'}`}>
      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs text-white/50 mt-2 uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function Home() {
  const [current, setCurrent]   = useState(0)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setCurrent(c => (c + 1) % heroSlides.length)

  const [statsRef,    statsInView]    = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [aboutRef,    aboutInView]    = useInView()
  const [contactRef,  contactInView]  = useInView()

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.url}
            src={slide.url}
            alt={slide.caption}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, transform: 'scale(1.04)' }}
          />
        ))}

        {/* Hero overlays — always dark so text is legible in both modes */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'rgba(0,0,0,0.72)' }} />
        <div className="absolute inset-0 hidden md:block" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.2) 100%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
        }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <p
              className={heroReady ? 'anim-slide-up' : 'opacity-0'}
              style={{ animationDelay: '0s', color: '#F59E0B', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}
            >
              Dealership Shop · Durham, North Carolina
            </p>
            <h1
              className={heroReady ? 'anim-slide-up' : 'opacity-0'}
              style={{ animationDelay: '0.15s', color: '#fff', fontSize: 'clamp(2.75rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.2rem' }}
            >
              Bell<span style={{ color: '#CC0000' }}>zero</span>
            </h1>
            <h2
              className={heroReady ? 'anim-slide-up' : 'opacity-0'}
              style={{ animationDelay: '0.25s', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.25rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}
            >
              Auto
            </h2>
            <p
              className={`mx-auto md:mx-0 ${heroReady ? 'anim-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.35s', color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '420px' }}
            >
              Your trusted partner for buying, selling, shipping, and servicing vehicles — locally and internationally.
            </p>
            <div
              className={`flex flex-wrap gap-3 justify-center md:justify-start ${heroReady ? 'anim-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#services"
                className="inline-block font-bold text-sm text-white rounded-md transition-all duration-300"
                style={{ background: '#CC0000', padding: '13px 28px', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#a80000'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#CC0000'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-block font-semibold text-sm text-white rounded-md transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.35)', padding: '13px 28px', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent' }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <p className="absolute bottom-16 left-4 sm:left-6 z-10 hidden sm:block" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontStyle: 'italic' }}>
          {heroSlides[current].caption}
        </p>

        {[{ fn: prev, Icon: ChevronLeft, pos: 'left-3 sm:left-4' }, { fn: next, Icon: ChevronRight, pos: 'right-3 sm:right-4' }].map(({ fn, Icon, pos }) => (
          <button
            key={pos}
            onClick={fn}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-all duration-300`}
            style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', width: '40px', height: '40px', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#CC0000'; e.currentTarget.style.borderColor = '#CC0000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          >
            <Icon size={18} />
          </button>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 items-center">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-sm border-none cursor-pointer transition-all duration-300"
              style={{ height: '3px', width: i === current ? '28px' : '10px', background: i === current ? '#CC0000' : 'rgba(255,255,255,0.35)' }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-4 sm:right-6 z-10 hidden sm:flex flex-col items-center gap-1.5 anim-pulse-down">
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.55rem', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}>SCROLL</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div ref={statsRef} className="py-10" style={{ background: '#CC0000' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem label="Established"      target={2017} suffix=""  inView={statsInView} />
          <StatItem label="Services Offered" target={6}    suffix="+" inView={statsInView} />
          <StatItem label="Currencies"       target={3}    suffix=""  inView={statsInView} />
          <StatItem label="Years of Trust"   target={7}    suffix="+" inView={statsInView} />
        </div>
      </div>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" ref={servicesRef} className="py-16 md:py-24" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`text-center mb-12 md:mb-16 ${servicesInView ? 'anim-slide-up' : 'opacity-0'}`}>
            <p className="text-xs font-bold uppercase mb-3" style={{ color: '#CC0000', letterSpacing: '0.25em' }}>
              What We Offer
            </p>
            <h2 className="font-extrabold" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', margin: '0 0 14px' }}>
              Our Services
            </h2>
            <p className="mx-auto text-sm leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: '480px', lineHeight: 1.7 }}>
              From vehicle advisory to international shipment, we handle every step of your auto journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.num}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${servicesInView ? 'anim-slide-up' : 'opacity-0'}`}
                  style={{
                    animationDelay: servicesInView ? `${i * 0.09}s` : '0s',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    padding: '28px',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.accent
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.background = 'var(--card-bg-hover)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--card-border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = 'var(--card-bg)'
                  }}
                >
                  <span
                    className="absolute top-3 right-4 select-none pointer-events-none font-extrabold leading-none"
                    style={{ fontSize: '5rem', color: 'var(--watermark)' }}
                  >
                    {s.num}
                  </span>

                  <div
                    className="flex items-center justify-center rounded-xl mb-5"
                    style={{ width: '48px', height: '48px', background: s.accent + '22', border: `1px solid ${s.accent}55` }}
                  >
                    <Icon size={21} style={{ color: s.accent }} />
                  </div>

                  <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>{s.label}</h3>
                  <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--svc-desc)' }}>{s.desc}</p>

                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
                    style={{ height: '2px', background: s.accent, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="py-16 md:py-24" style={{ background: 'var(--bg-section)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: text */}
          <div className={aboutInView ? 'anim-slide-left' : 'opacity-0'}>
            <p className="text-xs font-bold uppercase mb-3" style={{ color: '#CC0000', letterSpacing: '0.25em' }}>
              Who We Are
            </p>
            <h2 className="font-extrabold leading-tight mb-6" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
              About<br />Bellzero Auto
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--about-text)', lineHeight: 1.85 }}>
              Bellzero Auto is a full-service dealership and auto logistics company based in Durham, North Carolina. Since 2017, we've helped clients buy, sell, ship, and clear vehicles both domestically and internationally.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--about-text)', lineHeight: 1.85 }}>
              Whether you need to purchase a reliable vehicle, ship cargo overseas, or want expert auto advisory — we have the experience and network to deliver. We transact in USD, Naira, and Euros.
            </p>
            <a
              href="#contact"
              className="inline-block font-bold text-sm rounded-md transition-all duration-300"
              style={{ background: '#CC0000', color: '#fff', padding: '13px 28px', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a80000'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#CC0000'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Contact Us
            </a>
          </div>

          {/* Right: detail cards */}
          <div
            className={`flex flex-col gap-3 ${aboutInView ? 'anim-slide-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {aboutDetails.map(item => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl transition-all duration-300"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '16px 18px' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,0,0,0.45)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--card-border)')}
                >
                  <div
                    className="flex items-center justify-center rounded-lg shrink-0"
                    style={{ width: '40px', height: '40px', background: 'var(--icon-red-bg)', border: '1px solid var(--icon-red-border)' }}
                  >
                    <Icon size={16} style={{ color: '#CC0000' }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold uppercase mb-1" style={{ color: 'var(--text-label)', fontSize: '0.62rem', letterSpacing: '0.15em' }}>
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm break-words" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" ref={contactRef} className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#1B3A8F' }}>
        <div className="pointer-events-none absolute -top-20 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full"
          style={{ background: 'rgba(204,0,0,0.18)', filter: 'blur(80px)' }} />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full"
          style={{ background: 'rgba(255,255,255,0.07)', filter: 'blur(80px)' }} />

        <div className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center ${contactInView ? 'anim-slide-up' : 'opacity-0'}`}>
          <p className="text-xs font-bold uppercase mb-4" style={{ color: '#F59E0B', letterSpacing: '0.25em' }}>
            Reach Us
          </p>
          <h2 className="font-extrabold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            Let's Talk<br /><span style={{ color: '#CC0000' }}>Vehicles</span>
          </h2>
          <p className="mx-auto mb-10 leading-relaxed text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '460px', lineHeight: 1.8 }}>
            Ready to buy, sell, or ship? Give us a call or come visit us in Durham, NC.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <a
              href="tel:+19194754541"
              className="flex items-center gap-2.5 font-bold rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ background: '#CC0000', color: '#fff', padding: '15px 32px', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 8px 32px rgba(204,0,0,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a80000'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#CC0000'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <Phone size={19} />
              +1 919-475-4541
            </a>
            <a
              href="https://maps.google.com/?q=2821+N+Roxboro+St,+Durham,+NC+27704"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-bold rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#fff', padding: '15px 32px', fontSize: '1rem', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <MapPin size={19} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

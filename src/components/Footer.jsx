import { Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <img src="/Images/bellzero-logo.svg" alt="Bellzero Auto" style={{ height: '48px', width: 'auto', marginBottom: '16px' }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            Your trusted dealership for buying, selling, shipping, and servicing vehicles — locally and internationally.
          </p>
        </div>

        <div>
          <p style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="tel:+19194754541"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              <Phone size={14} style={{ flexShrink: 0 }} />
              +1 919-475-4541
            </a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
              <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              2821 N Roxboro St, Durham, NC 27704
            </div>
          </div>
        </div>

        <div>
          <p style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Follow Us
          </p>
          <a
            href="https://www.facebook.com/bellzeroauto"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >
            <ExternalLink size={14} />
            Bellzero AUTO on Facebook
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '20px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
        © 2025 Bellzero Auto. All rights reserved. · Durham, NC
      </div>
    </footer>
  )
}

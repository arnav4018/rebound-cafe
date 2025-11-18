import { useMemo } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import LoadingLogo from '../components/LoadingLogo'
import FadeIn from '../components/FadeIn'

const containerStyle = {
  width: '100%',
  height: '280px',
}

const center = {
  lat: 19.076, // Placeholder: Mumbai coordinates
  lng: 72.8777,
}

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#fdfbf6' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#1e3f20' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#fdfbf6' }],
    },
    {
      featureType: 'poi.business',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road',
      stylers: [{ color: '#e1e4dc' }],
    },
    {
      featureType: 'water',
      stylers: [{ color: '#c6d6cc' }],
    },
  ],
}

export default function ContactPage() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

  const mapCenter = useMemo(() => center, [])

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
      {/* Contact form */}
      <FadeIn>
      <section className="space-y-5 mb-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Get in touch
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Reserve a table, plan an event, or say hello.</h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-700">
            Drop us a message and we'll get back as soon as we can. For same-day reservations,
            calling is usually fastest.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-full border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-800 outline-none transition-shadow focus:border-rebound-accent focus:shadow-[0_0_0_1px_rgba(76,124,76,0.4)]"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-full border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-800 outline-none transition-shadow focus:border-rebound-accent focus:shadow-[0_0_0_1px_rgba(76,124,76,0.4)]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-full border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-800 outline-none transition-shadow focus:border-rebound-accent focus:shadow-[0_0_0_1px_rgba(76,124,76,0.4)]"
              placeholder="Reservation, event, feedback..."
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full resize-none rounded-2xl border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-800 outline-none transition-shadow focus:border-rebound-accent focus:shadow-[0_0_0_1px_rgba(76,124,76,0.4)]"
              placeholder="Tell us a bit more about what you have in mind."
            />
          </div>

          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </section>
      </FadeIn>

      {/* Location, hours, map */}
      <FadeIn>
      <section className="space-y-5">
        <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-5 shadow-md">
          <h2 className="text-base font-semibold text-rebound-text">Rebound Café, platinum plaza Bhopal</h2>
          <div className="mt-2 space-y-1 text-xs text-neutral-700">
            <p className="mt-2 font-medium text-neutral-800">
              Phone: <a href="tel:7999957722" className="underline decoration-dotted">7999957722</a>,{' '}
              <a href="tel:8878460339" className="underline decoration-dotted">8878460339</a>
            </p>
            <p className="text-neutral-600">Email: hello@reboundcafe.com</p>
          </div>

          <div className="mt-4 space-y-1 text-xs text-neutral-700">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Hours
            </p>
            <p>Monday – Sunday: 11:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-4 shadow-md">
          {apiKey ? (
            <LoadScript googleMapsApiKey={apiKey} loadingElement={<LoadingLogo />}>
              <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={15} options={mapOptions}>
                {/* Marker can be added here if desired */}
              </GoogleMap>
            </LoadScript>
          ) : (
            <div className="flex h-[280px] items-center justify-center rounded-2xl bg-neutral-100 text-center text-xs text-neutral-600">
              <p>
                Google Map preview will render here once a <code>VITE_GOOGLE_MAPS_API_KEY</code> is
                configured.
              </p>
            </div>
          )}
        </div>
      </section>
      </FadeIn>
    </div>
  )
}

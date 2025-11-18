import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const highlightItems = [
  {
    id: 'highlight-1',
    name: 'Signature Latte',
    description: 'Balanced espresso with velvety steamed milk and a touch of house-made syrup.',
    imageUrl: '/assets/coffee.svg',
  },
  {
    id: 'highlight-2',
    name: 'Fresh Butter Croissant',
    description: 'Flaky, golden layers baked every morning in small batches.',
    imageUrl: '/assets/snacks.svg',
  },
  {
    id: 'highlight-3',
    name: 'Vegan Garden Bowl',
    description: 'Wholesome grains, roasted veggies, and bright herbs for a light lunch.',
    imageUrl: '/assets/pasta.svg',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <FadeIn>
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
          {/* Use the same parallax speed so the label and heading keep their spacing and don't overlap */}
          <Parallax speed={-4}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Crafted with care in Your City
            </p>
          </Parallax>
          <Parallax speed={-4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-rebound-text">
              Your daily escape, one cup at a time.
            </h1>
          </Parallax>
          <p className="max-w-md text-sm leading-relaxed text-neutral-700">
            Rebound Cafe is a warm corner for slow mornings, quick catch-ups, and everything in
            between. Settle into soft light, low music, and coffee that feels like a daily ritual.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/menu" className="btn-primary">
              View Menu
            </Link>
            <span className="text-xs text-neutral-600">
              Open daily 11:00 AM – 11:00 PM
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-neutral-200/70 shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
            <img
              src="/hero-image.jpg"
              alt="Warm, minimal cafe interior with natural light"
              loading="lazy"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-2xl bg-rebound-bg/90 px-4 py-3 text-xs shadow-md">
            <p className="font-semibold tracking-wide text-rebound-text">Corner table, soft light</p>
            <p className="text-[11px] text-neutral-600">Your new favorite spot to slow down.</p>
          </div>
        </div>
      </section>
      </FadeIn>

      <SectionDivider />

      {/* Menu Highlights */}
      <FadeIn>
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl">Highlights from the menu</h2>
            <p className="text-sm text-neutral-700">
              A glimpse of what we're pouring and baking today. Explore the full menu for more.
            </p>
          </div>
          <Link to="/menu" className="text-xs font-medium tracking-[0.2em] uppercase text-rebound-text/70">
            View full menu 
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlightItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                <h3 className="text-base font-semibold text-rebound-text">{item.name}</h3>
                <p className="text-xs leading-relaxed text-neutral-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      </FadeIn>

      <SectionDivider />

      {/* Our vibe / video section */}
      <FadeIn>
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              The daily ritual
            </p>
            <h2 className="text-2xl md:text-3xl">Where moments are brewed</h2>
            <p className="max-w-md text-sm text-neutral-700">
              The soft murmur of conversation, the hiss of the espresso machine, the clink of cups.
              A space designed to feel familiar and quietly inspiring.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <video
            className="h-[260px] w-full object-cover sm:h-[320px] md:h-[420px]"
            src="/vedio-vibe.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-6 max-w-xl rounded-2xl bg-black/45 px-6 py-4 text-center text-white backdrop-blur-sm drop-shadow-[0_6px_16px_rgba(0,0,0,0.85)]">
              <h3 className="text-2xl md:text-3xl font-semibold">Slow down, even just for one cup.</h3>
              <p className="mt-3 text-sm text-neutral-100/95">
                Whether youre catching up with a friend or diving into a good book, Rebound Cafe
                is a place to reset.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <SectionDivider />

      {/* Location & hours */}
      <FadeIn>
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Visit us
          </p>
          <h2 className="text-2xl md:text-3xl">Find your corner at Rebound Cafe</h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <p className="font-medium text-rebound-text">Rebound Café, platinum plaza Bhopal</p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Hours</p>
            <p>Monday to Sunday 11:00 AM – 11:00 PM</p>
            <p className="text-xs text-neutral-600">
              Free Wi-Fi, ample outlets, and a calm, cozy atmosphere.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-5 shadow-md">
          <div className="space-y-2 text-xs text-neutral-600">
            <p className="font-medium text-rebound-text">Planning your first visit?</p>
            <p>
              Head to the Contact page for an interactive map and more ways to reach us.
            </p>
          </div>
        </div>
      </section>
      </FadeIn>
    </div>
  )
}

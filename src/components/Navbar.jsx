import { NavLink } from 'react-router-dom'

const navLinkClasses = ({ isActive }) =>
  [
    'text-sm md:text-base tracking-wide transition-colors',
    isActive ? 'text-rebound-accent' : 'text-rebound-text/70 hover:text-rebound-text',
  ].join(' ')

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-rebound-bg/90 backdrop-blur border-b border-neutral-200/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/490209006_646874238260704_8688811277359047673_n.jpg"
            alt="Rebound Cafe logo"
            className="h-9 w-9 rounded-full border border-neutral-300 bg-white object-cover shadow-sm"
          />
          <div className="leading-tight">
            <div className="font-semibold tracking-[0.18em] text-xs text-rebound-text uppercase">
              Rebound Cafe
            </div>
            <p className="text-[11px] text-neutral-600">Your daily escape</p>
          </div>
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

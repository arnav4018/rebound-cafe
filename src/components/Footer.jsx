export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 bg-rebound-bg/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} Rebound Cafe. Crafted with care.
        </p>
        <p className="text-[11px] text-neutral-500">
          Website concept & design inspired by the atmosphere of the physical cafe.
        </p>
      </div>
    </footer>
  )
}

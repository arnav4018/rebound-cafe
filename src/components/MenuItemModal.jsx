import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useMenuModal } from '../context/MenuModalContext'

export default function MenuItemModal() {
  const { selectedItem, closeItem } = useMenuModal()

  useEffect(() => {
    if (!selectedItem) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeItem()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedItem, closeItem])

  if (!selectedItem) return null

  return createPortal(
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-item-title"
      onClick={closeItem}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-hidden rounded-3xl bg-rebound-bg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-3 px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id="menu-item-title" className="text-lg font-semibold text-rebound-text">
                {selectedItem.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {selectedItem.category}
              </p>
            </div>
            <button
              type="button"
              onClick={closeItem}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-xs text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rebound-accent"
              aria-label="Close menu item details"
            >
              ✕
            </button>
          </div>
          <p className="text-sm leading-relaxed text-neutral-700">{selectedItem.description}</p>
          <p className="text-sm font-semibold text-rebound-text">₹ {selectedItem.price}</p>
        </div>
      </div>
    </div>,
    document.body,
  )
}

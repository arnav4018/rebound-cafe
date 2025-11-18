import { useState } from 'react'
import menuItems from '../data/menu.json'
import { useMenuModal } from '../context/MenuModalContext'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const categories = ['SANDWICH', "BUN'S", 'NACHOS', 'FRIES', 'MAGGI', 'GARLIC BREAD', 'BURGER', 'PASTA', 'PIZZA', 'CHINESE']

function MenuCard({ item, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 text-left shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rebound-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
            <span className="text-xs font-medium text-neutral-700">{item.name}</span>
          </div>
        )}
        {!imageError && (
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className={`h-full w-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-rebound-text">{item.name}</h2>
          <span className="text-xs font-medium text-neutral-700">₹ {item.price}</span>
        </div>
        <p className="text-xs leading-relaxed text-neutral-700 line-clamp-2">
          {item.description}
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
          Tap for details
        </p>
      </div>
    </button>
  )
}

export default function MenuPage() {
  const { openItem } = useMenuModal()

  const [activeCategory, setActiveCategory] = useState(categories[0])

  console.log('Menu Items Loaded:', menuItems)
  console.log('Active category:', activeCategory)

  const filteredItems = menuItems.filter((item) => {
    return item.category.toUpperCase() === activeCategory.toUpperCase()
  })

  return (
    <div className="space-y-10">
      <FadeIn>
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Our menu</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Comfort food, cafe classics, and little indulgences.</h1>
        <p className="max-w-2xl text-sm text-neutral-700">
          Explore everything from toasted sandwiches and buns to bowls of Maggi, pizzas, and more.
          Tap on any item to see a fuller description.
        </p>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="space-y-5">
        <div className="flex overflow-x-auto whitespace-nowrap pb-4 gap-2 scrollbar-hide">
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'border-rebound-accent bg-rebound-accent text-rebound-bg'
                    : 'border-neutral-200 bg-white/80 text-neutral-700 hover:border-neutral-300'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section>
        {filteredItems.length === 0 ? (
          <div className="py-10 text-center text-gray-500">
            <p>No items found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onClick={() => openItem(item)} />
            ))}
          </div>
        )}
      </section>
      </FadeIn>
    </div>
  )
}

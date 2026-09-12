import { useState, useEffect } from 'react'
import { menuCategories } from '../data/menuData'
import ItemDetailModal from './ItemDetailModal'

function MenuCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${item.name} — tap to view details`}
      className="menu-card text-left w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-brand focus-visible:outline-none hover:ring-2 hover:ring-orange-brand/50 transition-all duration-200 overflow-hidden p-0"
    >
      {item.image && (
        <div className="w-full h-40 overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start gap-3">
          <h4 className="font-display font-bold text-blue-dark text-lg leading-tight">{item.name}</h4>
          <span className="font-display font-black text-orange-brand text-xl whitespace-nowrap flex-shrink-0">
            {item.price === 0 ? 'MRKT' : `$${item.price.toFixed(2)}`}
          </span>
        </div>
        {item.description && (
          <p className="font-body text-gray-500 text-sm mt-1.5 leading-relaxed line-clamp-2">{item.description}</p>
        )}
      </div>
    </button>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('appetizers')
  const [selectedItem, setSelectedItem] = useState(null)
  const active = menuCategories.find((c) => c.id === activeTab)

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#slushies') setActiveTab('slushies')
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedItem])

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <span id="slushies" style={{ scrollMarginTop: '80px', display: 'block' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-display font-bold uppercase tracking-[0.3em] text-orange-brand text-sm mb-2">
            City Tavern Greenville
          </p>
          <h2 className="section-title text-blue-dark mb-4">Our Menu</h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-display font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-blue-dark text-white shadow-md'
                  : 'bg-white text-blue-dark border border-blue-light hover:bg-blue-light hover:text-white hover:border-blue-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Note */}
        {active.note && (
          <p className="text-center font-body text-gray-500 text-sm mb-6 italic">{active.note}</p>
        )}

        {/* Wings Callout Banner */}
        {active.callout && (
          <div
            className="rounded-xl p-5 mb-8 text-center text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #0A5990 0%, #3CA9E0 100%)' }}
          >
            <p className="font-display font-black uppercase text-2xl tracking-wide">{active.callout.title}</p>
            <p className="font-display font-bold uppercase tracking-widest text-white/90 text-sm mt-1">{active.callout.detail}</p>
          </div>
        )}

        {/* Sauces */}
        {active.sauces && (
          <div className="bg-orange-brand/10 border border-orange-brand/30 rounded-xl p-5 mb-8">
            <h3 className="font-display font-black uppercase text-blue-dark text-xl mb-3">Sauces & Dry Rubs</h3>
            <div className="flex flex-wrap gap-2">
              {active.sauces.map((s) => (
                <span
                  key={s}
                  className="bg-orange-brand text-white font-display font-bold uppercase text-xs tracking-wide px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.items.map((item) => (
            <MenuCard key={item.name} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}

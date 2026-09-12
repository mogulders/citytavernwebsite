import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ItemDetailModal({ item, onClose }) {
  const modalRef = useRef(null)
  const returnFocusRef = useRef(null)

  useEffect(() => {
    returnFocusRef.current = document.activeElement
    return () => { returnFocusRef.current?.focus() }
  }, [])

  useEffect(() => {
    modalRef.current?.querySelector(FOCUSABLE)?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusables = Array.from(modalRef.current.querySelectorAll(FOCUSABLE))
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const priceDisplay = item.price === 0 ? 'MRKT' : `$${item.price.toFixed(2)}`

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="item-modal-title"
        aria-describedby="item-modal-desc"
        tabIndex={-1}
        className="relative w-full max-w-md max-h-[90dvh] bg-blue-dark border border-white/10 rounded-xl shadow-2xl overflow-hidden outline-none flex flex-col"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${item.name} details`}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center transition-colors border-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-brand focus-visible:outline-none"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex-shrink-0 max-h-[40vh] overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <div
              role="img"
              aria-label={`${item.name} — photo coming soon`}
              className="aspect-video w-full bg-blue-light/10 flex items-center justify-center border-b border-white/10"
            >
              <img src="/logo.jpeg" alt="" aria-hidden="true" className="w-16 h-16 rounded-full opacity-15" />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 p-6 space-y-4">
          <div>
            <h2 id="item-modal-title" className="font-display uppercase text-white text-3xl leading-tight">
              {item.name}
            </h2>
            <p className="font-display text-orange-brand text-xl mt-1">{priceDisplay}</p>
          </div>

          {item.description ? (
            <p id="item-modal-desc" className="font-body text-white/70 text-sm leading-relaxed">
              {item.description}
            </p>
          ) : null}

          <section aria-label="Allergen information">
            <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-2">Contains</p>
            {item.allergens && item.allergens.length > 0 ? (
              <div className="flex flex-wrap gap-1.5" role="list" aria-label="allergens">
                {item.allergens.map((a) => (
                  <span
                    key={a}
                    role="listitem"
                    className="bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs px-2.5 py-0.5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-white/40 text-xs font-body">No known allergens listed</p>
            )}
          </section>
        </div>
      </div>
    </div>,
    document.body
  )
}

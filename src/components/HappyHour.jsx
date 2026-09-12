const deals = [
  {
    icon: '🍗',
    title: 'BOGO Appetizers',
    detail: 'Buy one, get one on all appetizers',
  },
  {
    icon: '🥃',
    title: '$2 Off Spirits',
    detail: 'All spirits discounted during happy hour',
  },
  {
    icon: '🍺',
    title: '$1 Off Beer',
    detail: 'Beer, ciders & seltzers — $1 off each',
  },
  {
    icon: '🍷',
    title: '$5 House Wine',
    detail: 'House wine — any glass, any time',
  },
]

export default function HappyHour() {
  return (
    <section id="happy-hour" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0A5990' }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 0% 0%, #F98921 0%, transparent 50%),
                            radial-gradient(circle at 100% 100%, #3CA9E0 0%, transparent 50%)`,
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-light/10 -translate-y-1/2 translate-x-1/4 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display font-bold uppercase tracking-[0.3em] text-blue-light text-sm mb-2">
            Every Week
          </p>
          <h2 className="section-title text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
            Happy Hour
          </h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />

          {/* Time badge */}
          <div
            className="inline-block rounded-2xl px-8 py-5 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #F98921 0%, #e07a1a 100%)' }}
          >
            <p className="font-display font-black uppercase text-white text-3xl sm:text-4xl tracking-wider leading-none mb-1">
              Mon – Fri
            </p>
            <p className="font-display font-black uppercase text-white/90 text-4xl sm:text-5xl tracking-tight">
              4PM – 7PM
            </p>
          </div>
        </div>

        {/* Deal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <div className="text-5xl mb-3">{deal.icon}</div>
              <h3 className="font-display font-black uppercase text-white text-xl mb-2 tracking-wide">
                {deal.title}
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">{deal.detail}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center font-body text-white/50 text-sm mt-10">
          Happy Hour available dine-in only. See our staff for details.
        </p>
      </div>
    </section>
  )
}

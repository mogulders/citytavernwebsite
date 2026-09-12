export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F98921' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #0A5990 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #3CA9E0 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, #0A5990 0%, transparent 35%)`,
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-4 border-white/10 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border-4 border-white/10 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-32 h-32 rounded-full bg-blue-dark/20 -translate-y-1/2 hidden lg:block" />

      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-dark/30 blur-xl scale-125" />
            <img
              src="/logo.jpeg"
              alt="City Tavern Greenville"
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Wordmark */}
        <h1 className="font-display font-black uppercase text-white mb-2 leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', textShadow: '0 4px 20px rgba(10,89,144,0.4)' }}>
          City Tavern
        </h1>
        <p className="font-display font-bold uppercase text-white/90 tracking-[0.3em] text-xl sm:text-2xl mb-2">
          U.S.A. · Greenville
        </p>

        {/* Tagline */}
        <a href="#slushies" className="inline-block bg-blue-dark text-white font-display font-bold uppercase tracking-widest px-6 py-2 rounded-full text-sm sm:text-base mb-10 shadow-lg hover:bg-blue-light transition-colors cursor-pointer">
          The Legendary Slushy Bar
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#menu" className="btn-secondary w-full sm:w-auto text-center">
            View Full Menu
          </a>
          <a href="#happy-hour" className="btn-primary w-full sm:w-auto text-center bg-blue-dark hover:bg-blue-dark/90">
            Happy Hour Deals
          </a>
        </div>

        {/* Address pill */}
        <div className="mt-12 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 text-white font-body text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          128 N Main St, Greenville, SC · Open Daily 11AM–1AM
        </div>
      </div>

    </section>
  )
}

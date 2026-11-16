export default function Footer() {
  return (
    <footer className="bg-blue-dark py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="City Tavern" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-display font-black uppercase text-white tracking-wider leading-tight">City Tavern</p>
              <p className="font-display font-bold uppercase text-blue-light text-xs tracking-widest">Greenville, SC</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            {['#menu', '#happy-hour', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="font-display font-bold uppercase tracking-widest text-white/60 hover:text-orange-brand transition-colors text-xs"
              >
                {href.replace('#', '').replace('-', ' ')}
              </a>
            ))}
          </div>

          {/* Social */}
          <a
            href="https://www.facebook.com/CityTavernGreenvilleSC/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-orange-brand transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-display font-bold uppercase tracking-wider text-xs">Facebook</span>
          </a>
        </div>

        {/* Sister restaurant co-branding */}
        <div className="border-t border-white/10 mt-8 pt-8 pb-4 flex flex-col items-center gap-3">
          <p className="font-display font-bold uppercase tracking-[0.2em] text-white/30 text-xs">Sister Restaurant</p>
          <a
            href="https://www.societygvl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <img
              src="/society-logo.png"
              alt="Society Sandwich Bar & Social Club"
              className="h-10 w-10 rounded-full object-cover border border-white/20 group-hover:border-orange-brand/60 transition-colors"
            />
            <div className="text-left">
              <p className="font-display font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors text-sm leading-tight">
                Society Sandwich Bar
              </p>
              <p className="font-body text-white/25 text-xs">Greenville, SC · 18 E. Coffee St.</p>
            </div>
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} City Tavern Greenville · 128 N Main St, Greenville, SC 29601 · (864) 263-7439
          </p>
          <p className="font-body text-white/20 text-xs mt-2">
            Website by{' '}
            <a
              href="https://neighboredllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-brand transition-colors"
            >
              Neighbored LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

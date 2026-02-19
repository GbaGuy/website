/* eslint-disable @next/next/no-img-element */

function Header() {
  return (
    <header className="header sticky h-14 top-0 z-100 backdrop-blur-lg border-b flex items-center justify-between py-0 px-10 ">
    <a href="#" className="flex items-center gap-3">
      <img className="h-8 rounded-md" src="https://avatars.githubusercontent.com/u/259040706?s=200&v=4" alt="Flare Logo" />
      <span className="brand-name text-[22px] font-bold ">FLARE</span>
      <span className=" text-[10px] uppercase border rounded-sm py-0.5 px-1.75 brand-tag">OPEN SOURCE</span>
    </a>
    <nav className="flex items-center gap-1.5 ">
      <a href="#features">Features</a>
      <a href="#install">Install</a>
      <a href="#contribute">Contribute</a>
      <a href="https://github.com/Flare-Animate/Flare" target="_blank" className="cta">GitHub ↗</a>
    </nav>
  </header>
  )
}

export default Header
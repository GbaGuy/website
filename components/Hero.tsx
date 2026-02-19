import React from 'react'
import Ruler from './Ruler'
import { IoArrowDownOutline } from 'react-icons/io5'

function Hero() {
  return (
    <div className="hero relative min-h-[86vh] pt-20 pb-15 px-6 flex items-center justify-center text-center  overflow-hidden">
    {/* <div className="hero-bg absolute inset-0 z-0 "></div> */}
    <div className="hero-content relative z-2 max-w-190 ">
      <span className="eyebrow fade-in">The Open-Source Adobe Animate Alternative</span>
      <h1 className="fade-in delay-1">Animate <span className="hl">freely.</span><br/>No <span className="hl2">subscription</span>.</h1>
      <p className="hero-sub fade-in delay-2">
        Flare is a <strong>free, open-source</strong> animation tool built for creators who know Adobe Animate — same workflow, same file formats, zero monthly fee.
      </p>
      <div className="btn-group fade-in delay-3">
        <a href="#install" className="btn btn-primary"><IoArrowDownOutline /> Get Flare</a>
        <a href="https://github.com/Flare-Animate/Flare" target="_blank" className="btn btn-ghost">View on GitHub</a>
        <a href="#contribute" className="btn btn-orange">Contribute</a>
      </div>
    </div>

    {/* <!-- Decorative timeline ruler --> */}
    {/* <div className="hero-ruler absolute h-9.5 flex items-center py-0 px-5 bg-(--panel2) border-t border-t-(--border) overflow-hidden z-1 bottom-0 left-0 right-0" id="ruler"></div> */}
  <Ruler />
  </div>

  )
}

export default Hero
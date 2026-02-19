import React from 'react'

function Features() {
  return (
    <section id="features">
    <div className="container">
      <span className="section-label">Capabilities</span>
      <h2>Everything you know.<br/>Nothing you don&apos;t.</h2>
      <p className="section-desc">Built on OpenToonz and designed to feel exactly like Adobe Animate — so switching takes minutes, not months.</p>
      <div className="features-grid">
        <div className="feat-card">
          <div className="feat-icon">🎯</div>
          <div className="feat-title">Adobe Animate UI</div>
          <p className="feat-desc">Identical workspace layout, panels, and default color theme. If you know Animate, you already know Flare.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon">📁</div>
          <div className="feat-title">.FLA & .SWF Support</div>
          <p className="feat-desc">Full import and export for .FLA and .SWF formats via FFmpeg and external decompilers — your old projects work.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon orange">🔧</div>
          <div className="feat-title">OpenToonz Core</div>
          <p className="feat-desc">All the professional-grade animation tools from OpenToonz: rigging, tweening, vector drawing, and more.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon orange">🆓</div>
          <div className="feat-title">100% Free Forever</div>
          <p className="feat-desc">No subscription. No CC. No licensing fees. Community-developed, Modified BSD licensed, and always open.</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Features

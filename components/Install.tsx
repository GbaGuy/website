import React from 'react'

function Install() {
  return (
    <section>
         <div className="container">
      <span className="section-label">Installation</span>
      <h2>Build from source</h2>
      <p className="section-desc">Flare is in active development. Pre-built binaries are coming — for now, build using the guides below. FFmpeg required for SWF import.</p>
      <div className="install-grid">
        <a href="https://github.com/Flare-Animate/Flare/blob/master/doc/how_to_build_win.md" target="_blank" className="platform-card">
          <div className="platform-icon">🪟</div>
          <div className="platform-name">Windows</div>
          <div className="platform-sub">MSVC / Visual Studio</div>
          <div className="platform-link">View build guide →</div>
        </a>
        <a href="https://github.com/Flare-Animate/Flare/blob/master/doc/how_to_build_macosx.md" target="_blank" className="platform-card">
          <div className="platform-icon">🍎</div>
          <div className="platform-name">macOS</div>
          <div className="platform-sub">Xcode / Homebrew</div>
          <div className="platform-link">View build guide →</div>
        </a>
        <a href="https://github.com/Flare-Animate/Flare/blob/master/doc/how_to_build_linux.md" target="_blank" className="platform-card">
          <div className="platform-icon">🐧</div>
          <div className="platform-name">Linux</div>
          <div className="platform-sub">GCC / Make</div>
          <div className="platform-link">View build guide →</div>
        </a>
        <a href="https://github.com/Flare-Animate/Flare/blob/master/doc/how_to_build_bsd.md" target="_blank" className="platform-card">
          <div className="platform-icon">🐡</div>
          <div className="platform-name">BSD</div>
          <div className="platform-sub">Clang / Ports</div>
          <div className="platform-link">View build guide →</div>
        </a>
      </div>
      
      <div className="code-block">
        <span className="comment"># Clone and build</span><br/>
        <span className="cmd">git clone https://github.com/Flare-Animate/Flare.git</span><br/>
        <span className="cmd">cd Flare</span><br/>
        <span className="comment"># Then follow the platform-specific guide above</span>
      </div>
    </div>

    </section>
  )
}

export default Install

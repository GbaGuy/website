import React from 'react'

function ComparisonTable() {
  return (
    <section>
    <div className="container">
      <span className="section-label">Comparison</span>
      <h2>Flare vs Adobe Animate</h2>
      <p className="section-desc">The features you rely on, without the monthly invoice.</p>
      <div className="compare-wrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Flare</th>
              <th>Adobe Animate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Price</td><td>Free</td><td>~$21/mo (CC)</td></tr>
            <tr><td>.FLA / .SWF support</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
            <tr><td>Familiar Animate UI</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
            <tr><td>Timeline & tweening</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
            <tr><td>Vector drawing tools</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
            <tr><td>Open source / self-hostable</td><td><span className="check">✓</span></td><td><span className="cross">✗</span></td></tr>
            <tr><td>Creative Cloud required</td><td><span className="cross">✗</span></td><td><span className="check">✓</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  )
}

export default ComparisonTable

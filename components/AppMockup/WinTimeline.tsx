export default function WinTimeline() {
  return (
    <div className="win-timeline" style={{ position: 'relative' }}>
      <div className="tl-row">
        <div className="tl-name">Layer 3</div>
        <div className="tl-track">
          <div
            className="tl-seg"
            style={{ width: '30%', background: 'var(--accent)', opacity: 0.6 }}
          ></div>
          <div
            className="tl-seg"
            style={{ width: '20%', background: 'var(--accent)', opacity: 0.3 }}
          ></div>
          <div
            className="tl-seg"
            style={{ width: '25%', background: 'var(--accent)', opacity: 0.6 }}
          ></div>
        </div>
      </div>
      <div className="tl-row">
        <div className="tl-name">Layer 2</div>
        <div className="tl-track">
          <div
            className="tl-seg"
            style={{ width: '60%', background: 'var(--accent2)', opacity: 0.5 }}
          ></div>
        </div>
      </div>
      <div className="tl-row">
        <div className="tl-name">Background</div>
        <div className="tl-track">
          <div
            className="tl-seg"
            style={{ width: '100%', background: '#556', opacity: 0.4 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
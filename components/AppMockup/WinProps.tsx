export default function WinProps() {
  return (
    <div className="win-props">
      <div className="props-head">Properties</div>
      <div className="prop-row">
        <div className="prop-label">W</div>
        <div className="prop-val">550 px</div>
      </div>
      <div className="prop-row">
        <div className="prop-label">H</div>
        <div className="prop-val">400 px</div>
      </div>
      <div className="prop-row">
        <div className="prop-label">FPS</div>
        <div className="prop-val">24</div>
      </div>
      <div className="prop-row">
        <div className="prop-label">Fill</div>
        <div className="prop-val" style={{ gap: '6px' }}>
          <span
            style={{
              width: '12px',
              height: '12px',
              background: '#00c8d7',
              borderRadius: '2px',
              flexShrink: 0,
            }}
          ></span>
          #00C8D7
        </div>
      </div>
    </div>
  );
}
import WinBar from './WinBar';
import WinTools from './WinTools';
import WinLayers from './WinLayers';
import WinCanvas from './WinCanvas';
import WinProps from './WinProps';
import WinTimeline from './WinTimeline';

export default function AppMockup() {
  return (
    <div className="mockup-wrap">
      <div className="app-window">
        <WinBar />
        <div className="win-body">
          <WinTools />
          <WinLayers />
          <WinCanvas />
          <WinProps />
          <WinTimeline />
        </div>
      </div>
    </div>
  );
}
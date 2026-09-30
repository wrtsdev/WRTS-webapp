import {useEffect, useRef, useState} from 'react';

const eventPage = `${import.meta.env.BASE_URL}events/december-dash-2026.html`;

export default function Events() {
  const frame = useRef(null);
  const [height, setHeight] = useState(3200);

  useEffect(() => {
    const resize = event => {
      if (event.source !== frame.current?.contentWindow || event.origin !== window.location.origin) return;
      if (event.data?.type !== 'wrts:december-dash:resize') return;
      const nextHeight = event.data.height;
      if (typeof nextHeight === 'number' && Number.isFinite(nextHeight) && nextHeight > 0) {
        // Include the iframe's one-pixel border on each side.
        setHeight(Math.ceil(nextHeight) + 2);
      }
    };
    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, []);

  return (
    <section id="events" className="events" aria-labelledby="events-title">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">WRTS Events</div>
          <h2 id="events-title">Make your next move a shared experience.</h2>
          <p>Explore December Dash 2026: a holiday 5K you can run or walk from anywhere.</p>
        </div>
        <iframe
          ref={frame}
          className="eventEmbed"
          title="December Dash 2026 — event details, medal artwork, and updates"
          src={eventPage}
          loading="lazy"
          style={{height}}
          onLoad={() => frame.current?.contentWindow?.postMessage(
            {type: 'wrts:december-dash:measure'}, window.location.origin
          )}
        />
        <a className="eventFullPage" href={eventPage} target="_blank" rel="noopener noreferrer">
          Open December Dash in a new tab ↗
        </a>
      </div>
    </section>
  );
}

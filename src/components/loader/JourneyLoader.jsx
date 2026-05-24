import { useEffect, useMemo, useState } from "react";
import { Map, MapArc, MapMarker, MarkerContent, useMap } from "@/components/ui/map";
import { cities } from "@/components/loader/cities";
import { route } from "@/components/loader/routes";

function JourneyAnimator({ onStopChange, onFinish }) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    let mounted = true;
    let i = 0;

    const flyNext = () => {
      if (!mounted || i >= route.length) {
        if (mounted) onFinish?.();
        return;
      }

      const stop = route[i];
      onStopChange(i);

      map.flyTo({
        center:   [stop.lng, stop.lat],
        zoom:     stop.zoom,
        bearing:  (i * 30) % 360,
        pitch:    30,
        duration: 1500,
        essential: true,
      });

      i++;

      map.once("moveend", () => {
        if (!mounted) return;
        setTimeout(flyNext, 250);
      });
    };

    flyNext();
    return () => { mounted = false; };
  }, [map, isLoaded, onFinish, onStopChange]);

  return null;
}

export default function JourneyLoader({ onFinish }) {
  const [activeStopIndex, setActiveStopIndex] = useState(0);

  const arcs = useMemo(() => {
    const out = [];
    for (let i = 0; i < activeStopIndex; i++) {
      const from = route[i];
      const to   = route[i + 1];
      if (!to) break;
      out.push({
        id:    `arc-${i}`,
        from:  [from.lng, from.lat],
        to:    [to.lng,   to.lat],
        color: "#60a5fa",
      });
    }
    return out;
  }, [activeStopIndex]);

  const activeStop   = route[Math.min(activeStopIndex, route.length - 1)];
  const activeMarker = activeStop ? cities[activeStop.name] : null;
  const currentCity  = activeStop?.name ?? "";

  return (
    <div className="relative h-screen w-full">
      <Map
        projection={{ type: "globe" }}
        viewport={{ center: [74.7973, 34.0837], zoom: 4, bearing: 0, pitch: 30 }}
      >
        <JourneyAnimator
          onStopChange={setActiveStopIndex}
          onFinish={onFinish}
        />

        {arcs.length > 0 && (
          <MapArc
            data={arcs}
            curvature={0.35}
            samples={96}
            paint={{
              "line-color":   "#60a5fa",
              "line-width":   2.5,
              "line-opacity": 0.9,
            }}
            hoverPaint={{
              "line-width":   3.5,
              "line-opacity": 1,
            }}
          />
        )}

        {activeMarker && (
          <MapMarker longitude={activeMarker[0]} latitude={activeMarker[1]}>
            <MarkerContent>
              <div className="relative">
                <div className="absolute -inset-2 animate-ping rounded-full bg-blue-400/30" />
                <div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-300/30 shadow" />
              </div>
            </MarkerContent>
          </MapMarker>
        )}
      </Map>

      {/* ── Overlay ────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-10">

        {/* Top — brand */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Travel With
          </span>
          <span className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">
            WHOKASHMIRI
          </span>
        </div>

        {/* Bottom — city + loading bar */}
        <div className="flex w-72 flex-col items-center gap-3">

          {/* City name — key forces re-mount → fade-in on each change */}
          <div key={currentCity} className="animate-fade-in text-center">
            <span className="text-xs uppercase tracking-widest text-white/50">
              Now visiting
            </span>
            <p className="text-lg font-semibold text-white drop-shadow">
              {currentCity}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-blue-400 transition-all duration-700 ease-in-out"
              style={{
                width: `${((activeStopIndex + 1) / route.length) * 100}%`,
              }}
            />
          </div>

          {/* Loading label */}
          <span className="text-xs tracking-widest text-white/40 uppercase">
            Loading Home…
          </span>
        </div>
      </div>
    </div>
  );
}
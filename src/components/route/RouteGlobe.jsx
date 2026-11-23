import { useEffect, useMemo, useState } from "react";
import { Map, MapArc, MapMarker, MarkerContent, useMap } from "@/components/ui/map";
import { route } from "../../constants";

const STYLE_URL = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const WATER = "#18181b"; // matches --globe
const LAND = "#4b4b54";
const START = { center: [60, 23], zoom: 1.7 };

// Zoom at which the globe just fills its disc, whatever size the disc is.
const restingZoom = (map) => Math.log2(map.getContainer().clientWidth / 2 / 66);

// Keep only land and water from the basemap: no labels, roads or borders.
async function loadStyle(signal) {
  const response = await fetch(STYLE_URL, { signal });
  if (!response.ok) throw new Error(`Basemap style returned ${response.status}`);
  const style = await response.json();
  const water = style.layers.find((layer) => layer.id === "water");
  if (!water) throw new Error("Basemap style has no water layer");

  return {
    version: 8,
    sources: { [water.source]: style.sources[water.source] },
    layers: [
      { id: "land", type: "background", paint: { "background-color": LAND } },
      { ...water, paint: { "fill-color": WATER, "fill-antialias": false } },
    ],
  };
}

function Camera({ stop, reduced, onReady, onArrive }) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;
    map.jumpTo({ ...START, zoom: restingZoom(map) });
    onReady();
  }, [map, isLoaded, onReady]);

  useEffect(() => {
    if (!map || !isLoaded || stop < 0) return;

    const city = route[stop];
    const resting = restingZoom(map);
    const camera = city
      ? { center: [city.lng, city.lat], zoom: resting + 1.6 }
      : { ...START, zoom: resting };

    if (reduced) {
      map.jumpTo(camera);
      onArrive(stop);
      return;
    }

    map.flyTo({ ...camera, duration: 1600, curve: 1.2 });
    const arrived = () => onArrive(stop);
    map.once("moveend", arrived);
    return () => map.off("moveend", arrived);
  }, [map, isLoaded, stop, reduced, onArrive]);

  return null;
}

export default function RouteGlobe({ stop, color, reduced, onReady, onArrive }) {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    loadStyle(controller.signal)
      .then(setStyle)
      .catch((error) => {
        // The flat diagram behind the globe stays visible.
        if (error.name !== "AbortError") console.warn("Globe unavailable:", error.message);
      });
    return () => controller.abort();
  }, []);

  const styles = useMemo(() => ({ dark: style, light: style }), [style]);

  const arcs = useMemo(
    () =>
      route.slice(1, Math.max(stop, 0) + 1).map((to, i) => ({
        id: to.name,
        from: [route[i].lng, route[i].lat],
        to: [to.lng, to.lat],
      })),
    [stop]
  );

  const paint = useMemo(
    () => ({ "line-color": color, "line-width": 3, "line-opacity": 1 }),
    [color]
  );

  if (!style) return null;

  return (
    <Map
      theme="dark"
      styles={styles}
      projection={{ type: "globe" }}
      viewport={START}
      interactive={false}
      attributionControl={false}
    >
      <Camera stop={stop} reduced={reduced} onReady={onReady} onArrive={onArrive} />
      <MapArc data={arcs} curvature={0.25} paint={paint} interactive={false} />
      {route.map(({ name, lng, lat }, i) => (
        <MapMarker key={name} longitude={lng} latitude={lat}>
          <MarkerContent>
            <div className="relative cursor-default">
              {i === stop && <div className="ping absolute inset-0 rounded-full bg-ground" />}
              <div
                className={`relative rounded-full ${
                  i === stop
                    ? "h-4 w-4 bg-ground"
                    : i < stop
                      ? "h-2 w-2 bg-ground"
                      : "h-2 w-2 bg-paper"
                }`}
              />
            </div>
          </MarkerContent>
        </MapMarker>
      ))}
    </Map>
  );
}

import { Component, Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play, RotateCcw } from "lucide-react";
import RouteDiagram from "../route/RouteDiagram";
import { profile, route } from "../../constants";
import { useTheme } from "../../context/ThemeContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const RouteGlobe = lazy(() => import("../route/RouteGlobe"));

const HOLD_MS = 500;
const END = route.length; // one past the last stop: the whole route in view

// WebGL or a chunk can fail; the flat diagram is already on screen if so.
class GlobeBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const formatCoords = ({ lat, lng }) => `${lat.toFixed(2)}° N, ${lng.toFixed(2)}° E`;

export default function Hero() {
  const { ground } = useTheme();
  const reduced = useReducedMotion();
  const globeRef = useRef(null);

  const [mountGlobe, setMountGlobe] = useState(false);
  const [ready, setReady] = useState(false);
  const [stop, setStop] = useState(-1);
  const [arrivedAt, setArrivedAt] = useState(null);
  const [playing, setPlaying] = useState(!reduced);
  const [visible, setVisible] = useState(true);

  // The map library is heavy: fetch it only once the page is already readable.
  useEffect(() => {
    if (navigator.connection?.saveData) return;
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setMountGlobe(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setMountGlobe(true), 600);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(globeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) setPlaying(false);
  }, [reduced]);

  const onReady = useCallback(() => setReady(true), []);
  const onArrive = useCallback((index) => setArrivedAt(index), []);

  // Move on to the next stop, but only while the globe is on screen.
  useEffect(() => {
    if (!playing || !ready || !visible) return;
    if (stop >= 0 && arrivedAt !== stop) return;
    if (stop >= END) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStop(stop + 1), stop < 0 ? 0 : HOLD_MS);
    return () => clearTimeout(id);
  }, [playing, ready, visible, stop, arrivedAt]);

  const goTo = (index) => {
    setPlaying(false);
    if (index === stop) return;
    setArrivedAt(null);
    setStop(index);
  };

  const finished = stop >= END;
  const togglePlay = () => {
    if (finished && !playing) {
      setArrivedAt(null);
      setStop(0);
    }
    setPlaying(!playing);
  };

  const PlayIcon = playing ? Pause : finished ? RotateCcw : Play;
  const playLabel = playing ? "Pause" : finished ? "Replay" : "Play";

  return (
    <section
      aria-label="Introduction"
      className="bg-ground text-ink transition-colors duration-300"
    >
      <div className="shell flex flex-col lg:min-h-[calc(100dvh-var(--header-h)-2px)]">
        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-8 lg:py-6">
          <div>
            <p className="max-w-[34ch] text-lg font-medium leading-snug lg:text-xl">
              {profile.roles.join(", ")}. Based in Riyadh.
            </p>

            <h1
              aria-label="Aaqib Bashir Mir"
              className="display mt-6 text-[clamp(3.5rem,17.5vw,9rem)] lg:mt-8 lg:text-[clamp(5rem,min(10.6vw,20dvh),10.25rem)]"
            >
              {/* The slanted Q and B come from the original wordmark. */}
              <Line i={0}>
                Aa<i>q</i>ib
              </Line>
              <Line i={1}>
                <i>B</i>ashir
              </Line>
              <Line i={2}>Mir</Line>
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="button button-solid">
                See my work
                <ArrowDown size={20} aria-hidden="true" />
              </a>
              <a href="#contact" className="button button-line">
                Get in touch
              </a>
            </div>
            <p className="mt-4">{profile.availability}</p>
          </div>

          <div className="mx-auto w-full max-w-[26rem] lg:max-w-[min(100%,64dvh)]">
            <div
              ref={globeRef}
              className="relative aspect-square overflow-hidden rounded-full bg-globe"
              role="img"
              aria-label={`Map of the route from ${route[0].name} to ${route[END - 1].name}`}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${ready ? "opacity-0" : ""}`}
              >
                <RouteDiagram stop={stop} />
              </div>
              {mountGlobe && (
                <GlobeBoundary>
                  <Suspense fallback={null}>
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${ready ? "" : "opacity-0"}`}
                    >
                      <RouteGlobe
                        stop={stop}
                        color={ground.hex}
                        reduced={reduced}
                        onReady={onReady}
                        onArrive={onArrive}
                      />
                    </div>
                  </Suspense>
                </GlobeBoundary>
              )}
            </div>
            <div className="mt-4 flex min-h-11 items-center justify-between gap-4">
              {ready && (
                <p className="text-sm">
                  Map data{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://www.openstreetmap.org/copyright"
                  >
                    © OpenStreetMap
                  </a>
                  ,{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://carto.com/about-carto/"
                  >
                    © CARTO
                  </a>
                </p>
              )}
              {ready && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 px-2 font-semibold"
                >
                  <PlayIcon size={18} aria-hidden="true" />
                  {playLabel}
                  <span className="sr-only"> the route</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <ol
          aria-label="Stops on the route"
          className="-mx-4 grid grid-cols-2 border-t-2 border-ink sm:mx-0 sm:grid-cols-4 lg:grid-cols-8"
        >
          {route.map((city, i) => (
            <li key={city.name}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === stop ? "step" : undefined}
                className="relative flex min-h-16 w-full cursor-pointer flex-col justify-center px-4 py-3 text-left transition-colors duration-150 hover:bg-ink/10 aria-[current=step]:bg-ink aria-[current=step]:text-paper sm:px-3"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 origin-left bg-ink transition-transform duration-500 ease-arrive motion-reduce:transition-none ${
                    i <= stop ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <span className="font-semibold">{city.name}</span>
                <span className="text-sm tabular-nums">{formatCoords(city)}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Line({ i, children }) {
  return (
    <span aria-hidden="true" className="block overflow-hidden pr-[0.1em]">
      <span className="rise block" style={{ "--i": i }}>
        {children}
      </span>
    </span>
  );
}

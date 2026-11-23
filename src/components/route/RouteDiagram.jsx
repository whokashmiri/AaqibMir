import { route } from "../../constants";

// Flat drawing of the route. Shown while the globe loads, and stays if it can't.
const project = ({ lng, lat }) => [50 + (lng - 60) * 1.75, 50 - (lat - 23.5) * 2.1];
const points = route.map(project);
const toPath = (list) => list.map((p) => p.join(",")).join(" ");

export default function RouteDiagram({ stop }) {
  const passed = Math.min(stop, route.length - 1);

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <polyline
        points={toPath(points)}
        fill="none"
        className="stroke-paper/40"
        strokeWidth="0.6"
      />
      <polyline
        points={toPath(points.slice(0, passed + 1))}
        fill="none"
        className="stroke-ground"
        strokeWidth="0.9"
      />
      {points.map(([x, y], i) => (
        <circle
          key={route[i].name}
          cx={x}
          cy={y}
          r={i === stop ? 2 : 1.1}
          className={i <= passed ? "fill-ground" : "fill-paper-soft"}
        />
      ))}
    </svg>
  );
}

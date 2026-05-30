import { useState } from "react";
import JourneyLoader from "./components/loader/JourneyLoader";
import Home from "./components/sections/Hero";
import Hero from "./components/sections/Hero";
import CreativeHero from "./components/sections/CreativeHero";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? (
        <JourneyLoader onFinish={() => setLoading(false)} />
      ) : ( */}
        <Hero />
        <CreativeHero />
      {/* )} */}
    </>
  );
}
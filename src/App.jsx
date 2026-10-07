import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import JourneyLoader from "./components/loader/JourneyLoader";
import Home from "./Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <JourneyLoader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

const MotionContext = createContext({ paused: false, toggle: () => {} });
export const useMotionPreference = () => useContext(MotionContext);

export default function MotionProvider({ children }) {
  const [reduce, setReduce] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [override, setOverride] = useState(null);
  const paused = override ?? reduce;
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "active";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  return (
    <MotionContext.Provider
      value={{ paused, toggle: () => setOverride(!paused) }}
    >
      <MotionConfig reducedMotion={paused ? "always" : "never"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

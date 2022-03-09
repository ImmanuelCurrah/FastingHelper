import { useState } from "react";

export function usePathWay() {
  const [pathway, setPathway] = useState("");
  return { pathway, setPathway };
}

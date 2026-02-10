"use client";

import { useEffect } from "react";
import { useSetMounted } from "../hooks/useMountedStore";

export default function MountElement() {
  const setMounted = useSetMounted();

  useEffect(() => {
    // schedule the update to avoid synchronous state-in-effect lint warnings
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, [setMounted]);

  return null;
}

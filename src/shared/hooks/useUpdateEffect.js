import { useEffect } from "react";
import { useFirstMountState } from "./useFirstMountState";

export const useUpdateEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

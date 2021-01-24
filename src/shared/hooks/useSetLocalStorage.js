import { useCallback } from "react";

export const useSetLocalStorage = (key) => {
  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  const set = useCallback(
    (val) => {
      try {
        const value = JSON.stringify(val);
        localStorage.setItem(key, value);
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    [key]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key]);

  return [set, remove];
};

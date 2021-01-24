import { randomBytes } from "crypto";
import { colors } from "./constants";

export * from "./constants";

export const generateToken = () => randomBytes(8).toString("hex");
export const randomColor = () =>
  colors[Math.floor(Math.random() * (colors.length + 1))];
export const ratingBadgeColor = (rating) => {
  if (!rating) return "red";

  if (rating > 7) return "gold";
  if (rating < 5) return "red";
  if (rating > 5 && rating < 7) return "green";
};

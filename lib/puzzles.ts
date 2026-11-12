import "server-only";
import { createHmac } from "node:crypto";

export type Puzzle = {
  title: string;
  body: string;
  solution: string;
};


export const puzzles: Puzzle[] = [
  { title: "Aufgabe 1", body: "…", solution: "56312667423911" },
  { title: "Aufgabe 2", body: "Text zu Rätsel 2", solution: "42" },
  { title: "Aufgabe 3", body: "Text zu Rätsel 3", solution: "2413" },
  { title: "Aufgabe 4", body: "Text zu Rätsel 4", solution: "17572" },
  { title: "Aufgabe 5", body: "Text zu Rätsel 5", solution: "2112" },
  { title: "Aufgabe 6", body: "Text zu Rätsel 6", solution: "2124" },
  { title: "Aufgabe 7", body: "Text zu Rätsel 7", solution: "2" },
];

/** Ignoriert Groß-/Kleinschreibung und Leerzeichen. */
export function normalize(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "");
}

/** Schlüssel für die URL des nächsten Levels. Ohne PUZZLE_SECRET nicht berechenbar. */
export function tokenFor(level: number, solution: string): string {
  const secret = process.env.PUZZLE_SECRET;
  if (!secret) throw new Error("PUZZLE_SECRET ist nicht gesetzt.");
  return createHmac("sha256", secret)
    .update(`${level}:${normalize(solution)}`)
    .digest("base64url")
    .slice(0, 16);
}
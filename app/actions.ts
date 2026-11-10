"use server";

import { redirect } from "next/navigation";
import { normalize, puzzles, tokenFor } from "@/lib/puzzles";

export type CheckState = { error: string | null };

export async function checkCode(
  level: number,
  _prev: CheckState,
  formData: FormData,
): Promise<CheckState> {
  const puzzle = puzzles[level - 1];
  if (!puzzle) return { error: "Dieses Level gibt es nicht." };

  const code = normalize(String(formData.get("code") ?? ""));
  if (!code || code !== normalize(puzzle.solution)) {
    return { error: "Der Code stimmt nicht. Prüfe die Schreibweise und versuche es erneut." };
  }

  redirect(`/${tokenFor(level, puzzle.solution)}`);
}
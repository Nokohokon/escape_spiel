import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeForm } from "@/components/code-form";
import { puzzles, tokenFor } from "@/lib/puzzles";

export const instant = false;
export const metadata: Metadata = { robots: { index: false, follow: false } };

const START_TOKEN = "start";

export default async function LevelPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let level: number;
  if (token === START_TOKEN) {
    level = 1;
  } else {
    // Welches Level wurde mit diesem Token freigeschaltet (also gerade gelöst)?
    const solvedIndex = puzzles.findIndex(
      (p, i) => tokenFor(i + 1, p.solution) === token,
    );
    if (solvedIndex === -1) notFound();
    level = solvedIndex + 2; // das Level, das jetzt dran ist
  }

  const puzzle = puzzles[level - 1];

  if (!puzzle) {
    return (
      <main className="mx-auto max-w-xl p-6">
        <h1 className="text-2xl font-semibold">Geschafft!</h1>
        <p className="mt-4">Du hast alle {puzzles.length} Rätsel gelöst.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl p-6">
      <p className="text-sm opacity-60">
        Level {level} von {puzzles.length}
      </p>
      <h1 className="mt-1 text-2xl font-semibold">{puzzle.title}</h1>
      <CodeForm level={level} />
    </main>
  );
}
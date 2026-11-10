import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 h-[100px]"
          src="/weißglut_schwarz.svg"
          alt="Next.js logo"
          width={500}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Klicken Sie auf den weißen Button, um die {" "} 
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              Spiel.zip
            </code>{" "}
            Datei mit den Spielinhalten herunterzuladen.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Klicken Sie hier {" "}
            <Link
              href="/start"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              hier
            </Link>{" "}
            für den Start des Escape-Spiels oder {" "}
            <Link
              href="/explanations"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              auf diesen Link
            </Link>{" "}
            um zu einer Erklärungsübersicht zu gelangen.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium sm:flex-row">
          <a
            className="flex h-16 w-full text-center items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[220px]"
            href="/downloads/Herr%20Weissglut%20-%20Escape%20Spiel.zip"
            download="Herr Weissglut - Escape Spiel.zip"
          >

            Spieldateien herunterladen
          </a>
          <a
            className="flex h-16 w-full text-center items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[220px]"
            href="/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum & Datenschutz
          </a>
        </div>
      </main>
    </div>
  );
}

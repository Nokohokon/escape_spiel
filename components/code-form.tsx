"use client";

import { useActionState } from "react";
import { checkCode, type CheckState } from "@/app/actions";

export function CodeForm({ level }: { level: number }) {
  const [state, action, pending] = useActionState<CheckState, FormData>(
    checkCode.bind(null, level),
    { error: null },
  );

  return (
    <form action={action} className="mt-8 flex flex-col gap-3">
      <label htmlFor="code" className="text-sm">
        Lösungscode
      </label>
      <input
        id="code"
        name="code"
        required
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        className="rounded border px-3 py-2"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded border px-3 py-2 disabled:opacity-50"
      >
        {pending ? "Wird geprüft …" : "Code prüfen"}
      </button>
      {state.error && (
        <p role="alert" className="text-sm text-red-600">
          {state.error}
        </p>
      )}
    </form>
  );
}
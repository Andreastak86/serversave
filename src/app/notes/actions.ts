// app/notes/actions.ts
"use server";

import { revalidatePath } from "next/cache";

type Note = { id: string; text: string };

// Super-enkel in-memory store (kun for demo)
const store: Note[] = [];

export async function addNote(formData: FormData) {
    const text = String(formData.get("text") ?? "").trim();

    if (!text) {
        // Server-side validation
        throw new Error("Tekst kan ikke være tom.");
    }

    store.unshift({ id: crypto.randomUUID(), text });

    // Tell Next to re-render the page using fresh data
    revalidatePath("/notes");
}

export async function getNotes(): Promise<Note[]> {
    return store;
}

// app/notes/page.tsx
import { addNote, getNotes } from "./actions";

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <main className='p-6 space-y-6'>
            <h1 className='text-2xl font-semibold'>Notater</h1>

            <form action={addNote} className='flex gap-3'>
                <input
                    name='text'
                    placeholder='Skriv et notat…'
                    className='w-full rounded-xl border px-3 py-2'
                />
                <button className='rounded-xl border px-4 py-2'>
                    Legg til
                </button>
            </form>

            <ul className='space-y-2'>
                {notes.length === 0 ? (
                    <li className='text-gray-600'>
                        Ingen notater enda. Vær den første 🐣
                    </li>
                ) : (
                    notes.map((n) => (
                        <li key={n.id} className='rounded-xl border p-3'>
                            {n.text}
                        </li>
                    ))
                )}
            </ul>
        </main>
    );
}

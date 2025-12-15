"use client";

// app/products/FilterBar.tsx
import { useState } from "react";

export default function FilterBar() {
    const [query, setQuery] = useState("");

    return (
        <div className='flex items-center gap-3'>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Filter (kun UI i demo)'
                className='w-full rounded-xl border px-3 py-2'
            />
            <button
                onClick={() => setQuery("")}
                className='rounded-xl border px-3 py-2'
            >
                Reset
            </button>
        </div>
    );
}

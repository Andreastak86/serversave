// app/products/page.tsx
import ProductList from "./ProductList";

type Product = { id: string; name: string; price: number };

async function getProducts(): Promise<Product[]> {
    // Later: replace with Supabase call. For demo: hardcoded.
    return [
        { id: "1", name: "Kaffe", price: 39 },
        { id: "2", name: "Tastatur", price: 999 },
        { id: "3", name: "Livet", price: 0 },
    ];
}

export default async function ProductsPage() {
    const products = await getProducts(); // runs on server

    return (
        <main className='p-6 space-y-6'>
            <header className='space-y-2'>
                <h1 className='text-2xl font-semibold'>Produkter</h1>
                <p className='text-sm text-gray-600'>
                    Denne siden er en <b>Server Component</b>. Bare det som må
                    være interaktivt blir client.
                </p>
            </header>

            {/* Still server-rendered list, but with a client-side filter UI inside */}
            <ProductList products={products} />
        </main>
    );
}

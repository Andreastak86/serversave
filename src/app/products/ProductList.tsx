// app/products/ProductList.tsx
import FilterBar from "./FilterBar";

type Product = { id: string; name: string; price: number };

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <section className='space-y-4'>
            {/* Client component is embedded inside a server component */}
            <FilterBar />

            <ul className='grid gap-3'>
                {products.map((p) => (
                    <li
                        key={p.id}
                        className='rounded-xl border p-4 flex justify-between'
                    >
                        <span>{p.name}</span>
                        <span className='font-mono'>{p.price} kr</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

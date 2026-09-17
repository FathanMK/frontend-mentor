import Link from "next/link";

export default function HomePage() {
  return (
    <body className="bg-neutral-950 text-neutral-50">
      <header className="max-w-3xl mx-auto px-3 py-4">
        <Link
          href="/"
          className="font-black hover:bg-neutral-50 hover:text-neutral-950"
        >
          /
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-3 py-4">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2>CHALLENGES</h2>
            <div className="h-px bg-neutral-50/20" />
          </div>
          <div>
            <Link href="/challenges/recipe-page" className="underline">
              Recipe Page
            </Link>
          </div>
        </section>
      </main>
    </body>
  );
}

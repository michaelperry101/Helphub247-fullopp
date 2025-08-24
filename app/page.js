import Link from 'next/link';

export default function Home() {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HelpHub247</h1>
          <p className="text-lg opacity-80 mb-6">
            Your 24/7 online helpline powered by <strong>CARYS</strong> —
            the Conversational Assistant for Responsive Yielding Solutions.
          </p>
          <div className="flex gap-3">
            <Link href="/chat" className="btn btn-primary">Open CARYS</Link>
            <Link href="/subscription" className="btn btn-outline">Subscribe £9.99/mo</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="aspect-[16/10] rounded-xl border border-dashed grid place-items-center">
            <span className="opacity-60">Gemini/ChatGPT-style interface</span>
          </div>
        </div>
      </div>
    </section>
  );
}

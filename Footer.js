import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container text-sm flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} HelpHub247</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="opacity-80 hover:opacity-100">Privacy</Link>
          <Link href="/terms" className="opacity-80 hover:opacity-100">Terms</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
        </div>
      </div>
    </footer>
  );
}

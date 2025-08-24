import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

export default function Navbar(){
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container flex items-center justify-between py-3 gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={32} height={32} alt="HelpHub247" priority />
          <span className="font-bold">HelpHub247</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/chat" className="btn btn-outline">Chat</Link>
          <Link href="/subscription" className="btn btn-outline">Subscribe</Link>
          <Link href="/faq" className="btn btn-outline">FAQ</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'HelpHub247 — CARYS AI',
  description: '24/7 online helpline powered by CARYS.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{__html: `
          (function(){try{
            const t = localStorage.getItem('theme');
            if(t==='dark'){document.documentElement.classList.add('dark');}
          }catch(e){}})();
        `}} />
      </body>
    </html>
  );
}

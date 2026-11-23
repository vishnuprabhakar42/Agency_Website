import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Go Unmanual: Lead Management for Real Estate, HRMS & Payroll',
  description:
    'Go Unmanual builds a lead management system that stops real-estate lead leakage, and an HRMS that runs payroll, attendance, compliance and staffing under one roof. Plus AI CRM and bots for insurance brokers.',
};

export const viewport = { themeColor: '#f4f2ed' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
        <SmoothScroll />
      </body>
    </html>
  );
}

import './globals.css';
import '@/lib/generated.css';

export const metadata = {
  title: 'Go Unmanual — AI & workflow automation, deployed across every department',
  description:
    'Go Unmanual designs, ships, and runs AI, workflow, and process automation across HR, Finance, Operations, Sales, Support, and IT — cutting cost and giving teams their time back.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import '@/app/ui/global.css';
import { inter, jacques_francois } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jacques_francois.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freshriver.ai | AI Economics Newsletter - June 2026',
  description: 'Precise Insights for Mortgage Intelligence: AI Regulatory, Market & Economics Newsletter',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%2300C9A7" width="100" height="100"/><text x="50" y="50" font-size="60" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">F</text></svg>',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

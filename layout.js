import './globals.css';

export const metadata = {
  title: 'NovaSkin - Pocket-Sized Wellness Patches',
  description: 'Transform your daily wellness routine with our innovative skin-administered patches. Convenient, effective, and perfect for your busy lifestyle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
} 
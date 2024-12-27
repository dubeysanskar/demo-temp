import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { CustomCursor } from '@/components/custom-cursor';

export const metadata = {
  title: 'Hack on Mount - Hackathon',
  description: 'Join the most innovative hackathon on the mountain',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
import './globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'Trinav Banerjee',
  description: 'Singing videos and blog by Trinav Banerjee',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  );
}

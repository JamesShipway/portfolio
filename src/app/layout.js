import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <main>
          {children}
        </main>
        <footer>
          <p>© 2025 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}

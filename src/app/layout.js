import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>© 2025 My Portfolio</p>
          <a href="mailto:17jtshipway@gmail.com">Email</a>
          <a href="https://github.com/JamesShipway">GitHub Account</a>
          <a href="https://www.linkedin.com/in/james-shipway-61879a1a2/">LinkedIn Account</a>
        </footer>
      </body>
    </html>
  );
}

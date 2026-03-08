import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <nav>
          <div className='navLinks'>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          </div>
          <div className='navResume'>
            <a href="/resume">Resume</a>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <a href="mailto:17jtshipway@gmail.com"><img src="/emailLogo.svg" alt="Email Logo" /></a>
          <a href="https://github.com/JamesShipway"><img src="/GithubLogo.svg" alt="GitHub Logo" /></a>
          <a href="https://www.linkedin.com/in/james-shipway-61879a1a2/"><img src="/linkedinLogo.svg" alt="LinkedIn Logo" /></a>
        </footer>
      </body>
    </html>
  );
}

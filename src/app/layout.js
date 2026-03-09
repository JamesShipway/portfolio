import Link from 'next/link';
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
          <Link href="mailto:17jtshipway@gmail.com"><Image src="/emailLogo.svg" alt="Email Logo" /></Link>
          <Link href="https://github.com/JamesShipway"><Image src="/GithubLogo.svg" alt="GitHub Logo" /></Link>
          <Link href="https://www.linkedin.com/in/james-shipway-61879a1a2/"><Image src="/linkedinLogo.svg" alt="LinkedIn Logo" /></Link>
        </footer>
      </body>
    </html>
  );
}
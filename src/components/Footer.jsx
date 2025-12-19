import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Your Name. Built with React + Vite.</p>
        <div className="footer-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="separator">|</span>
          <a href="https://p5js.org" target="_blank" rel="noopener noreferrer">
            P5.js
          </a>
          <span className="separator">|</span>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

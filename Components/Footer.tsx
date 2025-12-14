"use client";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footerContent">
        <span className="footerName">Justify</span>

        <p className="footerText">
          R&B com identidade e sentimento.
        </p>

        <div className="footerSocials">
          <a
            href="https://instagram.com/justify"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
          >
            YouTube
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
          >
            Spotify
          </a>
        </div>

        <span className="footerCopy">
          © {new Date().getFullYear()} Justify
        </span>
      </div>
    </footer>
  );
}

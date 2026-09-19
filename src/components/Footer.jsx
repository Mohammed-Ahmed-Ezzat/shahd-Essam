import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__copy">
            © {currentYear} <span className="footer__brand-highlight">shahd.ic</span> · All rights reserved.
          </p>
          <p className="footer__dev">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://wa.me/201125296350"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__dev-link"
              title="Chat with Mohamed Ahmed Ezzat on WhatsApp"
            >
              <span>Mohamed Ahmed Ezzat</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

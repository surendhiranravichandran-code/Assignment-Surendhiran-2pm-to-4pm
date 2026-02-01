function Footer({ company = "My App" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} {company}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

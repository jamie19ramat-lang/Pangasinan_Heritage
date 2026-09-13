import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-text">
            <span>Pangasinan Heritage</span>
            <span className="brand-subtitle">DIGITAL SHOWCASE</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <NavigationItem href="#heritage">Heritage Sites</NavigationItem>
          <NavigationItem href="#about">About</NavigationItem>
          <NavigationItem href="#explore" className="nav-cta">Explore</NavigationItem>
        </nav>
      </div>
    </header>
  );
}
import Button from "../atoms/Button";
import { Eyebrow } from "../atoms/Typography";
import SearchForm from "../molecules/SearchForm";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div>
          <Eyebrow>Discover Pangasinan</Eyebrow>
          <h1>Stories, places, and <em>heritage</em> worth remembering.</h1>
          <p className="hero-copy">
            Explore iconic destinations across Pangasinan through a fast,
            accessible, mobile-first digital showcase designed for everyone.
          </p>
          <div className="hero-actions">
            <Button href="#heritage">View Heritage Sites</Button>
            <Button href="#about" variant="secondary">Learn More</Button>
          </div>
          <SearchForm />
        </div>

        <div className="hero-photo" role="img" aria-label="Scenic coastal destination">
          <div className="hero-badge">
            <strong>Explore the beauty of Pangasinan</strong>
            <span>Culture • Nature • History</span>
          </div>
        </div>
      </div>
    </section>
  );
}
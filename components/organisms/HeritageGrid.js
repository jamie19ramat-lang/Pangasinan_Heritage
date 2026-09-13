import HeritageCard from "../molecules/HeritageCard";
import { SectionTitle } from "../atoms/Typography";

const sites = [
  {
    title: "Hundred Islands",
    location: "Alaminos",
    description: "A protected coastal landscape known for its cluster of scenic islands and clear waters.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "Bolinao Lighthouse",
    location: "Bolinao",
    description: "A historic coastal landmark overlooking the western shoreline of Pangasinan.",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "Balungao Hot Spring",
    location: "Balungao",
    description: "A natural destination combining relaxing hot springs with the landscape of Balungao.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=72"
  }
];

export default function HeritageGrid() {
  return (
    <section className="section" id="heritage">
      <div className="container" id="explore">
        <SectionTitle
          eyebrow="Featured destinations"
          title="Iconic Pangasinan heritage"
          description="A responsive collection of places that highlights cultural awareness and tourism while keeping the experience lightweight for mobile users."
        />
        <div className="heritage-grid">
          {sites.map((site) => <HeritageCard key={site.title} {...site} />)}
        </div>
      </div>
    </section>
  );
}
import HeritageImage from "../atoms/Image";
import Icon from "../atoms/Icon";

export default function HeritageCard({ title, location, description, image }) {
  return (
    <article className="card">
      <HeritageImage className="card-image" src={image} alt={`${title} in Pangasinan`} />
      <div className="card-content">
        <span className="card-tag"><Icon name="location" /> {location}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="card-link" href="#explore">
          Explore destination <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}
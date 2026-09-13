export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
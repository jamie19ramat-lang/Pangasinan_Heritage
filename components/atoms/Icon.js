export default function Icon({ name, label }) {
  const icons = {
    search: "⌕",
    arrow: "→",
    location: "⌖",
    leaf: "♧"
  };
  return <span aria-label={label} role="img">{icons[name] || "•"}</span>;
}
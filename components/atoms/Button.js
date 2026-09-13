export default function Button({ children, href = "#", variant = "primary", type = "button" }) {
  if (href) {
    return <a className={`button button-${variant}`} href={href}>{children}</a>;
  }
  return <button type={type} className={`button button-${variant}`}>{children}</button>;
}
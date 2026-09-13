export default function NavigationItem({ href, children, className = "" }) {
  return <a className={className} href={href}>{children}</a>;
}
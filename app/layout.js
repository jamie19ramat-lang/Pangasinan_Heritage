import "./globals.css";

export const metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "Discover iconic Pangasinan heritage destinations including Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring.",
  keywords: ["Pangasinan", "heritage", "tourism", "Hundred Islands", "Bolinao Lighthouse", "Balungao Hot Spring"],
  authors: [{ name: "Jamie S. Ramat" }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
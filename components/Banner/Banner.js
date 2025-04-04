import Link from "next/link";

export default function Banner() {
  // Get current year and convert to string
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-3 text-center bg-apricot lg:px-16 lg:py-3 sm:text-left sm:flex-row">
      <p className="text-base text-white-linen">
        Gute Nachrichten! Für{" "}
        <span className="font-semibold">{currentYear}</span> sind noch{" "}
        <span className="font-semibold">freie Plätze</span> verfügbar. Ich freue
        mich darauf, eure Geschichten zu hören!
      </p>
      <Link
        href="mailto:ilona@trau-momente.de"
        className="px-6 py-2 tracking-widest uppercase rounded bg-terracotta text-white-linen"
      >
        Termin anfragen
      </Link>
    </div>
  );
}

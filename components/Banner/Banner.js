import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-3 text-center bg-terracotta lg:px-16 lg:py-3 sm:text-left sm:flex-row">
      <p className="text-base text-white-linen">
        Gute Nachrichten! Für <span className="font-semibold">2024</span> sind
        noch <span className="font-semibold">freie Plätze</span> verfügbar. Ich
        freue mich darauf, eure Geschichten zu hören!
      </p>
      <Link
        href="mailto:ilona@trau-momente.de"
        className="px-6 py-2 tracking-widest uppercase rounded bg-apricot text-white-linen"
      >
        Termin anfragen
      </Link>
    </div>
  );
}

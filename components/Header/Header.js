import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full h-16 gap-16 mb-16 bg-gray-700">
      <Link className="font-medium hover:opacity-50" href="/">
        Startseite
      </Link>
      <Link className="font-medium hover:opacity-50" href="/freie-trauung">
        Freie Trauung
      </Link>
      <Link className="font-medium hover:opacity-50" href="#">
        Termin anfragen
      </Link>
    </div>
  );
}

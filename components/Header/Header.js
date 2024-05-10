import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full h-16 gap-16 lg:mb-16">
      <Link className="font-medium text-center hover:opacity-50" href="/">
        Startseite
      </Link>
      <Link
        className="font-medium text-center hover:opacity-50"
        href="/freie-trauung"
      >
        Freie Trauung
      </Link>
      {/* <Link className="font-medium text-center hover:opacity-50 " href="#">
        Termin anfragen
      </Link> */}
    </div>
  );
}

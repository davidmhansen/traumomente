import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>
          Trau Momente - Freie Trau- und Hochzeitsreden aus Baden-Württemberg
        </title>
        <meta
          name="description"
          content="Freie Trau- und Hochzeitsreden aus Baden-Württemberg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="relative mb-16 overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: 50 + "%",
            backgroundImage: "url('/mr-and-mrs.jpg')",
            height: 700 + "px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex items-center justify-center h-full">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-4 font-serif text-5xl tracking-tight md:text-5xl xl:text-7xl">
                  Was ist eine freie Trauung?
                </h1>
                <p>
                  Frei, herzlich, emotional - und immer ganz wie ihr es möchtet
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="container flex flex-col px-4 py-4 mx-auto mb-16 lg:px-16 lg:py-16">
          <h2 className="mb-12 font-serif text-3xl tracking-tight text-tuatara lg:text-5xl lg:leading-tight">
            Eine Zeremonie jenseits von Standesamt und Kirche
          </h2>
          <p className="mb-4">
            Die meisten Hochzeiten folgen einem zweistufigen Prozess. Zuerst
            gibt es den bürokratischen Teil, die standesamtliche Trauung, die
            oft nur im kleinen Kreis stattfindet. Traditionell folgt dann die
            Zeremonie einer kirchlichen Trauung, gefolgt von einer größeren
            Feier.
          </p>
          <p>
            Immer mehr junge Paare von heute wünschen sich jedoch eine
            nicht-konfessionelle Trauung, möchten aber dennoch nicht auf die
            romantische Zeremonie verzichten. Für diejenigen, die eine
            wundervolle Trauung erleben möchten, gibt es die Option der freien
            Trauung. Hierbei spielen Glaube, Religion und Geschlecht keine
            Rolle. Die freie Trauung ermöglicht es euch als Paar, die Zeremonie
            nach euren Vorstellungen zu gestalten. Ob am Strand barfuß, in einem
            historischen Schloss oder auf einer bunten Blumenwiese, ob ihr euch
            allein im Wald oder mit all euren Liebsten auf einer romantischen
            Dachterrasse trauen lassen möchtet – alles ist möglich! Ganz egal,
            ob ihr euch für eine verrückte und unkonventionelle Feier
            entscheidet oder für eine klassische, die Entscheidung liegt ganz
            bei euch.
          </p>
        </section>
        <section className="container flex flex-col items-center justify-center px-8 py-8 mx-auto mb-16 rounded-lg lg:justify-between lg:items-start lg:px-16 lg:py-16 bg-white-linen lg:flex-row">
          <div className="flex items-center justify-center w-full lg:justify-start lg:w-4/12">
            <h2 className="mb-6 font-serif text-3xl tracking-tight text-tuatara lg:text-5xl lg:leading-tight">
              Wie läuft die freie Trauung ab?
            </h2>
          </div>
          <div className="w-full text-tuatara lg:w-1/2">
            <div className="flex flex-col gap-8 mb-8">
              <div>
                <h4 className="mb-2 text-lg font-semibold">
                  Das erste Treffen
                </h4>
                <p>
                  Unser erstes Treffen dient dazu, uns gegenseitig
                  kennenzulernen und eine vertrauensvolle Verbindung aufzubauen.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">Das Traugespräch</h4>
                <p>
                  Dieses Gespräch ermöglicht es mir, eure Geschichte und
                  Einzigartigkeit zu verstehen, um eine maßgeschneiderte
                  Traurede nur für euch zu gestalten, die eure gemeinsame Reise
                  authentisch widerspiegelt.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">Finale Absprache</h4>
                <p className="mb-4">
                  Hier wird im Detail besprochen wann, was genau, dran sein
                  soll. Das kann beispielsweise beinhalten, wann ein Lied
                  gespielt wird, wann ein Hochzeitsritual stattfindet oder wann
                  eventuell ein Gast etwas sagen möchte.
                </p>
                <p>
                  Wenn die Zeremonie so weit steht, können wir erst mal einen
                  Haken dran machen und uns gemeinsam auf „Euren Tag“ freuen.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">Die Trauung</h4>
                <p>
                  Nach all dem Planen und jeglicher Vorbereitung ist es endlich
                  so weit, Eure Hochzeit steht kurz bevor! Ich werde ca. 1
                  Stunde vor Beginn der Trauung in der Location Eurer Wahl sein,
                  um alles in Ruhe vorzubereiten. Nun genießt den Tag mit all
                  Euren Liebsten, Eurer ganz persönlichen Trauzeremonie und dem
                  Partner für das Leben an der Seite!
                </p>
              </div>
            </div>
            {/* <div className="flex justify-center lg:justify-start">
              <Link
                className="px-6 py-2 tracking-widest uppercase rounded bg-tuatara text-white-linen"
                href="mailto:ilona@trau-momente.de"
              >
                Termin anfragen
              </Link>
            </div> */}
          </div>
        </section>
        <section className="mb-16">
          <div
            className="container relative mx-auto"
            style={{ height: 750 + "px" }}
          >
            <Image
              src="/ilona-lehmann-freie-traureden.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
              fill
              objectFit="cover"
              className="mb-8 rounded-lg shadow-2xl lg:mb-0"
            ></Image>
          </div>
        </section>
        <section className="container flex flex-col items-center justify-center px-8 py-8 mx-auto mb-16 rounded-lg lg:justify-between lg:items-start lg:px-16 lg:py-16 bg-white-linen lg:flex-row">
          <div className="flex items-center justify-center w-full lg:justify-start lg:w-4/12">
            <h2 className="mb-6 font-serif text-3xl tracking-tight text-tuatara lg:text-5xl lg:leading-tight lg:max-w-96">
              Meine Leistungen
            </h2>
          </div>
          <div className="w-full text-tuatara lg:w-1/2">
            <div className="flex flex-col gap-8 mb-16">
              <div>
                <h4 className="mb-2 text-lg font-semibold">
                  Das erste Kennenlernen
                </h4>
                <ul className="list-disc list-inside">
                  <li>Kostenloses und unverbindliches erstes Treffen</li>
                  <li>
                    Ich bin für Euch jederzeit verfügbar über Telefon, Whatsapp
                    und Mail und rufe so schnell wie möglich zurück
                  </li>
                  <li>
                    Kontaktaufnahme falls gewünscht zu vertrauten Personen wie
                    z.B. Trauzeugen, Freunden, Familienmitgliedern etc.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">
                  Die Hochzeitsrede
                </h4>
                <ul className="list-disc list-inside">
                  <li>Schreiben eurer ganz individuellen Traurede</li>
                  <li>Eure ganz persönliche Rede beträgt circa 12-15 Seiten</li>
                  <li>Gestaltung des Zeremonieablaufes</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">Finale Absprache</h4>
                <ul className="list-disc list-inside">
                  <li>Gemeinsames erstellen des finalen Ablaufplanes</li>
                  <li>
                    Detaillierte Absprache und Koordination mit Musikern,
                    Dienstleistern, Trauzeugen und natürlich den Hochzeitsgästen
                  </li>
                  <li>Gestaltung des Zeremonieablaufes</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">Die Trauung</h4>
                <ul className="list-disc list-inside">
                  <li>Eine Stunde vor Traubeginn bin ich vor Ort</li>
                  <li>Ich kümmere mich bei Bedarf um die Gäste</li>
                  <li>
                    Durchführung Eurer ganz individuellen Hochzeitszeremonie
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link
                className="px-6 py-2 tracking-widest uppercase rounded bg-tuatara text-white-linen"
                href="mailto:ilona@trau-momente.de"
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

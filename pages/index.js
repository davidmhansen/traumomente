import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// * components
import TestimonialSlider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Trau Momente - Freie Trau- und Hochzeitsreden aus Baden-Württemberg
        </title>
        <meta
          name="description"
          content="Traumomente mit Ilona Lehmann: Individuelle Traureden in Reute und Umgebung. Eure Hochzeit, Eure Geschichte - emotional und authentisch erzählt."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="relative flex flex-col items-center h-full gap-16 px-2 mb-32 lg:flex-row lg:px-0">
          <div className="lg:w-6/12 w-max">
            <Image
              src="/index.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="rounded-lg shadow-2xl lg:rounded-r-lg"
            ></Image>
          </div>
          <div className="text-center lg:w-5/12 w-12/12 lg:text-left">
            <h1 className="mb-2 text-terracotta">
              Freie Trau- und Hochzeitsreden aus Baden-Württemberg
            </h1>
            <span className="block mb-8 font-serif text-4xl tracking-tight md:text-6xl md:leading-tight lg:w-9/12 w-12/12">
              Eine Traurede, genau so individuell und bunt wie ihr.
            </span>
            <div className="lg:w-10/12 w-12/12">
              <p className="mb-4 text-xl font-medium leading-relaxed">
                Ihr habt den Partner fürs Leben gefunden und plant eine freie
                Trauung?
              </p>
              <p className="text-xl leading-relaxed">
                Dann begleite ich euch gerne auf eurer gemeinsamen Reise und
                sorge dafür, dass eure Trauung unvergesslich wird.
              </p>
            </div>
          </div>
        </section>
        <section className="container flex flex-col items-center justify-between gap-16 mx-auto mb-16 lg:px-16 lg:py-16 lg:flex-row">
          <div className="w-full lg:w-4/12">
            <h2 className="mb-16 font-serif text-3xl tracking-tight text-center lg:text-left lg:text-5xl lg:leading-tight">
              Mein Versprechen an euch
            </h2>
            <div className="flex flex-col gap-8">
              <div className="text-center lg:text-left">
                <h3 className="mb-3 font-bold">
                  Eine Traurednerin, die euch begleitet
                </h3>
                <p className="leading-relaxed">
                  Unser erstes Treffen dient dazu, uns gegenseitig
                  kennenzulernen und eine vertrauensvolle Verbindung aufzubauen.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="mb-3 font-bold">
                  Eine Traurede, die euere Geschichte erzählt
                </h3>
                <p className="leading-relaxed">
                  Denn eure Geschichte ist ein kostbarer Schatz, den ich
                  einfangen und in einer Traurede zum Leben erwecken möchte.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="mb-3 font-bold">
                  Eine Zeremonie, so bunt und frei wie ihr
                </h3>
                <p className="leading-relaxed">
                  Ob traditionell oder modern, formell oder leger - eure
                  Hochzeit soll genau das sein, was ihr euch wünscht.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 lg:w-1/2">
            <div className="w-full">
              <div className="">
                <Image
                  src="/brautpaar-trauung.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-lg shadow-2xl"
                ></Image>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <Image
                  src="/ilona-buch.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-lg shadow-2xl"
                ></Image>
              </div>
              <div className="w-1/2">
                <Image
                  src="/brautpaar-mit-strauss.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-lg shadow-2xl"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex flex-col items-start justify-between px-8 py-8 mx-auto mb-16 rounded-lg lg:px-16 lg:py-16 bg-tallow lg:flex-row">
          <div className="w-full lg:w-4/12">
            <h2 className="mb-16 font-serif text-3xl tracking-tight text-white lg:text-5xl lg:leading-tight lg:max-w-96">
              Ein bisschen was über mich
            </h2>
            <div>
              <Image
                src="/ilona-fakten.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="mb-8 rounded-lg shadow-2xl lg:mb-0"
              ></Image>
            </div>
          </div>
          <div className="w-full text-white lg:w-1/2">
            <p className="mb-4 font-medium">
              Hallo! Wie schön, dass ihr da seid!
            </p>
            <p className="mb-4 leading-relaxed">
              Mein Name ist Ilona Lehmann und ich bin leidenschaftliche Trau-
              und Hochzeitsrednerin. Mein Herzenswunsch ist es, für euch eine
              bedeutungsvolle, leidenschaftliche und persönliche Zeremonie zu
              gestalten, um eure einzigartige Liebesgeschichte mit euch und
              euren Gästen lebendig werden zu lassen.
            </p>
            <p className="mb-4 leading-relaxed">
              Meine Ausbildung zur freien Trau- und Hochzeitsrednerin habe ich
              bei Martin Redet gemacht und während dieser Zeit meine Stärken
              kennengelernt. Ich bin kommunikativ, kreativ und kann gut mit
              Worten umgehen.
            </p>
            <p className="mb-16 leading-relaxed">
              Ich wohne in der Nähe von Freiburg, aber das soll mich nicht daran
              hindern „Liebeskilometer“ auf mich zu nehmen. Getraut habe ich
              bisher in meinem Beruf als Standesbeamtin, aber meine Leidenschaft
              für zugeschnittene Hochzeitsreden, die mit persönlichem Zauber des
              Ehepaares ausgefüllt sind, sind hoffentlich auch für Euch als
              zukünftiges Brautpaar ein guter Grund, sich bei einem persönlichen
              Gespräch kennenzulernen.
            </p>
            <p>Ich freue mich darauf, eure Geschichten zu hören!</p>
          </div>
        </section>
        <section className="container flex flex-col items-center justify-center px-4 py-4 mx-auto mb-16 lg:px-16 lg:py-16">
          <h2 className="mb-2 text-terracotta">Euer Moment voller Zauber</h2>
          <span className="block mb-6 font-serif text-3xl tracking-tight text-center lg:text-5xl lg:leading-tight">
            Ein ganz persönlicher Trau Moment
          </span>
          <p className="w-full mb-12 leading-relaxed text-center lg:w-3/4">
            Der große Tag - er soll einzigartig, unvergesslich und voller
            Emotionen sein. Er soll eure ganz persönliche Geschichte erzählen,
            wie aus zwei Personen eine unzertrennliche Einheit wird.
          </p>
          <p className="w-full mb-4 leading-relaxed text-center lg:w-3/4">
            Ganz egal wo, ob barfuß auf einer Wiese, einem zauberhaften alten
            Schloss oder im luftigen Kleid am Strand. Ganz egal mit wem, ob nur
            ihr als Paar oder all euren Liebsten. Ganz egal an wen ihr glaubt,
            wen ihr liebt oder ob ihr euch das erste Mal das Ja-Wort gebt, es
            spielt keine Rolle denn jeder verdient seine ganz persönlichen Trau
            Momente! Ich stehe euch dabei, als eure persönliche
            Hochzeitsrednerin, stets verlässlich zur Seite. Durch die
            Erzählungen eurer Liebesgeschichte, entsteht eine ganz einzigartige
            Hochzeitsrede, die alle Facetten eurer Liebe wiederspiegelt.
          </p>
          <p className="w-full mb-12 leading-relaxed text-center lg:w-3/4">
            Ich freue mich jetzt schon riesig euch zu zuhören und auf eurer
            aufregenden und emotionalen Reise zu begleiten.
          </p>
          <Link
            className="px-6 py-2 tracking-widest uppercase rounded bg-tuatara text-white-linen"
            href="mailto:ilona@trau-momente.de"
          >
            Termin anfragen
          </Link>
        </section>
        <TestimonialSlider></TestimonialSlider>
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
                <h4 className="mb-2 text-lg font-semibold">
                  Der letzte Schliff vor dem großen Tag
                </h4>
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

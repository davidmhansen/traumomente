import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// * components
import Slider from "@/components/Slider/Slider";

export default function Home() {
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
        <section className="relative flex flex-row items-center h-full gap-16 mb-32 mr-16">
          <div className="w-9/12">
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
              className="rounded-r-lg shadow-2xl"
            ></Image>
          </div>
          <div className="w-6/12">
            <h1 className="mb-2">
              Freie Trau- und Hochzeitsreden aus Baden-Württemberg
            </h1>
            <span className="block mb-8 font-serif text-2xl tracking-tight md:text-6xl md:leading-tight">
              Eine Traurede, so individuell wie ihr.
            </span>
            <div className="w-10/12">
              <p className="mb-4 font-medium leading-relaxed">
                Ihr habt den Partner fürs Leben gefunden und plant eine freie
                Trauung?
              </p>
              <p className="leading-relaxed">
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
                  Unser erstes Treffen dient dazu, uns gegenseitig
                  kennenzulernen und eine vertrauensvolle Verbindung aufzubauen.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="mb-3 font-bold">
                  Eine Zeremonie, so bunt und frei wie ihr
                </h3>
                <p className="leading-relaxed">
                  Unser erstes Treffen dient dazu, uns gegenseitig
                  kennenzulernen und eine vertrauensvolle Verbindung aufzubauen.
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
            <p className="mb-4 leading-relaxed">
              Ich wohne in der Nähe von Freiburg, und es ist für mich auch kein
              Hindernis, „Liebeskilometer“ auf mich zu nehmen. Getraut habe ich
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
          <h2 className="mb-2">Euer Moment voller Zauber</h2>
          <span className="block mb-6 font-serif text-3xl tracking-tight text-center lg:text-5xl lg:leading-tight">
            Ein ganz persönlicher Trau Moment
          </span>
          <p className="w-full mb-12 leading-relaxed text-center lg:w-3/4">
            Der große Tag - er soll ganz und gar einzigartig und voller
            Emotionen sein. Er soll eure ganz persönliche Geschichte erzählen,
            wie aus zwei Personen eine Einheit wird.
          </p>
          <p className="w-full mb-4 leading-relaxed text-center lg:w-3/4">
            Ganz egal wo, ob barfuß auf einer Blumenwiese, einem alten Schloss
            oder im luftigen Kleid am Strand. Und auch ganz egal mit wem, ob nur
            ihr als Paar oder all euren Liebsten. Egal welche Religion, wen ihr
            liebt oder ob ihr euch das erste Mal das Ja-Wort gebt, es spielt
            keine Rolle denn jeder verdient seine ganz persönliche
            Traumhochzeit! Ich, als eure persönliche Hochzeitsrednerin, stehe
            euch dabei verlässlich zur Seite. Durch die Erzählungen eurer
            Liebesgeschichte, entsteht eine ganz einzigartige Hochzeitsrede, die
            alle Facetten eurer Liebe wiederspiegelt.
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
        <Slider
          name="Nicola und Florian Müller"
          quote="“Ilona hat unsere standesamtliche Trauung zu etwas ganz besonderem gemacht und uns mit ihrer wunderschönen, emotionalen und persönlichen Traurede sehr berührt. Sie hat sich im Vorfeld sowie an dem Tag unserer Trauung sehr liebevoll um uns gekümmert und all unsere Wünsche bedingungslos ermöglicht. Ihre Worte haben unsere Beziehung und uns als Menschen perfekt widergespiegelt und alle Gäste wurden von ihrer Rede ganz herzlich abgeholt. Wir können Ilona von Herzen an jedes Paar, welches diesen wunderschönen Tag noch vor sich hat, weiterempfehlen!"
          imageURL="/nicola-und-florian-mueller.jpeg"
        ></Slider>
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
                  Das erste Kennenlernen
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

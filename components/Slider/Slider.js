import React from "react";

import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function TestimonialSlider() {
  var settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container flex flex-col items-start w-full gap-16 px-8 py-8 mx-auto mb-16 rounded-lg lg:flex-row lg:px-16 lg:py-16 bg-white-linen">
      <div className="flex flex-col justify-between w-full h-full lg:w-1/1">
        <h2 className="mb-6 font-serif text-3xl tracking-tight lg:text-5xl lg:leading-tight">
          Das sagen die Paare
        </h2>
        <Slider {...settings}>
          <React.Fragment>
            <div className="flex flex-col items-center gap-10 lg:flex-row">
              <div className="lg:w-1/2 w-1/1">
                <span className="block mb-6 font-medium">
                  Nicola und Florian Müller
                </span>
                <p className="leading-relaxed">
                  &quot;Ilona hat unsere Trauung zu etwas ganz besonderem
                  gemacht und uns mit ihrer wunderschönen, emotionalen und
                  persönlichen Traurede sehr berührt. Sie hat sich im Vorfeld
                  sowie an dem Tag unserer Trauung sehr liebevoll um uns
                  gekümmert und all unsere Wünsche bedingungslos ermöglicht.
                  Ihre Worte haben unsere Beziehung und uns als Menschen perfekt
                  widergespiegelt und alle Gäste wurden von ihrer Rede ganz
                  herzlich abgeholt. Wir können Ilona von Herzen an jedes Paar,
                  welches diesen wunderschönen Tag noch vor sich hat,
                  weiterempfehlen!&quot;
                </p>
              </div>
              <div className="lg:w-1/2 w-1/1">
                <Image
                  src={"/nicola-und-florian-mueller.jpeg"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="w-1/2 rounded-lg"
                ></Image>
              </div>
            </div>
          </React.Fragment>
          <React.Fragment>
            <div className="flex flex-col items-center gap-10 lg:flex-row">
              <div className="lg:w-1/2 w-1/1">
                <span className="block mb-6 font-medium">Matze und Anki</span>
                <p className="leading-relaxed">
                  &quot;Rückblickend auf unsere Hochzeit und die Traurede von
                  Ilona, könnten wir zufriedener nicht sein. Vom ersten Treffen
                  an hat sie uns mit ihrer herzlichen und offene Art überzeugt
                  und wir hatten von Anfang an das Gefühl bei ihr in guten
                  Händen zu sein. Sie hat sich viel Zeit für uns in einem
                  ausführlichen Gespräch genommen, um uns und unsere gemeinsame
                  Geschichte genauer kennenzulernen und die Rede so persönlich
                  wie möglich zu gestalten. Dies ist ihr auch bestens gelungen.
                  Am Tag der Hochzeit konnten wir uns voll und ganz auf Ilona
                  verlassen. Sie hat mit ihrer Rede nicht nur uns, sondern auch
                  unsere Gäste zu Tränen gerührt. Und wir denken gerne an ihre
                  Worte zurück. Wir können Ilona wärmstens empfehlen und danken
                  ihr von Herzen für die tolle Rede.&quot;
                </p>
              </div>
              <div className="lg:w-1/2 w-1/1">
                <Image
                  src={"/shiny-hearts.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="w-1/2 rounded-lg"
                ></Image>
              </div>
            </div>
          </React.Fragment>
        </Slider>
      </div>
    </div>
  );
}

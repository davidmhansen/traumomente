import Image from "next/image";

export default function Slider({ name, imageURL, quote }) {
  return (
    <section className="container flex flex-col items-start gap-16 px-8 py-8 mx-auto mb-16 rounded-lg lg:flex-row lg:px-16 lg:py-16 bg-white-linen">
      <div className="flex flex-col justify-between w-full h-full lg:w-1/2">
        <h2 className="mb-6 font-serif text-3xl tracking-tight lg:text-5xl lg:leading-tight">
          Das sagen die Paare
        </h2>
        <div>
          <span className="block mb-6 font-medium">{name}</span>
          <p className="leading-relaxed">{quote}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={imageURL}
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="w-1/2 rounded-lg shadow-2xl"
        ></Image>
      </div>
    </section>
  );
}

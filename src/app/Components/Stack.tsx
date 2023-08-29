import Image from "next/image";

const Stack = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto bg-white rounded-3xl p-20 flex flex-col items-center">
        <div className="">
          <h3 className="text-2xl md:text-6xl text-blue-600 font-bold mb-10">
            I&apos;m jamming with..
          </h3>
        </div>
        <div className="flex gap-6">
          <div className="flex-none w-16 h-16 relative">
            <Image
              src="/django-logo.png"
              alt="test"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex-none w-16 h-16 relative">
            <Image
              src="/Typescript_logo_2020.svg.png"
              alt="test"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex-none w-16 h-16 relative">
            <Image
              src="/nextjs.png"
              alt="test"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex-none w-16 h-16 relative">
            <Image
              src="/Python-logo-notext.svg.png"
              alt="test"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;

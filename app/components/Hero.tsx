import Image from "next/image";

export default function HeroFull() {
  return (
    <section className="relative h-screen w-full bg-black">
      <Image
        src="/images/petswap-hero.jpeg"
        alt="Two neighbors meeting with their dogs for a PetSwap hand-off"
        fill
        priority
        className="object-cover opacity-50"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col ve h-full items-center justify-center text-center">
        <div className="flex mt-10 flex-col items-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Swap care, not cash
            </h1>
            <p className="mt-4rounded-xl font-semibold p-4 text-lg text-white">
              Joining is free. You’ll get starter and referral points, and if
              you run low, you can earn more by helping others or simply buy
              them.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#waitlist"
                className="rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-soft hover:brightness-95"
              >
                Join the app waitlist
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl bg-[#eaf5f0] px-5 py-3 font-semibold text-brand shadow-soft hover:brightness-95"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
        {/* <Image
          className="inset-0 z-[9999] rounded-xl mt-5"
          src="/images/banner_logo.png"
          alt="PetSwap logo"
          width={150}
          height={75}
        /> */}
      </div>
    </section>
  );
}

import Image from "next/image";

export default function HeroFull() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/petswap-hero.jpeg"
        alt="Two neighbors meeting with their dogs for a PetSwap hand-off"
        fill
        priority
        className="object-cover"
      />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Swap care, not cash
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Joining is free. You’ll get starter and referral points, and if you
            run low, you can earn more by helping others or simply buy them.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#waitlist"
              className="rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-soft hover:brightness-95"
            >
              Join the waitlist
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
    </section>
  );
}

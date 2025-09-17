export default function AnnouncementBar() {
  return (
    <div className="bg-brand text-white">
      <div className="max-w-content mx-auto flex items-center justify-center gap-4 px-4 py-2">
        <span>🎉 Early birds: First 1,000 on the app waitlist get 500 points.</span>
        <a
          href="#waitlist"
          className="inline-block rounded-xl bg-[#eaf5f0] px-4 py-2 font-semibold text-brand shadow-soft hover:brightness-95"
        >
          Join
        </a>
      </div>
    </div>
  );
}

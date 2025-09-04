import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitListForm";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Safety from "@/components/Safety";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProof from "./components/SocialProof";

export default function Page() {
  return (
    <main className="bg-bg text-ink font-sans">
      <AnnouncementBar />
      <Hero />
      <SocialProof />
      <WaitlistForm />
      <HowItWorks />
      <Community />
      <Safety />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { DiscographySection } from "@/components/sections/DiscographySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestSection } from "@/components/sections/ManifestSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TracksSection } from "@/components/sections/TracksSection";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import {
  artists,
  galleryItems,
  manifestPhrases,
  navigation,
  releases,
  socialLinks,
  timelineItems,
  tracks,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <NoiseOverlay />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <GradientOrb
          className="left-[-8rem] top-20 h-72 w-72 sm:h-96 sm:w-96"
          from="rgba(145, 124, 255, 0.28)"
          to="rgba(145, 124, 255, 0)"
        />
        <GradientOrb
          className="right-[-10rem] top-[18rem] h-80 w-80 sm:h-[28rem] sm:w-[28rem]"
          from="rgba(91, 162, 255, 0.22)"
          to="rgba(91, 162, 255, 0)"
        />
        <GradientOrb
          className="bottom-[-14rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2"
          from="rgba(255, 92, 114, 0.14)"
          to="rgba(255, 92, 114, 0)"
        />
      </div>

      <Header navigation={navigation} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection artists={artists} />
        <DiscographySection releases={releases} />
        <TracksSection tracks={tracks} />
        <GallerySection items={galleryItems} />
        <TimelineSection items={timelineItems} />
        <ManifestSection phrases={manifestPhrases} />
        <SocialSection links={socialLinks} />
      </main>

      <Footer navigation={navigation} socialLinks={socialLinks} />
    </div>
  );
}

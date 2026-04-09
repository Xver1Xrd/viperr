import type { TrackItem } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TrackPlayer } from "@/components/ui/TrackPlayer";

type TracksSectionProps = {
  tracks: TrackItem[];
};

export function TracksSection({ tracks }: TracksSectionProps) {
  return (
    <Section
      id="tracks"
      eyebrow="Featured tracks"
      title="A listening block that feels alive."
      description="Здесь нет встраивания стриминга ради галочки. Вместо этого — собственный UI-плеер, который даёт ощущение живого музыкального интерфейса: waveform, темп, переходы и active-state динамика."
    >
      <Reveal>
        <TrackPlayer tracks={tracks} />
      </Reveal>
    </Section>
  );
}

export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 opacity-[0.12]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,6,10,0.2)_35%,rgba(5,6,10,0.75)_100%)]" />
    </div>
  );
}

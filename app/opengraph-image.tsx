import { ImageResponse } from "next/og";
export const alt = "VIPERR";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 16% 20%, rgba(138,125,255,0.36), transparent 34%), radial-gradient(circle at 84% 12%, rgba(123,198,255,0.28), transparent 32%), radial-gradient(circle at 50% 120%, rgba(255,108,135,0.22), transparent 34%), linear-gradient(180deg, #04060c 0%, #060913 45%, #04060c 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.72,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.08)",
              fontWeight: 700,
            }}
          >
            V
          </div>
          VIPERR
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Kai Angel + 9mice
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 860,
            }}
          >
            Релизы, визуалы и треки Kai Angel и 9mice в одном архиве.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            color: "rgba(255,255,255,0.65)",
            fontSize: 24,
          }}
        >
          <div>Главная</div>
          <div>Релизы</div>
          <div>Галерея</div>
          <div>Links</div>
        </div>
      </div>
    ),
    size,
  );
}

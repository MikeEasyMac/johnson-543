import Intro from "@/components/intro";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <section
        style={{
          backgroundColor: "#FFFDD0",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Intro />
      </section>

      <section
        style={{
          backgroundColor: "#FFFDD0",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Intro />
      </section>
    </div>
  );
}

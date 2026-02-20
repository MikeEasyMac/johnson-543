import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      
      <section className="bg-amber-100 p-5 rounded-lg shadow">
        <Intro />
      </section>

      <section className="bg-amber-100 p-5 rounded-lg shadow">
        <Intro />
      </section>

    </div>
  );
}
import HorizontalScrollCarousel from "./ProjectsCarousel";

export default function Projects() {
  return (
    <section className="pl-20 py-10 bg-black" >
      <h2 className="header">projects</h2>
      <div className="flex flex-col " >
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
}
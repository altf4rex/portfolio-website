import HorizontalScrollCarousel from "./ProjectsCarousel";

export default function Projects() {
  return (
    <section className="pl-20 py-10 bg-black max-md:pl-0" >
      <h2 className="header">PROJECTS</h2>
      <div className="min-h-screen flex flex-col">
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
}
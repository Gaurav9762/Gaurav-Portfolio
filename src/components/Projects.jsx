const projects = [
  {
    name: "CherryPick Deals",
    tech: "React, Express, MySQL, JWT",
    desc: "E-commerce app with secured authentication and responsive UI.",
  },
  {
    name: "Kuebot",
    tech: "Node.js, Express, MySQL, JWT",
    desc: "Appointment booking with WhatsApp API for real-time notifications.",
  },
  {
    name: "Apria Home",
    tech: "Shopify, Tailwind CSS, JS",
    desc: "Custom Shopify storefront, optimized checkout, bulk product import.",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      {projects.map((p) => (
        <div key={p.name} className="mb-4 border-b pb-2">
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="italic">{p.tech}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}

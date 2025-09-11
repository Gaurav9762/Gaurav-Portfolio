const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "MySQL",
  "AWS EC2",
  "Docker",
  "Shopify (Liquid)",
  "JWT",
  "Spring Boot",
];
export default function Skills() {
  return (
    <section id="skills" className="p-8">
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-teal-200 text-teal-900 px-2 py-1 rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

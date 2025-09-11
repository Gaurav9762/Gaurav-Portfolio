export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Gaurav Deshpande</div>
      <ul className="flex gap-4">
        <li>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

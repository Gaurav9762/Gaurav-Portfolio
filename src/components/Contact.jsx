import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMsg(data.success ? "Message sent!" : "Error, try again.");
    } catch {
      setMsg("Server error.");
    }
  };
  return (
    <section id="contact" className="p-8">
      <h2 className="text-3xl font-bold mb-2">Contact</h2>
      <form className="flex flex-col gap-3 max-w-md" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          required
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <button className="bg-teal-600 text-white p-2 rounded hover:bg-teal-800">
          Send
        </button>
        <div>{msg}</div>
      </form>
    </section>
  );
}

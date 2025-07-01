import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formsubmit.co/ajax/chakri.thotakura2022@vitstudent.ac.in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center text-white bg-transparent">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-sm">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Message</span>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-2 mt-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
        >
          Send Message
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-400 text-sm mt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-400 text-sm mt-4 text-center">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;

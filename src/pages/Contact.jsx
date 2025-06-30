const Contact = () => {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center text-white bg-transparent">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form
        action="https://formsubmit.co/chakri.thotakura2022@vitstudent.ac.in"
        method="POST"
        className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg"
      >
        {/* Prevent Captcha */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Optional Redirect after submit */}
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        <label className="block mb-4">
          <span className="text-sm">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Message</span>
          <textarea
            name="message"
            rows="4"
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
      </form>
    </div>
  );
};

export default Contact;

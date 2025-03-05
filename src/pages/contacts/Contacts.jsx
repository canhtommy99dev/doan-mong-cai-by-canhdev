const Contact = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold text-blue-600">Contact Us</h2>
      <form className="mt-4 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border rounded"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

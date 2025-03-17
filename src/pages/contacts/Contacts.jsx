export default function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen bg-gray-100 p-4 gap-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-4">Phone: +1 234 567 890</p>
        <p className="text-center text-gray-600 mb-6">
          Location: 123 Main St, City, Country
        </p>
      </div>

      <div className="h-full">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094155!2d144.95565131531567!3d-37.817327979751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f0d68a0b19e!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1649284000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

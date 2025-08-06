export default function Contact() {
  return (
    <div className="min-h-screen w-full animate-gradient flex items-center">
      <div className="mx-auto max-w-2xl lg:max-w-7xl w-full p-6">
        <h3 className="mt-2 text-4xl font-medium tracking-tighter text-white sm:text-6xl gradient-text">
          Thông tin liên hệ
        </h3>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg glass rounded-xl p-6">
            <p className="text-sm text-white font-medium">
              <span className="font-bold">Trụ sở:</span> Số 38, đường Hữu Nghị,
              phường Trần Phú, phường Móng Cái 1
            </p>
            <p className="mt-6 text-sm text-white font-medium">
              <span className="font-bold">SĐT & Fax:</span> 02033.886.908
            </p>
            <p className="mt-6 text-sm text-white font-medium">
              <span className="font-bold">Email:</span>{" "}
              thanhdoanmongcai@gmail.com
            </p>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl">
              <iframe
                title="Google Map Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.778218965905!2d107.96323747777987!3d21.5228375930723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b56af577fb317%3A0x9152fdd8ee7b12f!2zMzggSOG7r3UgTmdo4buLLCBQLiBUcuG6p24gUGjDuiwgTcOzbmcgQ8OhaSwgUXXhuqNuZyBOaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1742833907879!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

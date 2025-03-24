import { useEffect } from "react";
import animationData from "../../assets/not-found.json";
import Lottie from "react-lottie";

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    document.title = "Lỗi trang";
  }, []);

  return (
    <div className="relative isolate flex items-center justify-center h-screen bg-blue-300 px-6">
      {/* Background Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      {/* Lottie Animation & Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

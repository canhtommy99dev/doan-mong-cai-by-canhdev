import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            Đoàn Thanh Niên Phường Móng Cái 1
          </h3>
          <p className="text-sm opacity-90">
            Tuổi trẻ tiên phong, sáng tạo, cống hiến vì cộng đồng
          </p>
        </div>
        <Separator className="w-32 mb-4 bg-white/20" />
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Make by CanhTommy99Dev. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

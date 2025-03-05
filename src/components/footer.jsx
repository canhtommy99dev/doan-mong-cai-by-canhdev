import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Make by CanhTommy99Dev. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

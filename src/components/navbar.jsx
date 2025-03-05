import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Info, Calendar, Mail, Menu } from "lucide-react";
import logo from "../assets/logoDoan.png";

const Navbar = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "Events", path: "/events", icon: <Calendar className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Left Section: Logo & Title */}
      <div className="flex items-center space-x-2">
        {/* Sidebar Button for Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-64 p-4">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className="w-full justify-start text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo & Title */}
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="text-lg font-bold">Đoàn Thanh Niên Móng Cái</span>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className="text-white flex items-center hover:bg-blue-700"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

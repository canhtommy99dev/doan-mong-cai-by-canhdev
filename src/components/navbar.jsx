import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Info, Calendar, Mail, Menu } from "lucide-react";
import logo from "../assets/logoDoan.png";

const Navbar = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Trang chủ", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Giới thiệu", path: "/about", icon: <Info className="w-5 h-5" /> },
    {
      name: "Sự kiện",
      path: "/events",
      icon: <Calendar className="w-5 h-5" />,
    },
    { name: "Liên Hệ", path: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4  flex items-center justify-between transition-all duration-300 ${
        scrolling
          ? "bg-blue-600 text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Left Section: Logo & Title */}
      <div className="flex items-center space-x-2">
        {/* Sidebar Button for Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-64 p-4">
            <motion.nav
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
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
                </motion.div>
              ))}
            </motion.nav>
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
            className="flex items-center hover:bg-blue-700"
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

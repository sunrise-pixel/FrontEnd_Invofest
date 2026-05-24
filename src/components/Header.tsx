import { useState } from "react";
import { Home, Info, Users, HelpCircle, LogIn, Menu, X } from "lucide-react";
import { NavLink } from "./ui/NavLink";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", href: "#", icon: <Home size={18} /> },
    { label: "Tentang", href: "#about", icon: <Info size={18} /> },
    { label: "Narasumber", href: "#speakers", icon: <Users size={18} /> },
    { label: "FAQ", href: "#faq", icon: <HelpCircle size={18} /> },
    { label: "Login Admin", href: "/login", icon: <LogIn size={18} />, isPrimary: true },
  ];

  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-12 sm:h-16"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="nav hidden md:flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              isActive={item.href === "#"}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-red-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t pt-4">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  item.isPrimary
                    ? "bg-red-900 text-white hover:bg-red-800"
                    : "text-slate-600 hover:text-red-900 hover:bg-red-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

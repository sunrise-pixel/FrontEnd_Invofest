import { useState } from "react";
import type { ReactNode } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Home, Users, Calendar, FolderOpen, LogOut } from "lucide-react";

interface AdminLayoutProps {
  children?: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { nim, logout } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", href: "/admin", icon: <Home size={16} /> },
    { label: "Kategori", href: "/admin/kategori", icon: <FolderOpen size={16} /> },
    { label: "Narasumber", href: "/admin/pembicara", icon: <Users size={16} /> },
    { label: "Event", href: "/admin/event", icon: <Calendar size={16} /> },
    { label: "Biodata", href: "/admin/biodata", icon: <Users size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="text-base sm:text-lg font-bold text-gray-100">Admin</div>
            <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <Link key={item.href} to={item.href} className="flex items-center gap-2 text-gray-400 hover:text-gray-100 text-sm transition-colors">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-gray-400 text-sm hidden md:block">{nim}</span>
              <button onClick={handleLogout} className="text-gray-400 hover:text-gray-100 text-sm flex items-center gap-1 sm:gap-2">
                <LogOut size={14} sm:size={16} />
                <span className="hidden sm:inline">Keluar</span>
              </button>
              <button className="lg:hidden p-1 sm:p-2 text-gray-400 hover:text-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-700 bg-gray-800">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className="flex items-center gap-3 text-gray-300 hover:text-gray-100 hover:bg-gray-700 px-3 py-2.5 rounded-lg text-sm transition-colors" 
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default AdminLayout;
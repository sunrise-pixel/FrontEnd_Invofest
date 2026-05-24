import { Link } from "react-router-dom";
import { Calendar, Users, FolderOpen, ChevronRight } from "lucide-react";

export const AdminDashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">Dashboard</h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">Selamat datang di sistem</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-sm sm:text-base text-gray-300">Maula adiba mufadol</p>
          <p className="text-xs sm:text-sm text-gray-500">24090052 | 4B</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">TOTAL EVENT</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">4</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Calendar className="text-gray-300" size={20} sm:size={24} />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">TOTAL PEMBICARA</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">3</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Users className="text-gray-300" size={20} sm:size={24} />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-5 xs:col-span-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">TOTAL KATEGORI</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">4</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center">
              <FolderOpen className="text-gray-300" size={20} sm:size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-700">
          <h2 className="font-semibold text-gray-100 text-sm sm:text-base">Menu Manajemen</h2>
        </div>
        <div className="divide-y divide-gray-700">
          <Link to="/admin/kategori" className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <FolderOpen className="text-gray-300" size={16} />
              </div>
              <span className="text-gray-200 text-sm sm:text-base">Kelola Kategori</span>
            </div>
            <ChevronRight className="text-gray-500" size={16} />
          </Link>
          <Link to="/admin/pembicara" className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <Users className="text-gray-300" size={16} />
              </div>
              <span className="text-gray-200 text-sm sm:text-base">Kelola Narasumber</span>
            </div>
            <ChevronRight className="text-gray-500" size={16} />
          </Link>
          <Link to="/admin/event" className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <Calendar className="text-gray-300" size={16} />
              </div>
              <span className="text-gray-200 text-sm sm:text-base">Kelola Event</span>
            </div>
            <ChevronRight className="text-gray-500" size={16} />
          </Link>
          <Link to="/admin/biodata" className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <Users className="text-gray-300" size={16} />
              </div>
              <span className="text-gray-200 text-sm sm:text-base">Biodata</span>
            </div>
            <ChevronRight className="text-gray-500" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
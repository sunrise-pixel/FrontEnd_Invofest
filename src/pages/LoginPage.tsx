import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const LoginPage = () => {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nim.trim() || !password.trim()) {
      setError("NIM dan Password harus diisi");
      return;
    }
    if (nim === "24090052" && password === "admin1234") {
      login(nim);
      navigate("/admin");
    } else {
      setError("NIM atau Password salah");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="px-6 sm:px-8 py-6 sm:py-8">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">Admin</h1>
              <p className="text-gray-400 text-sm mt-1">Masuk ke akun Anda</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">NIM</label>
                <input 
                  type="text" 
                  value={nim} 
                  onChange={(e) => setNim(e.target.value)} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-600 rounded-lg sm:rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm sm:text-base" 
                  placeholder="Masukkan NIM"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 bg-gray-900 border border-gray-600 rounded-lg sm:rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm sm:text-base" 
                    placeholder="Masukkan Password"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 p-1"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <div className="bg-red-900/30 border border-red-800 text-red-400 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm">
                  {error}
                </div>
              )}
              <button type="submit" className="w-full bg-gray-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-600 font-medium transition-colors mt-2 text-sm sm:text-base">
                Masuk
              </button>
            </form>
          </div>
          <div className="bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-center border-t border-gray-700">
            <p className="text-gray-500 text-xs sm:text-sm">Sistem Manajemen Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
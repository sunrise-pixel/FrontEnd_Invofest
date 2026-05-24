import { useState } from "react";
import { FolderOpen, Plus, Edit2, Trash2, X } from "lucide-react";

const invofestCategories = [
  {
    id: 1,
    nama: "IT Seminar",
    deskripsi: "Seminar nasional \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\" untuk mengembangkan potensi diri dan pengetahuan teknologi.",
    jumlahEvent: 1,
  },
  {
    id: 2,
    nama: "IT Workshop",
    deskripsi: "Workshop \"AI for a Sustainable Future: The Role of Z Generation in the Digital Era\" membekali Gen Z dengan keterampilan praktis AI.",
    jumlahEvent: 1,
  },
  {
    id: 3,
    nama: "IT Talkshow",
    deskripsi: "Talkshow \"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\" membahas peran manusia dalam memanfaatkan AI.",
    jumlahEvent: 1,
  },
  {
    id: 4,
    nama: "IT Competition",
    deskripsi: "Kompetisi \"From Creation to Innovation\" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas.",
    jumlahEvent: 1,
  },
];

export const CategoryManagement = () => {
  const [categories] = useState(invofestCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<typeof invofestCategories[0] | null>(null);
  const [formData, setFormData] = useState({ nama: "", deskripsi: "" });

  const handleEdit = (category: typeof invofestCategories[0]) => {
    setEditingCategory(category);
    setFormData({ nama: category.nama, deskripsi: category.deskripsi });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus kategori ini?")) {
      // In real app, call API
      console.log("Delete category:", id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save category:", formData);
    setShowModal(false);
    setFormData({ nama: "", deskripsi: "" });
    setEditingCategory(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-xl font-bold text-gray-100">Kelola Kategori</h1>
        <button
          onClick={() => { setShowModal(true); setEditingCategory(null); setFormData({ nama: "", deskripsi: "" }); }}
          className="flex items-center gap-2 bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm"
        >
          <Plus size={14} sm:size={16} />
          <span className="hidden xs:inline">Tambah</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-gray-800 rounded-lg border border-gray-700 p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="text-gray-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">{category.nama}</h3>
                  <p className="text-gray-400 text-sm mt-1">{category.deskripsi}</p>
                  <p className="text-gray-500 text-xs mt-2">{category.jumlahEvent} Event</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(category)} className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => handleDelete(category.id)} className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-xs sm:max-w-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-100">
                {editingCategory ? "Edit Kategori" : "Tambah Kategori Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-1 text-gray-400 hover:text-gray-200">
                <X size={18} sm:size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Nama Kategori</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Deskripsi</label>
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 h-20 sm:h-24 resize-none text-sm"
                  required
                />
              </div>
              <div className="flex gap-2 sm:gap-3 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 text-xs sm:text-sm">
                  Batal
                </button>
                <button type="submit" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
import { useState } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

const invofestPembicara = [
  {
    id: 1,
    nama: "Dery Agung Triyadi",
    role: "AWS Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    bio: "Narasumber untuk IT Seminar dengan topik \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif\"",
  },
  {
    id: 2,
    nama: "Sowam Habibi",
    role: "Google Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    bio: "Narasumber untuk IT Talkshow dengan topik \"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan\"",
  },
  {
    id: 3,
    nama: "Lhuqita Fazry",
    role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
    imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    bio: "Narasumber untuk IT Workshop dengan topik \"AI for a Sustainable Future: The Role of Z Generation in the Digital Era\"",
  },
];

export const PembicaraManagement = () => {
  const [pembicara] = useState(invofestPembicara);
  const [showModal, setShowModal] = useState(false);
  const [editingPembicara, setEditingPembicara] = useState<typeof invofestPembicara[0] | null>(null);
  const [formData, setFormData] = useState({ nama: "", role: "", imageUrl: "", bio: "" });

  const handleEdit = (p: typeof invofestPembicara[0]) => {
    setEditingPembicara(p);
    setFormData({ nama: p.nama, role: p.role, imageUrl: p.imageUrl, bio: p.bio });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus narasumber ini?")) {
      console.log("Delete pembicara:", id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save pembicara:", formData);
    setShowModal(false);
    setFormData({ nama: "", role: "", imageUrl: "", bio: "" });
    setEditingPembicara(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-xl font-bold text-gray-100">Kelola Narasumber</h1>
        <button
          onClick={() => { setShowModal(true); setEditingPembicara(null); setFormData({ nama: "", role: "", imageUrl: "", bio: "" }); }}
          className="flex items-center gap-2 bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm"
        >
          <Plus size={14} sm:size={16} />
          <span className="hidden xs:inline">Tambah</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {pembicara.map((p) => (
          <div key={p.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="relative h-40">
              <img src={p.imageUrl} alt={p.nama} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">{p.nama}</h3>
              <p className="text-gray-400 text-sm">{p.role}</p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{p.bio}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleEdit(p)} className="flex-1 flex items-center justify-center gap-1 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 text-sm">
                  <Edit2 size={14} />
                  Edit
                </button>
                <button onClick={() => handleDelete(p.id)} className="px-3 py-2 bg-gray-700 text-gray-400 rounded-lg hover:text-red-400 hover:bg-gray-600">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-xs sm:max-w-md p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-100">
                {editingPembicara ? "Edit Narasumber" : "Tambah Narasumber Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-1 text-gray-400 hover:text-gray-200">
                <X size={18} sm:size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Nama</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Role / Jabatan</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">URL Foto</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-gray-500 h-24 resize-none"
                  required
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700">
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

export default PembicaraManagement;
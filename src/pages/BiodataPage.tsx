export const BiodataPage = () => {
  const studentData = {
    nim: "24090052",
    nama: "Maula adiba mufadol",
    prodi: "D4 Teknik Informatika",
    semester: "4",
    kelas: "4B",
    dosen: "Jamal Apridi, S.Kom.",
    mataKuliah: "Pemrograman Web 2",
    jenisTes: "Project",
    tahunAkademik: "2025/2026"
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-100">Biodata Mahasiswa</h1>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full">
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">NIM</span>
            <span className="text-gray-100 font-medium">{studentData.nim}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Nama Lengkap</span>
            <span className="text-gray-100 font-medium">{studentData.nama}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Program Studi</span>
            <span className="text-gray-100 font-medium">{studentData.prodi}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Semester / Kelas</span>
            <span className="text-gray-100 font-medium">{studentData.semester} / {studentData.kelas}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Dosen Pengampu</span>
            <span className="text-gray-100 font-medium">{studentData.dosen}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Mata Kuliah</span>
            <span className="text-gray-100 font-medium">{studentData.mataKuliah}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400 text-sm">Jenis Tes</span>
            <span className="text-gray-100 font-medium">{studentData.jenisTes}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400 text-sm">Tahun Akademik</span>
            <span className="text-gray-100 font-medium">{studentData.tahunAkademik}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;
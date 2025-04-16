import React from "react";
import profilePic from "../assets/defaultPP.jpg";

const ListContact = ({ contact, deleteContact }) => {
  return (
    <div className="flex flex-col   max-w-xl min-w-[300px] mx-auto justify gap-4 mb-4">
      {contact.map((contact, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between gap-4 px-4 py-3 bg-slate-200 rounded-lg text-slate-900"
          >
            {/* Bagian kiri: Foto profil dan info kontak */}
            <div className="flex items-center flex-1 min-w-0 gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm md:text-xl font-semibold truncate">
                  {contact.nama}
                </p>
                <p className="text-xs md:text-sm  truncate">{contact.nomor}</p>
              </div>
            </div>

            {/* Bagian kanan: Tombol aksi */}
            <div className="flex flex-col gap-2">
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs md:text-sm rounded-full px-4 py-2  hover:-translate-y-1  active:scale-105 transition-transform duration-150 whitespace-nowrap">
                Edit
              </button>
              <button
                className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full px-4 py-2 text-xs md:text-sm hover:-translate-y-1 active:scale-105 transition-transform duration-150 whitespace-nowrap"
                onClick={() => deleteContact(index)}
              >
                Hapus
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListContact;
